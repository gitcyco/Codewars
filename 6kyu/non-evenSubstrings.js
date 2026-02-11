// 6 kyu Non-even substrings
//
// Given a string of integers, return the number of odd-numbered substrings that can be formed.
//
// For example, in the case of "1341", they are 1, 1, 3, 13, 41, 341, 1341, a total of 7 numbers.
//
// solve("1341") = 7. See test cases for more examples.
//
// Answer:
function solve(s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    let num = +s[i];
    if (num % 2 !== 0) {
      count += i + 1;
    }
  }
  return count;
}

// one liner:
const solve_one = (s) =>
  [...s].reduce((a, e, i) => (+e % 2 !== 0 ? a + i + 1 : a), 0);
