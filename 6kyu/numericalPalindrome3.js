// 6 kyu Numerical Palindrome #3
//
// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward.
// Examples of numerical palindromes are:
//
// 2332
// 110011
// 54322345
//
// For a given number num, write a function which returns the number of numerical palindromes within each number.
// For this kata, single digit numbers will NOT be considered numerical palindromes.
//
// Return "Not valid" if the input is not an integer or is less than 0.
//
// palindrome(5) => 0
// palindrome(1221) => 2
// palindrome(141221001) => 5
// palindrome(1294) => 0
// palindrome("1221") => "Not valid"
//
// Answer:
function palindrome(num) {
  if (!Number.isInteger(num) || num < 0) return "Not valid";
  const num1 = num.toString();
  let lIdx = 0;
  let rIdx = num1.length - 1;
  let count = 0;
  while (lIdx < num1.length - 1) {
    if (num1[lIdx] === num1[rIdx]) {
      if (isP(num1.slice(lIdx, rIdx + 1))) count++;
    }
    rIdx--;
    if (lIdx === rIdx) {
      lIdx++;
      rIdx = num1.length - 1;
    }
  }
  return count;
}

const isP = (s) => s === s.split("").reverse().join("");
