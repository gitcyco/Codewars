// 5 kyu Find the Partition with Maximum Product Value
//
// You are given a certain integer, n, n > 0.
// You have to search the partition or partitions, of n, with maximum product value.
//
// Let'see the case for n = 8.
//
// Partition                 Product
// [8]                          8
// [7, 1]                       7
// [6, 2]                      12
// [6, 1, 1]                    6
// [5, 3]                      15
// [5, 2, 1]                   10
// [5, 1, 1, 1]                 5
// [4, 4]                      16
// [4, 3, 1]                   12
// [4, 2, 2]                   16
// [4, 2, 1, 1]                 8
// [4, 1, 1, 1, 1]              4
// [3, 3, 2]                   18   <---- partition with maximum product value
// [3, 3, 1, 1]                 9
// [3, 2, 2, 1]                12
// [3, 2, 1, 1, 1]              6
// [3, 1, 1, 1, 1, 1]           3
// [2, 2, 2, 2]                16
// [2, 2, 2, 1, 1]              8
// [2, 2, 1, 1, 1, 1]           4
// [2, 1, 1, 1, 1, 1, 1]        2
// [1, 1, 1, 1, 1, 1, 1, 1]     1
//
// So our needed function will work in that way: If there is only one partition
// with maximum product value, it will return a list of two elements, the unique partition and the product value.
// Example (input -> output)
//
// 8 -> [[3, 3, 2], 18]
//
// If there are more than one partition with maximum product value, the function should output the partitions in a length sorted way.
// Example (input -> output)
//
// 10 --> [[4, 3, 3], [3, 3, 2, 2], 36]
//
// Answer:
function* getParts(n) {
  if (n === 0) {
    yield [];
    return;
  }
  for (let p of getParts(n - 1)) {
    yield [1].concat(p);
    if (p.length && (p.length < 2 || p[1] > p[0])) {
      yield [p[0] + 1].concat(p.slice(1));
    }
  }
}

function findPartMaxProd(n) {
  let max = -Infinity;
  let arr = [];
  for (let nums of getParts(n)) {
    let prod = nums.reduce((a, e) => a * e);
    if (prod > max) {
      max = prod;
      arr = [nums.sort((a, b) => b - a)];
    } else if (prod === max) arr.push(nums.sort((a, b) => b - a));
  }
  arr.push(max);
  return arr.sort((a, b) => a.length - b.length);
}
