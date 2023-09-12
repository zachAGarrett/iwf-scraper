import { ElementHandle } from "puppeteer";
import { MaybeCreateAthletesReturnType } from "../../maybeCreateAthletes";
import { MaybeCreateCompetitionReturnType } from "../../maybeCreateCompetition";
import {
  AttemptCreateInput,
  EventType_Iwf,
  MutationCreateEventsArgs,
} from "../../../__generated__/graphql";
import parseDataRow from "../../getCompetitionAthletes/parseDataRow";
import getDataRowAttempts from "../../getCompetitionAthletes/parseDataRow/getDataRowAttempts";
import parseDataSourceInput from "../../parseDataSourceInput";
import parseEventClass from "./parseEventClass";
import parseLegend from "../../parseLegend";
import { GraphQLClient } from "graphql-request";
import createEvents from "../../graph/event/createEvents";
import createAttempts from "../../graph/attempt/mutation/createAttempts";
import unpackPromiseSettledResults from "../../unpackPromiseSettledRestults";

/**
 * Each results section is a group of non-homogenous DIVs.
 * The titles for class and event both exist at the same level in the DOM tree.
 * This creates some challenges for determining which results belong to which class / event pair.
 * Fortunately, the pattern of results sections to class and event titles is predictable.
 * The pattern is [Class, Event, Results, Event, Results, Event, Results].
 * But this pattern only holds for the detailed results sections of the event screens.
 * The event totals screen does not have an event title after the class title,
 * so this function will throw an error if asked to parse that screen.
 */
export interface ParseResultsSectionProps {
  resultsSection: ElementHandle<Element>;
  athleteIds: MaybeCreateAthletesReturnType[];
  competitionId: MaybeCreateCompetitionReturnType;
  eventTitles: Array<string | undefined>;
  classNames: Array<string | undefined>;
  iterator: number;
  client: GraphQLClient;
}
const parseResultsSection = async ({
  resultsSection,
  athleteIds,
  competitionId,
  eventTitles,
  classNames,
  iterator,
  client,
}: ParseResultsSectionProps) => {
  // prevent processing Total sections
  if (
    eventTitles[iterator] !== "Clean&Jerk" &&
    eventTitles[iterator] !== "Snatch"
  ) {
    // throw new Error(`Unexpected event type ${eventTitles[iterator]}`);
    return;
  }
  /**
   * The legend row for each Result section has the card__legend class.
   * Get the keys from the legend so we can label the data later.
   */
  const legend = await resultsSection.$(".card__legend");
  const legendCells = await parseLegend(legend);

  /**
   * Get the remaining, not legend rows.
   */
  const dataRows = await resultsSection.$$(".card:not(.card__legend)");
  if (legendCells == undefined) {
    throw new Error("Could not find a legend for the results section.");
  }

  /**
   * On the event detail pages, there are three results sections for each class name.
   * Every results section has its own event name.
   * So the rate of change of class name to event name is 1/3.
   */
  const category = parseEventClass(classNames[Math.floor(iterator / 3)]!);

  /**
   * Map over all the results sections and get the row data for each.
   * The key columns for athletes on the totals tab are Rank, Name, Nation, Born, B.Weight, and Group.
   * Additionally, we need to get the athlete dataSource.id from the href of the row
   */
  enum TargetColumns {
    RANK = "Rank",
    NAME = "Name",
    NATION = "Nation",
    BIRTHDAY = "Born",
    BODYWEIGHT = "B.weight",
    GROUP = "Group",
    ONE = "1",
    TWO = "2",
    THREE = "3",
  }
  const targetColumnsList = [
    TargetColumns.RANK,
    TargetColumns.NAME,
    TargetColumns.NATION,
    TargetColumns.BIRTHDAY,
    TargetColumns.BODYWEIGHT,
    TargetColumns.GROUP,
    TargetColumns.ONE,
    TargetColumns.TWO,
    TargetColumns.THREE,
  ];
  /**
   * Parse the results from every data row and await the completion of all.
   */
  const eventCreateInputs = await Promise.all(
    dataRows.map(async (dataRow) => {
      const athleteAnchor = await dataRow.$("a");
      const athleteDataSourceinput =
        athleteAnchor === null
          ? null
          : await parseDataSourceInput(athleteAnchor, "id");

      const attempts = await getDataRowAttempts({
        dataRow,
        keys: legendCells,
        targetColumns: [
          TargetColumns.ONE,
          TargetColumns.TWO,
          TargetColumns.THREE,
        ],
      });
      const rowData = await parseDataRow({
        dataRow,
        keys: legendCells,
        targetColumns: targetColumnsList,
      });
      const athleteInternalId = athleteIds.find(
        (ath) =>
          ath.dataSourceEntityId ===
          athleteDataSourceinput?.connectOrCreate[0].onCreate.edge.entityId
      )?.internalId;

      const athleteEventConnection = {
        overwrite: true,
        where: {
          node: {
            id: athleteInternalId,
          },
        },
        edge: {
          bodyweight: Number(rowData[TargetColumns.BODYWEIGHT]),
          group: String(rowData[TargetColumns.GROUP]),
          rank: Number(rowData[TargetColumns.RANK]),
        },
      };

      const eventCreateInput: MutationCreateEventsArgs["input"][0] = {
        type:
          eventTitles[iterator] === "CLEAN&JERK"
            ? EventType_Iwf["CleanJerk"]
            : EventType_Iwf["Snatch"],
        weightClass: `${
          category?.weight
        }_${category?.unit.toLocaleUpperCase()}`,
        genderClass: category!.gender.toLocaleUpperCase(),
        competition: {
          connect: {
            where: {
              node: {
                id: competitionId.internalId,
              },
            },
          },
        },
        athletes: {
          connect: [athleteEventConnection],
        },
      };

      console.log("Creating event");
      const createEventsMutation = await client.request(createEvents, {
        input: eventCreateInput,
      });

      const createAttemptsMutationsResults = await Promise.allSettled(
        attempts.map(({ successful, weight, liftNumber }) => {
          const input: AttemptCreateInput = {
            successful: successful,
            number: liftNumber,
            weight: Number(weight),
            event: {
              connect: {
                where: {
                  node: {
                    id: createEventsMutation["createEvents"]["events"][0].id,
                  },
                },
              },
            },
            nation: {
              connectOrCreate: {
                where: {
                  node: {
                    code: String(rowData[TargetColumns.NATION]),
                  },
                },
                onCreate: {
                  node: {
                    code: String(rowData[TargetColumns.NATION]),
                  },
                },
              },
            },
            athlete: {
              connect: {
                overwrite: true,
                where: {
                  node: {
                    id: athleteInternalId,
                  },
                },
              },
            },
          };
          console.log("Creating attempt");
          return client.request(createAttempts, { input });
        })
      );

      unpackPromiseSettledResults(
        createAttemptsMutationsResults,
        undefined,
        (err) => console.error(err)
      );
      return;
    })
  );

  return eventCreateInputs;
};

export default parseResultsSection;
