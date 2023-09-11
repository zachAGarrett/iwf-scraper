import puppeteer from "puppeteer";
import { QueryStringOptions } from "../../types";
import serializeObject from "./serializeObject";
import { MutationCreateCompetitionsArgs } from "../../__generated__/graphql";
import parseCompetitionDetails from "./parseCompetitionDetails";
import parseDataSources from "./parseCompetitionDetails/parseDataSource";

const getCompetitionsDetails = async (
  queryStringOptions?: QueryStringOptions
) => {
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

  const competitions = await page.$$("#section-scroll .cards a.card");

  if (competitions === null || competitions.length === 0) {
    throw new Error("Could not find events matching the criteria.");
  }

  const allCompetitionDetails = await Promise.all(
    competitions.map(
      async (node): Promise<MutationCreateCompetitionsArgs["input"][0]> => {
        const [dataSources, competitionDetails] = await Promise.all([
          parseDataSources(node),
          parseCompetitionDetails(node),
        ]);

        const createCompetitionInput: MutationCreateCompetitionsArgs["input"][0] =
          { dataSources, ...competitionDetails };

        return createCompetitionInput;
      }
    )
  );

  await browser.close();
  return allCompetitionDetails;
};
export default getCompetitionsDetails;
