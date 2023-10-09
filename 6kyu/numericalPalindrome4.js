// 6 kyu Numerical Palindrome #4
//
// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are:
//
// 2332
// 110011
// 54322345
//
// For a given number num, return its closest numerical palindrome which can either be smaller or larger than num.
// If there are 2 possible values, the larger value should be returned. If num is a numerical palindrome itself, return it.
//
// For this kata, single digit numbers will NOT be considered numerical palindromes.
//
// Also, you know the drill - be sure to return "Not valid" if the input is not an integer or is less than 0.
//
// palindrome(8) => 11
// palindrome(281) => 282
// palindrome(1029) => 1001
// palindrome(1221) => 1221
// palindrome("1221") => "Not valid"
//
// Answer:
function palindrome(num) {
  if (!Number.isInteger(num) || num < 0) return "Not valid";
  for (let i = 0; i < Number.MAX_SAFE_INTEGER; i++) {
    if (num + i > 10 && isP(num + i)) return num + i;
    if (num - i > 10 && isP(num - i)) return num - i;
  }
}

const isP = (s) => s.toString() === s.toString().split("").reverse().join("");
