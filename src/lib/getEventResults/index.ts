import { ElementHandle } from "puppeteer";
import { MaybeCreateAthletesReturnType } from "../maybeCreateAthletes";
import { MaybeCreateCompetitionReturnType } from "../maybeCreateCompetition";
import unpackPromiseSettledResults from "../unpackPromiseSettledRestults";
import parseResultsSection from "./parseResultsSection";
import { GraphQLClient } from "graphql-request";

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
  client: GraphQLClient;
}
const getEventResults = async ({
  resultsSection,
  athleteIds,
  competitionId,
  client,
}: ParseResultsSectionProps) => {
  const classNames = await resultsSection.$$eval(
    ".results__title h3",
    (elements) =>
      elements.map((element) => element.textContent?.replace(/\n/g, ""))
  );

  const eventTitles = await resultsSection.$$eval(
    ".results__title p",
    (elements) =>
      elements.map((element) => element.textContent?.replace(/\n/g, ""))
  );

  const resultsSections = await resultsSection.$$(".cards");
  const eventSections: ElementHandle<Element>[] = [];
  // every third section is a totals card, which we don't need (we got the competition totals before running the section parser)
  for (let i = 0; i < resultsSections.length; i++) {
    if ((i + 1) % 3 !== 0) {
      eventSections.push(resultsSections[i]);
    }
  }

  /**
   * Handle errors for possibly missing elements.
   */
  if (resultsSections === undefined) {
    throw new Error("Could not find any Results.");
  } else if (classNames === undefined) {
    throw new Error("Could not identify classes in the results.");
  }
  if (eventTitles === undefined) {
    throw new Error("Could not find any events.");
  }

  /**
   * Map over all the results sections and get the row data for each.
   * Preserve the Competition > EventGender > Class  > Event > Results structure
   */
  const createEventInputsSettledResults = await Promise.allSettled(
    eventSections.map(async (resultsSection, i) =>
      parseResultsSection({
        resultsSection,
        athleteIds,
        competitionId,
        eventTitles,
        classNames,
        iterator: i,
        client,
      })
    )
  );

  let resolvedCreateEventInputs: Array<
    Awaited<ReturnType<typeof parseResultsSection>>
  > = [];
  unpackPromiseSettledResults(
    createEventInputsSettledResults,
    (createEventInput) => resolvedCreateEventInputs.push(createEventInput),
    (message) => console.debug(message)
  );
  return resolvedCreateEventInputs;
};

export default getEventResults;
