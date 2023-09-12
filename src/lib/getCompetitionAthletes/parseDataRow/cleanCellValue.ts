export default function cleanCellValue(value: string | null, key: string) {
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
}
