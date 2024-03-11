// 6 kyu Roman Numerals Decoder
//
// Create a function that takes a Roman numeral as its argument and returns its value
// as a numeric decimal integer. You don't need to validate the form of the Roman numeral.
//
// Modern Roman numerals are written by expressing each decimal digit of the number
// to be encoded separately, starting with the leftmost digit and skipping any 0s.
// So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008
// is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.
// Example:
//
// "MM"      -> 2000
// "MDCLXVI" -> 1666
// "M"       -> 1000
// "CD"      ->  400
// "XC"      ->   90
// "XL"      ->   40
// "I"       ->    1
//
// Help:
//
// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000
//
// Answer:
function solution(s) {
  const valMap = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let sum = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    let char = s[i];
    if ((char === "V" || char === "X") && s[i - 1] === "I") {
      sum += valMap[char] - 1;
      i--;
    } else if ((char === "L" || char === "C") && s[i - 1] === "X") {
      sum += valMap[char] - 10;
      i--;
    } else if ((char === "D" || char === "M") && s[i - 1] === "C") {
      sum += valMap[char] - 100;
      i--;
    } else {
      sum += valMap[char];
    }
  }
  return sum;
}
