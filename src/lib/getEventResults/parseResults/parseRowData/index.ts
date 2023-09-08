import { ElementHandle } from "puppeteer";
/**
 *
 * @param dataRow This is the element containing the the event results for an athlete in some event gender at some competition. (Competition > EventGender > Class > Event > Results)
 * @param legend This is the map of column keys for the Event. This setup allows for flexibility if not all events have the same number of columns.
 * @returns
 */
const parseDataRow = async (
  dataRow: ElementHandle<Element>,
  legend: (string | undefined)[]
) => {
  /**
   * Evaluate all P elements in this dataRow.
   * The P elements contain all necessary data except the athlete ID,
   * which we will parse from the href of the a.title
   */
  const rawData = await dataRow.$$eval("p", (cells) => {
    /**
     *
     * @param node The cell to check for a failed attempt.
     * @returns TRUE if the cell contains a failed attempt, and FALSE otherwise
     * NOTE: This function must be defined in the scope of dataRow.$$eval()
     */
    const containsFailedAttempt = (node: HTMLParagraphElement | ChildNode) => {
      let childNodeLabels: string[] = [];
      /**
       * Search to the 2nd nested child of the root node. In the current ui,
       * a STRIKE element appears at that location in the case of a failed attempt.
       * However, A more generic solution would be preferable
       */
      node.childNodes.forEach((child) => {
        if (child.hasChildNodes()) {
          child.childNodes.forEach((child) =>
            childNodeLabels.push(child.nodeName)
          );
        }
        childNodeLabels.push(child.nodeName);
      });
      return childNodeLabels.includes("STRIKE");
    };

    return cells.map((cell) => {
      return {
        value: cell.textContent,
        failedAttempt: containsFailedAttempt(cell),
      };
    });
  });

  /**
   * Because the $$eval function is not aware of external variables,
   * we must merge the keys from the legend after the fact by mapping over
   * the rawData and finding the matching legend.
   */

  // First, we should ensure that every cell has a matching key.
  if (legend.length !== rawData.length) {
    throw new Error("Not every cell has a matching key.");
  }
  const formattedData = rawData.map(({ failedAttempt, value }, i) => ({
    key: legend[i],
    value: cleanValue(value, legend[i]!),
    failedAttempt,
  }));
  return formattedData;
};
export default parseDataRow;

const cleanValue = (value: string | null, key: string) => {
  let partiallyCleanedValue: string;
  if (value === null) return null;
  /** The value from the rawData will include some artifacts from the span.only__mobile element which is also a child of the data cell
   * The artifact is the key of the column, followed by a colon, and is used for mobile display purposes.
   * We can clean it by searching and replacing the column key in the raw value.
   *
   * The raw value will also contain a bunch of newlines that should be removed. */
  partiallyCleanedValue = value?.replace(/\n/g, "").replace(`${key}: `, "");

  /**
   * Next up, we need to coerce the value to the proper types.
   */

  const maybeNumber = Number(partiallyCleanedValue);

  if (!isNaN(maybeNumber)) {
    return maybeNumber;
  } else if (partiallyCleanedValue === "---") {
    return null;
  } else {
    // This may be a string or a date string
    return partiallyCleanedValue;
  }
};
