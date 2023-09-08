import { ElementHandle } from "puppeteer";

/**
 *
 * @param legendRow A legend row appears as the first row in every Results Section. We need to get the values from here, since they will be the column keys.
 * @returns The keys for the columns of the Results Section
 */
const parseLegend = (legendRow: ElementHandle<Element> | null) =>
  legendRow?.$$eval("p", (cells) =>
    /** Strip all newlines and spaces from the key.
     * It might be better to snake_case the keys and trim leading and trailing spaces rather than stripping all spaces. */
    cells.map((cell) => cell.textContent?.replace(/[:\s\n]/g, ""))
  );
export default parseLegend;
