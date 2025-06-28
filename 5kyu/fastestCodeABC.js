// 5 kyu Fastest Code : A*B=C
//
// This is the Performance version of coding 3min series.
// If your code runs more than 6000ms, please optimize your code or try the simple version
//
// You are given an integer array numbers and an integer c.
//
// Find out a pair of numbers(let's say number a and number b) from the array numbers, let a * b = c, result format is an array [a,b]
//
// The array numbers is a sorted array, value range: -1000 to 1000(both inclusive)
//
// The result will be the first pair of numbers(from the left to the right).
// For example,findAB([1,2,3,4,5,6],6) should return [1,6], instead of [2,3]
//
// Answer:
function findAB(numbers, c) {
  if (c === 0) {
    if (numbers[0] === 0) return [0, numbers[1]];
    else if (numbers.includes(0)) return [numbers[0], 0];
    return null;
  }
  const found = new Map();
  const pairs = new Map();
  for (let num of numbers) {
    let other = c / num;
    if (Math.abs(num) > Math.abs(c) || num === 0 || other !== Math.floor(other))
      continue;
    if (!pairs.has(num)) pairs.set(num, other);
    if (found.has(num)) {
      let count = found.get(num);
      found.set(num, count + 1);
    } else {
      found.set(num, 1);
    }
  }
  for (let [a, b] of pairs) {
    if (a === b && found.get(a) > 1) return [a, b];
    if (a !== b && found.has(b)) return [a, b];
  }
  return null;
}
