// https://iwf.sport/results/results-by-events/?event_id=574

import puppeteer, { ElementHandle } from "puppeteer";

export interface GetEventDataDataProps {
  event_id: number;
}
const getEventData = async ({ event_id }: GetEventDataDataProps) => {
  const compositeUri = `https://iwf.sport/results/results-by-events/?event_id=${event_id}`;

  // Launch the browser and open a new blank page
  console.log("Launching puppeteer");
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  // Navigate the page to the event we're interested in
  console.log(`Navigating to event page ${compositeUri}`);
  await page.goto(compositeUri);

  // Get the data from known selectors
  console.log(`Getting data for event ${event_id}`);
  const dataElementsSelectors = ["#men_snatchjerk", "#women_snatchjerk"];
  const results = await Promise.all(
    dataElementsSelectors.map(async (selector) => {
      const resultSection = await page.$(selector);
      const data = await parse(resultSection);
      return { selector, data };
    })
  );

  await browser.close();
  return results;
};

export default getEventData;

const parse = async (element: ElementHandle<Element> | null) => {
  const divisions = await element?.$$eval(".results__title h3", (elements) =>
    elements.map((element) => element.textContent?.replace(/\n/g, ""))
  );

  const lifts = await element?.$$eval(".results__title p", (elements) =>
    elements.map((element) => element.textContent?.replace(/\n/g, ""))
  );

  const tables = await element?.$$(".cards");
  if (tables === undefined || divisions === undefined || lifts === undefined) {
    return null;
  }
  const data = await Promise.all(
    tables.map(async (table, i) => {
      const rows = await table.$$(".card");
      const cols = await Promise.all(
        rows.map((row) =>
          row.$$eval("p", (cols) =>
            cols.map((dataRow) => dataRow.textContent?.replace(/\n/g, ""))
          )
        )
      );
      return {
        division: divisions[Math.floor(i / 3)],
        lift: lifts[i],
        data: cols,
      };
    })
  );
  return data;
};
