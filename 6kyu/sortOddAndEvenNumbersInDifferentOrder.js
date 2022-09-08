// 6 kyu Sort odd and even numbers in different order
//
// You are given an array of integers. Your task is to sort odd numbers within the array in ascending order, and even numbers in descending order.
//
// Note that zero is an even number. If you have an empty array, you need to return it.
//
// For example:
//
// [5, 3, 2, 8, 1, 4]  -->  [1, 3, 8, 4, 5, 2]
//
// odd numbers ascending:   [1, 3,       5   ]
// even numbers descending: [      8, 4,    2]
//
// Answer:
function sortArray(arr) {
  const e = [];
  const o = [];
  arr.forEach((n, i) => (n % 2 ? o.push(i) : e.push(i)));
  const oS = arr.filter((n) => n % 2).sort((a, b) => a - b);
  const eS = arr.filter((n) => !(n % 2)).sort((a, b) => b - a);
  const out = Array(arr.length).fill(0);
  e.forEach((n, i) => (out[n] = eS[i]));
  o.forEach((n, i) => (out[n] = oS[i]));
  return out;
}
