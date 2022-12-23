// 7 kyu Mean Means
//
// Take a list of n numbers a1, a2, a3, ..., aN to start with.
//
// Arithmetic mean (or average) is the sum of these numbers divided by n.
//
// Geometric mean (or average) is the product of these numbers taken to the nth root.
// Example
//
// List of numbers: 1, 3, 9, 27, 81
//
//     n = 5
//     Arithmetic mean = (1 + 3 + 9 + 27 + 81) / 5 = 121 / 5 = 24.2
//     Geometric mean = (1 * 3 * 9 * 27 * 81) ^ (1/5) = 59049 ^ (1/5) = 9
//
// Task
//
// You will be given a list of numbers and their arithmetic mean. However, the list is missing one number.
// Using this information, you must figure out and return the geometric mean of the FULL LIST, including the number that's missing.
//
// Answer:
function geo_mean(n, a) {
  n.push(a * (n.length + 1) - n.reduce((a, e) => a + e, 0));
  return n.reduce((a, e) => a * e) ** (1 / n.length);
}
