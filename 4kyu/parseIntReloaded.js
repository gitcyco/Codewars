// 4 kyu parseInt() reloaded
//
// In this kata we want to convert a string into an integer. The strings simply represent the numbers in words.
//
// Examples:
//
//     "one" => 1
//     "twenty" => 20
//     "two hundred forty-six" => 246
//     "seven hundred eighty-three thousand nine hundred and nineteen" => 783919
//
// Additional Notes:
//
//     The minimum number is "zero" (inclusively)
//     The maximum number, which must be supported is 1 million (inclusively)
//     The "and" in e.g. "one hundred and twenty-four" is optional, in some cases it's present and in others it's not
//     All tested numbers are valid, you don't need to validate them
//
// Answer:
function parseInt(string) {
  if (string in tens) return tens[string];
  let parts = string.split(" ").filter((s) => s !== "and");
  let num = 0;
  let curVal = 0;
  let factor = 1;
  for (let part of parts) {
    if (digits.includes(part)) curVal += digits.indexOf(part);
    else if (/-/.test(part)) {
      let [a, b] = part.split("-");
      let val = tens[a] + digits.indexOf(b);
      curVal += +val;
    } else if (part in tags) {
      if (tags[part] > factor) {
        num += curVal;
        num *= tags[part];
        curVal = 0;
        factor = tags[part];
      }
      curVal *= tags[part];
      num += curVal;
      curVal = 0;
    }
  }
  return num + curVal;
}

const tags = {
  hundred: 100,
  thousand: 1000,
  million: 1000000,
  billion: 1000000000,
  trillion: 1000000000000,
};

const digits = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];
const tens = {
  twenty: 20,
  thirty: 30,
  forty: 40,
  fifty: 50,
  sixty: 60,
  seventy: 70,
  eighty: 80,
  ninety: 90,
};
