// 6 kyu Difference of 2
//
// The objective is to return all pairs of integers from a given array of integers that have a difference of 2.
//
// The result array should be sorted in ascending order of values.
//
// Assume there are no duplicate integers in the array. The order of the integers in the input array should not matter.
// Examples
//
// [1, 2, 3, 4]  should return [[1, 3], [2, 4]]
//
// [4, 1, 2, 3]  should also return [[1, 3], [2, 4]]
//
// [1, 23, 3, 4, 7] should return [[1, 3]]
//
// [4, 3, 1, 5, 6] should return [[1, 3], [3, 5], [4, 6]]
//
// Answer:
function twosDifference(input) {
  const targets = {};
  const output = new Set();
  for (let n of input) {
    targets[n] = true;
    if (!targets[n + 2]) targets[n + 2] = false;
    if (!targets[n - 2]) targets[n - 2] = false;
  }
  for (let n of input) {
    if (targets[n - 2]) output.add(`${n - 2},${n}`);
    if (targets[n + 2]) output.add(`${n},${n + 2}`);
  }
  return [...output]
    .map((e) => e.split(",").map(Number))
    .sort((a, b) => a[0] - b[0]);
}
