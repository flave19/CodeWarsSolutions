//Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

function duplicateCount(text) {
  let result = 0,
    check = {};
  let letters = text.toLowerCase().split("");
  letters.map((str) => {
    if (!check.hasOwnProperty(str)) {
      check[str] = 0;
    } else {
      if (check[str] === 0) {
        result += 1;
      }
      check[str] = check[str] + 1;
    }
  });
  return result;
}
