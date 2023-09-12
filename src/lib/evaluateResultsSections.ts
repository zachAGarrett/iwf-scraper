import { Browser, ElementHandle } from "puppeteer";
import { EventGender } from "../types";
export enum TargetType {
  TOTALS = "totals",
  DETAILED_RESULTS = "details",
}
export interface SectionTarget {
  eventGender: EventGender;
  type: TargetType;
  id: string;
}
export interface EvaluateResultsSectionsProps {
  browser: Browser;
  event_id: number | string;
  targets: Array<SectionTarget>;
  logDecorator?: string;
  callback: (
    resultsSection: ElementHandle<Element>,
    sectionTarget: SectionTarget
  ) => Promise<any>;
}
const evaluateResultsSections = async ({
  logDecorator,
  browser,
  event_id,
  targets,
  callback,
}: EvaluateResultsSectionsProps) => {
  const compositeUri = `https://iwf.sport/results/results-by-events/?event_id=${event_id}`;
  const maybeLogDecorator = logDecorator ? `[${logDecorator}]: ` : "";

  console.log(
    `[${new Date().toISOString()}]${maybeLogDecorator} Created a new page ${compositeUri}`
  );
  const page = await browser.newPage();

  // Navigate the page to the competition we're interested in
  console.log(
    `[${new Date().toISOString()}]${maybeLogDecorator} Navigating to competition page for ${event_id}`
  );
  await page.goto(compositeUri);

  //// Get the data from known selectors
  console.log(
    `[${new Date().toISOString()}]${maybeLogDecorator} Getting data for competition ${event_id}`
  );

  /**
   * Get all the matching sections and return the section
   */
  const results = await Promise.all(
    targets.map(async (sectionTarget) => {
      const resultsSection = await page.$(sectionTarget.id);

      if (resultsSection === null) {
        throw new Error(
          `[${new Date().toISOString()}]${maybeLogDecorator} Could not find the targeted section: ${sectionTarget} at url: ${compositeUri}`
        );
      }
      const callbackResults = await callback(resultsSection, sectionTarget);
      return { ...sectionTarget, callbackResults };
    })
  );

  return results;
};

export default evaluateResultsSections;
