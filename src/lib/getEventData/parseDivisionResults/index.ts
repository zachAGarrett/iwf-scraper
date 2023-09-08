import { ElementHandle } from "puppeteer";
import parseLegend from "./parseLegend";
import parseDataRow from "./parseRowData";

const parseDivisionResults = async (
  division: string,
  element: ElementHandle<Element> | null
) => {
  const classes = await element?.$$eval(".results__title h3", (elements) =>
    elements.map((element) => element.textContent?.replace(/\n/g, ""))
  );

  const events = await element?.$$eval(".results__title p", (elements) =>
    elements.map((element) => element.textContent?.replace(/\n/g, ""))
  );

  const resultsSections = await element?.$$(".cards");

  /**
   * Handle errors for possibly missing elements.
   */
  if (resultsSections === undefined) {
    throw new Error("Could not find any Results.");
  } else if (classes === undefined) {
    throw new Error("Could not identify classes in the results.");
  }
  if (events === undefined) {
    throw new Error("Could not find any events.");
  }
  const data = await Promise.all(
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
      const results = await Promise.all(
        dataRows.map((dataRow) => parseDataRow(dataRow, legendCells))
      );
      return {
        division,
        class: classes[Math.floor(i / 3)],
        event: events[i],
        results,
      };
    })
  );
  return data;
};

export default parseDivisionResults;
