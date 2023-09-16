// 6 kyu Simple Fun #305: Typist
//
// John is a typist. He has a habit of typing: he never use the Shift key to switch case, just using only Caps Lock.
//
// Given a string s. Your task is to count how many times the keyboard has been tapped by John.
//
// You can assume that, at the beginning the Caps Lock light is not lit.
// Input/Output
//
// [input] string s
//
// A non-empty string. It contains only English letters(uppercase or lowercase).
//
// 1 ≤ s.length ≤ 10000
//
// [output] an integer
//
// The number of times John tapped the keyboard.
// Example
//
// For s = "a", the output should be 1.
//
// John hit button a.
//
// For s = "aa", the output should be 2.
//
// John hit button a, a.
//
// For s = "A", the output should be 2.
//
// John hit button Caps Lock, A.
//
// For s = "Aa", the output should be 4.
//
// John hit button Caps Lock, A, Caps Lock, a.
//
// Answer:
const isUpper = (c) => c.toUpperCase() === c;
function typist(s) {
  let count = 0;
  let capState = false;
  for (let c of s) {
    count++;
    if ((isUpper(c) && !capState) || (!isUpper(c) && capState)) {
      capState = !capState;
      count++;
    }
  }
  return count;
}
