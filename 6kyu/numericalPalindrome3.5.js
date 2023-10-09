// 6 kyu Numerical Palindrome #3.5
//
// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward.
// Examples of numerical palindromes are: 2332, 110011, 54322345
//
// For a given number num, write a function which returns an array of all the numerical palindromes contained within each number.
// The array should be sorted in ascending order and any duplicates should be removed.
//
// In this kata, single digit numbers and numbers which start or end with zeros (such as 010 and 00) are NOT considered valid numerical palindromes.
//
// If num contains no valid palindromes, return "No palindromes found".
// Otherwise, return "Not valid" if the input is not an integer or is less than 0.
//
// Examples
//
// palindrome(1221)      =>  [22, 1221]
// palindrome(34322122)  =>  [22, 212, 343, 22122]
// palindrome(1001331)   =>  [33, 1001, 1331]
// palindrome(1294)      =>  "No palindromes found"
// palindrome("1221")    =>  "Not valid"
//
// Answer:
function palindrome(num) {
  if (!Number.isInteger(num) || num < 0) return "Not valid";
  const num1 = num.toString();
  let lIdx = 0;
  let rIdx = num1.length - 1;
  let out = new Set();
  while (lIdx < num1.length - 1) {
    if (num1[lIdx] === num1[rIdx]) {
      const piece = +num1.slice(lIdx, rIdx + 1);
      if (isP(piece.toString())) out.add(+piece);
    }
    rIdx--;
    if (lIdx === rIdx) {
      lIdx++;
      rIdx = num1.length - 1;
    }
  }
  const arr = [...out].filter((e) => e > 10).sort((a, b) => a - b);
  if (arr.length) return arr;
  return "No palindromes found";
}

const isP = (s) => s === s.split("").reverse().join("");
