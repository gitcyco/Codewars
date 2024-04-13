// 6 kyu Calculator (Addition and Spaces) [Part 1]
//
// Given the string "1+2+3", write a function calculate to output the result, ie. 6.
//
// If there is no operator between 2 numbers, there will be a space instead ie. the input is "1+2 3".
// In this case, process the input as "1+23" and output 24.
//
// The input will always be a string with 3 integers 0-1000, zero or more + operators, and zero or more spaces.
//
// Assume the input will always be valid.
//
// Note: eval and Function have been disabled; if not there would be no point to this exercise.
//
// Examples:
//
// Test.assertEquals(calculate("1+2+3"), 6);
// Test.assertEquals(calculate("1+2 3"), 24);
// Test.assertEquals(calculate("1 2 3"), 123);
//
// Answer:
const calculate = (s) =>
  s
    .replace(/\s/g, "")
    .split("+")
    .reduce((a, e) => +e + a, 0);
