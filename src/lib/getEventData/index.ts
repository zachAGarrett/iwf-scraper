// https://iwf.sport/results/results-by-events/?event_id=574

import puppeteer from "puppeteer";
import parseDivisionResults from "./parseDivisionResults";

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

  //// Get the data from known selectors
  console.log(`Getting data for event ${event_id}`);
  /** Set up the known selectors from the results page.
   * The page uses a tab structure to show and hide content,
   * but all data is present on the page at load time.
   * A future optimization would store and validate these selectors
   * and this scraper would ingest them. */
  const divisionSelectors = ["#men_snatchjerk", "#women_snatchjerk"];

  /** Await the results from parsing all selectors.
   * This process is a little slow, since parseResultSection() contains several nested awaits.
   * Additionally, if any operation fails, they all fail.
   * Therefore, a more robust solution would use await Promise.allSettled()
   * and handle resolved and rejected responses. */
  const results = await Promise.all(
    divisionSelectors.map(async (selector) => {
      const resultSection = await page.$(selector);
      const divisionResults = await parseDivisionResults(
        selector,
        resultSection
      );
      return divisionResults;
    })
  );

  await browser.close();
  return results;
};

export default getEventData;
