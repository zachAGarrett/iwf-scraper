import puppeteer from "puppeteer";
import parseResults from "./parseResults";
import { EventGender } from "../../types";

export interface getEventResultsProps {
  event_id: number;
}
const getEventResults = async ({ event_id }: getEventResultsProps) => {
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
   * The event results page uses a tab structure to show and hide content,
   * but all data is present on the page at load time.
   * A future optimization would store and validate these selectors
   * and this scraper would ingest them.
   *
   * Note:
   * If there is some event results page that doesn't adhere to this structure, this scraper will throw an error */
  const eventGenderSelectors = [
    { eventGender: EventGender.MEN, selector: "#men_snatchjerk" },
    { eventGender: EventGender.WOMEN, selector: "#women_snatchjerk" },
  ];

  /** Await the results from parsing all selectors.
   * This process is a little slow, since parseResultSection() contains several nested awaits.
   * Additionally, if any operation fails, they all fail.
   * Therefore, a more robust solution would use await Promise.allSettled()
   * and handle resolved and rejected responses. */
  const results = await Promise.all(
    eventGenderSelectors.map(async ({ eventGender, selector }) => {
      const resultSection = await page.$(selector);

      if (resultSection === null) {
        throw new Error(
          `Could not find the targeted section: ${selector} at url: ${compositeUri}`
        );
      }
      const eventGenderResults = await parseResults({
        eventGender,
        element: resultSection,
      });
      return eventGenderResults;
    })
  );

  await browser.close();
  return results.flat();
};

export default getEventResults;
