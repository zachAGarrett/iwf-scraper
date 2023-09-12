import { ElementHandle } from "puppeteer";
import parseLegend from "../parseLegend";
import parseDataSourceInput from "../parseDataSourceInput";
import parseDataRow from "./parseDataRow";

export interface GetCompetitionAthletesProps {
  competitionInternalId: string;
  competitionTotalsTab: ElementHandle<Element>;
  logDecorator?: string;
}
const getCompetitionAthletes = async ({
  competitionInternalId,
  competitionTotalsTab,
  logDecorator,
}: GetCompetitionAthletesProps) => {
  const maybeLogDecorator = logDecorator ? `[${logDecorator}]: ` : "";
  console.log(
    `[${new Date().toISOString()}]${maybeLogDecorator} Getting athlete data.`
  );
  const eventSections = await competitionTotalsTab.$$(".cards");

  /**
   * Handle errors for possibly missing elements.
   */
  if (eventSections === undefined) {
    throw new Error(
      `[${new Date().toISOString()}]${maybeLogDecorator} Could not find any events.`
    );
  }
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
  }
  const targetColumnsList = [
    TargetColumns.RANK,
    TargetColumns.NAME,
    TargetColumns.NATION,
    TargetColumns.BIRTHDAY,
    TargetColumns.BODYWEIGHT,
    TargetColumns.GROUP,
  ];
  const competitionAthletes = await Promise.all(
    eventSections.map(async (section, i) => {
      /**
       * The legend row for each Result section has the card__legend class.
       * Get the keys from the legend so we can label the data later.
       */
      const legend = await section.$(".card__legend");
      const legendCells = await parseLegend(legend);

      /**
       * Get the remaining, not legend rows.
       */
      const dataRows = await section.$$(".card:not(.card__legend)");
      if (legendCells == undefined) {
        throw new Error(
          `[${new Date().toISOString()}]${maybeLogDecorator} Could not find a legend for the results section.`
        );
      }

      const eventAthletes = await Promise.all(
        dataRows.map(async (dataRow) => {
          const athleteAnchor = await dataRow.$("a");
          const athleteDataSourceinput =
            athleteAnchor === null
              ? null
              : await parseDataSourceInput(athleteAnchor, "id");

          const athleteData = await parseDataRow({
            dataRow,
            keys: legendCells,
            targetColumns: targetColumnsList,
          });

          const createAthleteInput = {
            birthday: athleteData[TargetColumns.BIRTHDAY],
            competitions: {
              connect: [
                {
                  edge: {
                    rank: Number(athleteData[TargetColumns.RANK]),
                    group: String(athleteData[TargetColumns.GROUP]),
                    bodyweight: Number(athleteData[TargetColumns.BODYWEIGHT]),
                  },
                  where: {
                    node: {
                      id: competitionInternalId,
                    },
                  },
                },
              ],
            },
            nations: {
              connectOrCreate: [
                {
                  where: {
                    node: { code: String(athleteData[TargetColumns.NATION]) },
                  },
                  onCreate: {
                    node: { code: String(athleteData[TargetColumns.NATION]) },
                  },
                },
              ],
            },
            dataSources: athleteDataSourceinput,
            name: String(athleteData[TargetColumns.NAME]),
          };
          return createAthleteInput;
        })
      );
      return eventAthletes;
    })
  );
  return competitionAthletes.flat();
};

export default getCompetitionAthletes;
