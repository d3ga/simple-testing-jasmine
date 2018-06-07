function slugFormatter(input) {
  // accepts only string as an argument
  if (typeof input !== "string") {
    throw new Error("Invalid input");
  }

  // to lowercase
  input = input.toLowerCase().trim();

  // replace spaces between words to hyphens
  input = input.replace(/ /g, "-");

  // remove special characters
  input = input.replace(/[^-\w]/g, "");

  return input;
}

module.exports = slugFormatter;
