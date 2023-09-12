import { ElementHandle } from "puppeteer";
import cleanCellValue from "./cleanCellValue";
/**
 *
 * @param dataRow This is the element containing the the event results for an athlete in some event gender at some competition. (Competition > EventGender > Class > Event > Results)
 * @param legend This is the map of column keys for the Event. This setup allows for flexibility if not all events have the same number of columns.
 * @param targetColumns These are the columns of data we actually care about
 * @returns
 */

interface ParseDataRowProps {
  dataRow: ElementHandle<Element>;
  keys: string[];
  targetColumns: string[];
}
const parseDataRow = async ({
  dataRow,
  keys,
  targetColumns,
}: ParseDataRowProps) => {
  /**
   * Evaluate all P elements in this dataRow.
   * The P elements contain all necessary data except the athlete ID,
   * which we will parse from the href of the a.title
   */
  const rawData = await dataRow.$$eval("p", (cells) => {
    return cells.map((cell) => {
      return {
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
  const formattedData = rawData.map(({ value }, i) => ({
    key: keys[i],
    value: cleanCellValue(value, keys[i]),
  }));
  const importantData = formattedData.filter(({ key }) =>
    targetColumns.includes(key)
  );
  const dataObject: Record<string, string | number | null> = {};

  for (const item of importantData) {
    dataObject[item.key] = item.value;
  }
  return dataObject;
};
export default parseDataRow;
