// 6 kyu Simple Fun #237: Suffix Sums
//
// Given an array a of integers, construct an array b of the same length as a such that
//
//
// b[0] = a[0] + a[1] + ... + a[n - 2] + a[n - 1]
// b[1] =        a[1] + ... + a[n - 2] + a[n - 1]
// ...
// b[n - 2] =                 a[n - 2] + a[n - 1]
// b[n - 1] =                            a[n - 1]
//
// where n is the length of a.
// Input/Output
//
// [input] integer array a
//
// 3 ≤ a.length ≤ 10^4,
//
// -1000 ≤ a[i] ≤ 1000.
//
// [output] an integer array
//
// Answer:
function suffixSums(a) {
  let b = [];
  let sum = a.reduce((a, e) => a + e, 0);
  a.forEach((e) => {
    b.push(sum);
    sum -= e;
  });
  return b;
}
