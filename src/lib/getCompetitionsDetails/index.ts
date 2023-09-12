import puppeteer, { Browser } from "puppeteer";
import { QueryStringOptions } from "../../types";
import serializeObject from "./serializeObject";
import { MutationCreateCompetitionsArgs } from "../../__generated__/graphql";
import parseCreateCompetitionInput from "./parseCreateCompetitionInput";

export interface GetCompetitionsDetailsProps {
  browser: Browser;
  queryStringOptions?: QueryStringOptions;
}
const getCompetitionsDetails = async ({
  queryStringOptions,
  browser,
}: GetCompetitionsDetailsProps) => {
  let compositeUri: string;
  if (queryStringOptions !== undefined) {
    const queryString = `/?${serializeObject(queryStringOptions)}`;
    compositeUri = `https://iwf.sport/results/results-by-events/${queryString}`;
  } else {
    compositeUri = `https://iwf.sport/results/results-by-events/`;
  }

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
        const createCompetitionInput = await parseCreateCompetitionInput(node);

        return createCompetitionInput;
      }
    )
  );

  return allCompetitionDetails;
};
export default getCompetitionsDetails;
