import puppeteer from "puppeteer";
import { QueryStringOptions } from "../../types";
import serializeObject from "./serializeObject";

const getEventsDetails = async (queryStringOptions?: QueryStringOptions) => {
  let compositeUri: string;
  if (queryStringOptions !== undefined) {
    const queryString = `/?${serializeObject(queryStringOptions)}`;
    compositeUri = `https://iwf.sport/results/results-by-events/${queryString}`;
  } else {
    compositeUri = `https://iwf.sport/results/results-by-events/`;
  }

  // Launch the browser and open a new blank page
  console.log("Launching puppeteer");
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  // Navigate the page to the event we're interested in
  console.log(`Navigating to event page ${compositeUri}`);
  await page.goto(compositeUri);

  const eventList = await page.$$("#section-scroll .cards a.card");

  if (eventList === null) {
    throw new Error("Could not find events matching the criteria.");
  }

  const eventsDetails = await Promise.all(
    eventList.map(async (node) => {
      const resultsLink = await (await node.getProperty("href")).jsonValue();
      const eventDetails = await node.$$eval("p", (nodes) => {
        let details: {
          Competition: string | null;
          CompetitionDate: string | null | undefined;
          Country: string | null | undefined;
          City: string | null | undefined;
        } = {
          Competition: null,
          CompetitionDate: null,
          Country: null,
          City: null,
        };
        nodes.forEach((node, i) => {
          switch (i) {
            case 0:
              details.Competition = node.textContent;
              break;
            case 1:
              details.CompetitionDate = node.textContent
                ?.replace(/\n/g, "")
                .replace(/\s+$/, "");
              break;
            default:
              const location = parseCityAndCountry(
                node.textContent?.replace(/\n/g, "").replace(/\s+$/, "")!
              );
              details.Country = location?.country;
              details.City = location?.city;
              break;
          }
        });
        return details;
      });

      return { resultsLink, ...eventDetails };
    })
  );

  await browser.close();
  return eventsDetails;
};
export default getEventsDetails;

const parseCityAndCountry = (inputString: string) => {
  const parts = inputString.split(",");

  if (parts.length === 2) {
    const city = parts[0].trim();
    const country = parts[1].trim();
    return {
      city,
      country,
    };
  } else {
    // Handle invalid input
    return null;
  }
};
