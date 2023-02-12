// 7 kyu Sum of Cubes
//
// Write a function that takes a positive integer n, sums all the cubed values from 1 to n (inclusive), and returns that sum.
//
// Assume that the input n will always be a positive integer.
//
// Examples: (Input --> output)
//
// 2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
// 3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)
//
// Answer:
const sumCubes = (n) =>
  Array(n)
    .fill(0)
    .map((e, i) => i + 1)
    .reduce((a, e) => (a += e ** 3));
