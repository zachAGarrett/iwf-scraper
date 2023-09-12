import { ElementHandle } from "puppeteer";
import cleanCellValue from "./cleanCellValue";
/**
 *
 * @param dataRow This is the element containing the the event results for an athlete in some event gender at some competition. (Competition > EventGender > Class > Event > Results)
 * @param legend This is the map of column keys for the Event. This setup allows for flexibility if not all events have the same number of columns.
 * @param targetColumns These are the columns of data we actually care about
 * @returns
 */

interface GetDataRowAttemptsProps {
  dataRow: ElementHandle<Element>;
  keys: string[];
  targetColumns: string[];
}
const getDataRowAttempts = async ({
  dataRow,
  keys,
  targetColumns,
}: GetDataRowAttemptsProps) => {
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
        successful: !containsFailedAttempt(cell),
        value: cell.textContent,
      };
    });
  });

  /**
   * Because the $$eval function is not aware of external variables,
   * we must merge the keys from the legend after the fact by mapping over
   * the rawData and finding the matching legend.
   */

  // First, we should ensure that every cell has a matching key.
  if (keys.length !== rawData.length) {
    throw new Error("Not every cell has a matching key.");
  }
  const formattedData = rawData.map(({ successful, value }, i) => ({
    verifiedKey: keys[i],
    liftNumber: Number(keys[i]),
    successful: successful,
    weight: cleanCellValue(value, keys[i]),
  }));
  const importantData = formattedData.filter(({ verifiedKey }) =>
    targetColumns.includes(verifiedKey)
  );

  return importantData;
};
export default getDataRowAttempts;
