// 6 kyu Simplify the number!
//
// Given a positive integer as input, return the output as a string in the following format:
//
// Each digit (from left to right) multiplied by the corresponding power of 10, so that the sum equals the input number.
//
//     If the digit is zero, exclude it from the output;
//     For the last digit, just use the digit itself, without *1.
//
// Examples
//
// 0     -->  ""
// 56    -->  "5*10+6"
// 60    -->  "6*10"
// 999   -->  "9*100+9*10+9"
// 10004 -->  "1*10000+4"
//
// Note: input >= 0
//
// Answer:
function simplify(number) {
  let pwr = 0;
  let out = [];

  while (number) {
    let num = number % 10;
    if (num > 0) out.push(`${num}${pwr > 0 ? "*" + 10 ** pwr : ""}`);
    pwr++;
    number = Math.floor(number / 10);
  }
  return out.reverse().join("+");
}
