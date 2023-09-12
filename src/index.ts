import { GraphQLClient } from "graphql-request";
import * as dotenv from "dotenv";
import createCompetition from "./lib/graph/competition/mutation/createCompetition";
import getCompetitionsDetails from "./lib/getCompetitionsDetails";
import competitions from "./lib/graph/competition/query/competitions";
import maybeCreateCompetition from "./lib/maybeCreateCompetition";
import getCompetitionAthletes from "./lib/getCompetitionAthletes";
import { EventGender } from "./types";
import evaluateResultsSections, {
  EvaluateResultsSectionsProps,
  TargetType,
} from "./lib/evaluateResultsSections";
import puppeteer from "puppeteer";
import maybeCreateAthletes, {
  MaybeCreateAthletesReturnType,
} from "./lib/maybeCreateAthletes";
import { useFragment } from "./__generated__";
import { CompetitionDefaultFieldsFragmentDoc } from "./__generated__/graphql";
import createNewAthlete from "./lib/createNewAthlete";
import connectAthleteToCompetition from "./lib/connectAthleteToCompetition";
import checkForMatchingKnownAthletes from "./lib/checkForMatchingKnownAthletes";
import unpackPromiseSettledResults from "./lib/unpackPromiseSettledRestults";
import getEventResults from "./lib/getEventResults";

/**
 *  For the sake of testing and completing the project, I'm limiting the scraping to the competition from the requirements.
 *  That being said, this library will scrape all data from iwf.sport if not filtered below.
 *  Competition 574 results in the creation of around 1500 nodes.
 */
const interestingCompetitionId = "574";

//// env stuff
dotenv.config();
const { GRAPH_URI } = process.env;

if (GRAPH_URI === undefined) {
  throw new Error("Undefined environment variable, GRAPH_URI");
}

(async () => {
  const client = new GraphQLClient(GRAPH_URI);
  // Launch the browser
  console.log("Launching puppeteer");
  const browser = await puppeteer.launch({ headless: "new" });

  try {
    /**
     * 1. Get all the competitions from iwf
     * Data source: https://iwf.sport/results/results-by-events/
     * Various filters may be applied here, but for now, this scraper just gets all the competitions
     */
    // const competitionsDetails = await getCompetitionsDetails({ browser });
    const competitionsDetails = (
      await getCompetitionsDetails({ browser })
    ).filter(
      (comp) =>
        comp.dataSources?.connectOrCreate![0].onCreate.edge.entityId ===
        interestingCompetitionId
    );
    console.log(competitionsDetails);

    /**
     * TODO: RACE CONDITIONS ARE CAUSING NODE REDUNDANCY ON ATHLETES
     * CREATE A WORK AROUND TO ENSURE COMPETITIONS ARE PROCESSED SYNCRONOUSLY
     */
    const results = await Promise.allSettled(
      /**
       * For each of the competitions in the iwf data:
       *
       * Check if the competition if already in our data and scraped.
       * Create the competition if it is new.
       * Scrape the athlete list from the competition totals page.
       * Connect all athletes to the competition, inserting any unknown athletes into the database
       * Scrape the competition results from the detailed results page.
       * Create all the events of the competition and connect them to the athletes.
       * Set Competition.scraped to true
       */
      competitionsDetails.map(async (competitionInput, i) => {
        /**
         * This is just for more detailed logging.
         * It can be used to indicate which operation number the log is from.
         */
        const operationNumberLogDecorator = `${i} / ${competitionsDetails.length}`;

        /**
         * Check if the competition if already in our data and scraped.
         */
        const knownCompetitionsQuery = await client.request(competitions, {
          where: {
            name: competitionInput.name,
            date: competitionInput.date,
            nation: {
              /**
               * It's safe to assert this is true because we set the values in getCompetitionDetails()
               * In the future, it would be good to create a type for getCompetitionDetails response
               * that doesn't rely on the generated graphql types.
               *
               * Perhaps returning a simple flat object would be good, and then develop an ORM layer.
               */
              code: competitionInput.nation!.connectOrCreate!.where.node.code,
            },
          },
        });

        /**
         * Create the competition if it is new.
         *
         * Account for the three conditions we care about:
         * 1. The competition does not exist
         * 2. The competition exists but has not been scraped
         * 3. The competition exists and has been scraped
         *
         * Unless the promise rejects, dataSourceEntityId and internalId will be set
         */

        const competitionIds = await maybeCreateCompetition({
          knownCompetitionsQuery,
          logDecorator: operationNumberLogDecorator,
          onCompetitionIsUnknown: async () => {
            const createCompetitionsMutation = await client.request(
              createCompetition,
              { input: [competitionInput] }
            );
            const createdCompetition =
              createCompetitionsMutation.createCompetitions.competitions[0];
            const competitionDefaultFields = useFragment(
              CompetitionDefaultFieldsFragmentDoc,
              createdCompetition
            );
            return {
              dataSourceEntityId:
                createdCompetition.dataSourcesConnection.edges[0].entityId,
              internalId: competitionDefaultFields.id,
            };
          },
        });

        /**
         * Match and evaluate the competition totals sections.
         * These sections contain the most simple to use list of athletes who participated, and their final results.
         * Connect all athletes to the competition (if they aren't already), inserting any unknown athletes into the database.
         */

        // Set up the targets for puppeteer to evaluate
        const totalsTargets: EvaluateResultsSectionsProps["targets"] = [
          {
            eventGender: EventGender.MEN,
            type: TargetType.TOTALS,
            id: "#men_total",
          },
          {
            eventGender: EventGender.WOMEN,
            type: TargetType.TOTALS,
            id: "#women_total",
          },
        ];

        // Match and evaluate the targets
        const totalsSectionEvaluationResults = await evaluateResultsSections({
          browser,
          logDecorator: operationNumberLogDecorator,
          event_id: competitionIds.dataSourceEntityId,
          targets: totalsTargets,
          callback: async (section, target) => {
            /**
             * Step 4:
             * Scrape the athlete list from the competition totals section.
             */
            const athleteData = await getCompetitionAthletes({
              competitionInternalId: competitionIds.internalId,
              competitionTotalsTab: section,
              logDecorator: operationNumberLogDecorator,
            });

            /**
             * Step 5:
             * Connect all athletes to the competition, inserting any unknown athletes into the database
             */

            const newOrExistingAthletesResults = await Promise.allSettled(
              athleteData.map(async (athleteInput) => {
                // Check the database for any matching athletes with the same characteristics
                const knownAthletesQuery = await checkForMatchingKnownAthletes({
                  client,
                  logDecorator: operationNumberLogDecorator,
                  athleteInput,
                  competitionInternalId: competitionIds.internalId,
                });

                // Create or update the athletes based on the knownAthletesQuery
                const athleteIds = await maybeCreateAthletes({
                  knownAthletesQuery,
                  // Create the new athlete and link them to the competition if they are not known
                  onAthleteIsUnknown: () =>
                    createNewAthlete({
                      logDecorator: operationNumberLogDecorator,
                      athleteInput,
                      client,
                    }),
                  // Link the athlete to the competition if they are known but not already connected
                  onAthleteNotConnectedToCompetition: async ({
                    id: athleteInternalId,
                  }) =>
                    connectAthleteToCompetition({
                      logDecorator: operationNumberLogDecorator,
                      client,
                      dataSourceEntityId:
                        athleteInput.dataSources!.connectOrCreate[0].onCreate
                          .edge.entityId,
                      updateAthletesInput: {
                        where: {
                          id: athleteInternalId,
                        },
                        connect: {
                          competitions: [
                            {
                              edge: athleteInput.competitions.connect[0].edge,
                            },
                          ],
                        },
                      },
                    }),
                });

                return athleteIds;
              })
            );

            let fulfilledNewOrExistingAthletes: Array<MaybeCreateAthletesReturnType> =
              [];
            let rejectedNewOrExistingAthletes: Array<{
              key: number;
              message: any;
            }> = [];
            unpackPromiseSettledResults(
              newOrExistingAthletesResults,
              (value) => fulfilledNewOrExistingAthletes.push(value),
              (message, i) =>
                rejectedNewOrExistingAthletes.push({ key: i, message })
            );
            console.debug(
              `[${new Date().toISOString()}][${operationNumberLogDecorator}][${
                competitionIds.dataSourceEntityId
              }][${target.eventGender}][${
                target.type
              }]: Fulfilled athlete process count: ${
                fulfilledNewOrExistingAthletes.length
              } / ${newOrExistingAthletesResults.length} total`
            );
            console.debug(
              `[${new Date().toISOString()}][${operationNumberLogDecorator}][${
                competitionIds.dataSourceEntityId
              }][${target.eventGender}][${
                target.type
              }]: Rejected athlete process count: ${
                rejectedNewOrExistingAthletes.length
              } / ${newOrExistingAthletesResults.length} total`
              // Add flag for detailed logs
              // rejectedNewOrExistingAthletes
            );

            return fulfilledNewOrExistingAthletes;
          },
        });

        // Temp debug only delete for production
        console.debug(totalsSectionEvaluationResults);
        const allAthletesRejected =
          totalsSectionEvaluationResults
            .map(
              (res) =>
                res.callbackResults as Array<MaybeCreateAthletesReturnType>
            )
            .flat().length === 0;
        console.debug(allAthletesRejected);

        if (allAthletesRejected) {
          throw new Error(
            `[${new Date().toISOString()}][${operationNumberLogDecorator}][${
              competitionIds.dataSourceEntityId
            }]: All athletes were rejected. There is no data to scrape.`
          );
        }

        /**
         * 5. Scrape the competition results from the detailed results section.
         */

        const detailedResultsTargets: EvaluateResultsSectionsProps["targets"] =
          [
            {
              eventGender: EventGender.MEN,
              type: TargetType.DETAILED_RESULTS,
              id: "#men_snatchjerk",
            },
            {
              eventGender: EventGender.WOMEN,
              type: TargetType.DETAILED_RESULTS,
              id: "#women_snatchjerk",
            },
          ];
        const competitionDetailedResults = await evaluateResultsSections({
          event_id: competitionIds.dataSourceEntityId,
          browser,
          targets: detailedResultsTargets,
          callback: async (resultsSection, target) => {
            await getEventResults({
              client,
              resultsSection,
              athleteIds: totalsSectionEvaluationResults
                .map(
                  (res) =>
                    res.callbackResults as Array<MaybeCreateAthletesReturnType>
                )
                .flat(),
              competitionId: competitionIds,
            });
          },
        });
        // temp debug log remove for prod
        console.log(competitionDetailedResults);
        /**
         * 6. Create all the events of the competition and connect them to the athlete
         */
        /**
         * 7. Set Competition.scraped to true
         */
        return operationNumberLogDecorator;
      })
    );
    let fulfilledMutations: Array<string> = [];
    let rejectedMutationReasons: Array<{ key: number; message: any }> = [];
    unpackPromiseSettledResults(
      results,
      (value) => fulfilledMutations.push(value),
      (message, i) => rejectedMutationReasons.push({ key: i, message })
    );

    console.debug(
      `Fulfilled competition process count: ${fulfilledMutations.length} / ${results.length} total`
    );
    console.debug(
      `Rejected competition process count: ${rejectedMutationReasons.length} / ${results.length} total`,
      // Add flag for detailed logs
      rejectedMutationReasons
    );
  } catch (error) {
    console.error(error);
  }
  await browser.close();
  return;
})();
