// 5 kyu Simple Fun #220: Simplified Array
//
// You're given an array arr. Apply the following algorithm to it:
//
//     find intervals of consecutive prime numbers and consecutive non-prime numbers;
//     replace each such interval with the sum of numbers in it;
//     if the resulting array is different from the initial one, return to step 1, otherwise return the result.
//
// Input
//
// A non-empty integer array such that:
//
//     -10000 ≤ arr[i] ≤ 10000
//     1 ≤ arr.length ≤ 1000
//
// Output
//
// An integer array.
// Examples
//
// For arr = [1, 2, 3, 5, 6, 4, 2, 3] the result should be [21, 5]:
//
// [1, 2, 3, 5, 6, 4, 2, 3] --> [(1), (2 + 3 + 5), (6 + 4), (2 + 3)] --> [1, 10, 10, 5]
// [1, 10, 10, 5] --> [(1 + 10 + 10), (5)] --> [21, 5]
//
// For arr = [-3, 4, 5, 2, 0, -10] the result should be [1, 7, -10]:
//
// [-3, 4, 5, 2, 0, -10] --> [(-3 + 4), (5 + 2), (0 + -10)] --> [1, 7, -10]
//
// Answer:
function simplifiedArray(arr) {
  const isPrime = primeMemo();
  while (true) {
    let prime = isPrime(arr[0]);
    let st = 0;
    let cur = [];
    let idx = [];
    for (let i = 0; i <= arr.length; i++) {
      if (prime === isPrime(arr[i]) && i !== arr.length) continue;
      idx.push([st, i - 1]);
      prime = !prime;
      st = i;
    }
    idx.forEach((n) => cur.push(arr.slice(n[0], n[1] + 1).reduce((a, e) => a + e, 0)));
    if (arrEq(cur, arr)) break;
    arr = [...cur];
  }
  return arr;
}

const primeMemo = () => {
  const cache = {};
  return function (num) {
    if (num in cache) return cache[num];
    let sqrtnum = Math.floor(Math.sqrt(num));
    let prime = num > 1;
    for (let i = 2; i < sqrtnum + 1; i++) {
      if (num % i === 0) {
        prime = false;
        break;
      }
    }
    cache[num] = prime;
    return prime;
  };
};

const arrEq = (a, b) => JSON.stringify(a) === JSON.stringify(b);
