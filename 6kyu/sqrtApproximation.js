// 6 kyu Sqrt approximation
//
// We want to approximate the sqrt function. Usually this function takes a floating point number
// and returns another floating point number, but in this kata we're going to work with integral numbers instead.
//
// Your task is to write a function that takes an integer n and returns either
//
//     an integer k if n is a square number, such that k * k == n or
//     a range (k, k+1), such that k * k < n and n < (k+1) * (k+1).
//
// Examples
//
// assert.deepEqual( sqrtApproximation(4), 2 );
// assert.deepEqual( sqrtApproximation(5), [2,3] );
//
// Note : pow and sqrt functions are disabled.
// Remarks
//
// In dynamic languages, return either a single value or an array/list. In Haskell, use Either.
//
// Answer:
function sqrtApproximation(num) {
  if (num < 2) return num;
  let min = 1;
  let max = num;
  let mid = Math.floor(num / 2);
  while (min < max && min !== mid) {
    if (mid * mid === num) return mid;
    else {
      if (mid * mid < num) min = mid;
      else max = mid;
      mid = Math.floor((min + max) / 2);
    }
  }
  return [mid, mid + 1];
}
