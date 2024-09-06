// 6 kyu Highest Rank Number in an Array
//
// Complete the method which returns the number which is most frequent in the given input array.
// If there is a tie for most frequent number, return the largest number among them.
//
// Note: no empty arrays will be given.
// Examples
//
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3
//
// Answer:
function highestRank(arr) {
  const counts = arr.reduce((a, e) => (e in a ? a[e]++ : (a[e] = 1), a), {});
  let [max, count] = [-Infinity, -Infinity];
  for (let [n, c] of Object.entries(counts)) {
    if (c > count) [max, count] = [+n, c];
    else if (c === count) max = Math.max(+n, max);
  }
  return max;
}
