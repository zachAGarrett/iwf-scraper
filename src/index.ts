import { GraphQLClient } from "graphql-request";
import * as dotenv from "dotenv";
import createCompetition from "./lib/graph/competition/mutation/createCompetition";
import getCompetitionsDetails from "./lib/getCompetitionsDetails";
import {
  CompetitionDefaultFieldsFragmentDoc,
  CompetitionDetailsFragmentDoc,
  MutationCreateAthletesArgs,
} from "./__generated__/graphql";
import getCompetitionResults from "./lib/getCompetitionResults";
import competitions from "./lib/graph/competition/query/competitions";
import { useFragment } from "./__generated__";
import createAthleteInputFromDataRow from "./lib/getCompetitionResults/ORM/createAthleteInputFromDataRow";
import athletes from "./lib/graph/athlete/query/getAthletes";

//// env stuff
dotenv.config();
const { GRAPH_URI } = process.env;

if (GRAPH_URI === undefined) {
  throw new Error("Undefined environment variable, GRAPH_URI");
}

(async () => {
  const client = new GraphQLClient(GRAPH_URI);
  try {
    const competitionsDetails = await getCompetitionsDetails();

    const results = await Promise.allSettled(
      competitionsDetails.map(async (competition, i) => {
        const iterableLogDecorator = `${i} / ${competitionsDetails.length}`;
        const createCompetitionMutation = await client
          .request(competitions, {
            where: {
              name: competition.name,
              date: competition.date,
              nation: {
                /**
                 * It's safe to assert this is true because we set the values in getCompetitionDetails()
                 * In the future, it would be good to create a type for getCompetitionDetails response
                 * that doesn't rely on the generated graphql types.
                 *
                 * Perhaps returning a simple flat object would be good, and then develop an ORM layer.
                 */
                code: competition.nation!.connectOrCreate!.where.node.code,
              },
            },
          })
          .then(async (query) => {
            /** This assumes there will only be one competition at the union of name, nation, date */
            const competitionDetails = useFragment(
              CompetitionDetailsFragmentDoc,
              query.competitions[0]
            );

            /**
             * Branch the logic here to account for the three conditions we care about:
             * 1. The competition does not exist
             * 2. The competition exists but has not been scraped
             * 3. The competition exists and has been scraped
             */
            if (query.competitions.length === 0) {
              /**
               * If the competition does not exist, create and scrape it.
               */
              console.log(
                `[${new Date().toISOString()}] Ok to create and analyze competition ${iterableLogDecorator}`
              );

              /**
               * Create a promise that resolves to the competitionId after creating the new competition in the database
               */
              const competitionId = client
                .request(createCompetition, { input: [competition] })
                .then((mutation) => {
                  console.log(
                    `[${new Date().toISOString()}] Successfully created ${iterableLogDecorator}`
                  );
                  const createdCompetition =
                    mutation.createCompetitions.competitions[0];
                  const competitionDefaultFields = useFragment(
                    CompetitionDefaultFieldsFragmentDoc,
                    createdCompetition
                  );
                  return {
                    dataSourceEntityId:
                      createdCompetition.dataSourcesConnection.edges[0]
                        .entityId,
                    internalId: competitionDefaultFields.id,
                  };
                });

              return competitionId;
            } else if (competitionDetails.scraped === false) {
              /**
               * The competition exists but has not yet been analyzed
               */
              console.log(
                `[${new Date().toISOString()}] The competition exists but it needs to be analyzed ${iterableLogDecorator}`
              );
              /**
               * It's safe to assert this is true because we set the values in getCompetitionDetails()
               * In the future, it would be good to create a type for getCompetitionDetails response
               * that doesn't rely on the generated graphql types.
               *
               * Perhaps returning a simple flat object would be good, and then develop an ORM layer.
               */
              const createdCompetition = query.competitions[0];
              const competitionDefaultFields = useFragment(
                CompetitionDefaultFieldsFragmentDoc,
                createdCompetition
              );
              const competitionId =
                createdCompetition.dataSourcesConnection.edges[0].entityId;
              return {
                dataSourceEntityId: competitionId,
                internalId: competitionDefaultFields.id,
              };
            } else {
              /**
               * The competition exists and has been scraped.
               * Reject this promise and do not insert the Competition.
               */
              throw new Error(
                `[${new Date().toISOString()}] ${competition.name} on ${
                  competition.date
                } already exists in the database`
              );
            }
          })
          /**
           * Join the (non-error) logic branches since both resolve to a competitionId
           */
          .then((competition) =>
            // get the competition results
            getCompetitionResults({
              event_id: competition.dataSourceEntityId,
            })
          )
          .then((competitionData) => {
            /**
             * Create the athletes:
             *
             * 1. Map createAthleteInputs from the scraped data
             */
            const res = competitionData.flatMap(async (resultsSections) => {
              const createAthleteInputs = resultsSections.rows.map(
                async (dataRow) => {
                  const createAthleteInput = createAthleteInputFromDataRow(
                    dataRow,
                    resultsSections.keys
                  );

                  /**
                   * Check if the athelete exists in the database.
                   */
                  const athletesQuery = await client
                    .request(athletes, {
                      /**
                       * [BUG]
                       * This where clause will create a new athlete each time they compete for a different country.
                       */
                      where: {
                        birthday: createAthleteInput.birthday,
                        name: createAthleteInput.name,
                        nations_SOME: {
                          name: null,
                        },
                      },
                    })
                    .then((query) => {
                      if (query.athletes.length > 0) {
                        /**
                         * The athlete already exists. Return the internal ID but no not create.
                         */
                      } else {
                        /**
                         * The athlete does not exist yet. create them and return the internal ID.
                         */
                      }
                    });
                }
              );
            });
          });
        /**
         * Update competition scraped to true
         */

        return createCompetitionMutation;
      })
    );
    let fulfilledMutations: Array<
      Awaited<ReturnType<typeof getCompetitionResults>>
    > = [];
    let rejectedMutationReasons: Array<{ key: number; message: any }> = [];

    results.forEach((result, i) => {
      if (result.status === "fulfilled") {
        const { value } = result;
        if (!value) return;
        fulfilledMutations.push(value);
      } else if (result.status === "rejected") {
        const { reason: message } = result;
        rejectedMutationReasons.push({ key: i, message });
      }
    });

    console.log(fulfilledMutations.length, fulfilledMutations);
    console.log(rejectedMutationReasons.length, rejectedMutationReasons);
  } catch (error) {
    console.error(error);
  }
  return;
})();
