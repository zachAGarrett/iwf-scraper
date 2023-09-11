export default function parseWeightUnitGender(inputString: string) {
  // Split the input string by spaces
  const parts = inputString.split(" ");

  if (parts.length >= 3) {
    const weight = parseFloat(parts[0]); // Parse the numeric part as a float
    const unit = parts[1]; // Unit is the second part
    const gender = parts.slice(2).join(" "); // Gender is the rest of the parts

    return {
      weight,
      unit,
      gender,
    };
  } else {
    // Handle invalid input
    return null;
  }
}
