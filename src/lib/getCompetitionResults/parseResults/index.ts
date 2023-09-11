import { ElementHandle } from "puppeteer";
import parseLegend from "./parseLegend";
import parseDataRow from "./parseRowData";
import parseWeightUnitGender from "./parseRowData/parseWeightUnitGender";

/**
 * Each event gender results section is a group of non-homogenous DIVs.
 * The titles for class and event both exist at the same level in the DOM tree.
 * This creates some challenges for determining which results belong to which class / event pair.
 * Fortunately, the pattern of results sections to class and event titles is predictable.
 * The pattern is [Class, Event, Results, Event, Results, Event, Results].
 * But this pattern only holds for the detailed results sections of the event screens.
 * The event totals screen does not have an event title after the class title,
 * so this function will throw an error if asked to parse that screen.
 */
export interface ParseResultsProps {
  element: ElementHandle<Element> | null;
}
const ParseResults = async ({ element }: ParseResultsProps) => {
  const classNames = await element?.$$eval(".results__title h3", (elements) =>
    elements.map((element) => element.textContent?.replace(/\n/g, ""))
  );

  const listNames = await element?.$$eval(".results__title p", (elements) =>
    elements.map((element) => element.textContent?.replace(/\n/g, ""))
  );

  const resultsSections = await element?.$$(".cards");

  /**
   * Handle errors for possibly missing elements.
   */
  if (resultsSections === undefined) {
    throw new Error("Could not find any Results.");
  } else if (classNames === undefined) {
    throw new Error("Could not identify classes in the results.");
  }
  if (listNames === undefined) {
    throw new Error("Could not find any events.");
  }

  /**
   * Map over all the results sections and get the row data for each.
   * Preserve the Competition > EventGender > Class  > Event > Results structure
   */
  const eventGenderResults = await Promise.all(
    resultsSections.map(async (resultsSection, i) => {
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
      const category = parseWeightUnitGender(classNames[Math.floor(i / 3)]!);

      /**
       * Parse the results from every data row and await the completion of all.
       */
      const eventResults = await Promise.all(
        dataRows.map((dataRow) =>
          parseDataRow({
            dataRow,
            keys: legendCells,
          })
        )
      );

      return {
        category,
        liftName: listNames[i],
        rows: eventResults,
        keys: legendCells,
      };
    })
  );
  return eventGenderResults;
};

export default ParseResults;
