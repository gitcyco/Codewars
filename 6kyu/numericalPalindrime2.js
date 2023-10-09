// 6 kyu Numerical Palindrome #2
//
// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are:
//
// 2332
// 110011
// 54322345
//
// For this kata, single digit numbers will not be considered numerical palindromes.
//
// For a given number num, write a function to test if the number contains a numerical palindrome or not
// and return a boolean (true if it does and false if does not).
// Return "Not valid" if the input is not an integer or is less than 0.
//
// Note: Palindromes should be found without permutating num.
//
// palindrome(5) => false
// palindrome(1221) => true
// palindrome(141221001) => true
// palindrome(1215) => true
// palindrome(1294) => false
// palindrome("109982") => "Not valid"
//
// Answer:
function palindrome(num) {
  if (!Number.isInteger(num) || num < 0) return "Not valid";
  const num1 = num.toString();
  if (/(.)\1+/g.test(num1)) return true;
  let lIdx = 0;
  let rIdx = num1.length - 1;
  while (lIdx < num1.length - 2) {
    if (num1[lIdx] === num1[rIdx]) {
      if (isP(num1.slice(lIdx, rIdx + 1))) return true;
    }
    rIdx--;
    if (lIdx === rIdx - 1) {
      lIdx++;
      rIdx = num1.length - 1;
    }
  }
  return false;
}

const isP = (s) => s === s.split("").reverse().join("");
