// 6 kyu Prime Factors
//
// Inspired by one of Uncle Bob's TDD Kata
//
// Write a function that generates factors for a given number.
//
// The function takes an integer as parameter and returns a list of integers (ObjC: array of NSNumbers representing integers).
// That list contains the prime factors in numerical sequence.
// Examples
//
// 1  ==>  []
// 3  ==>  [3]
// 8  ==>  [2, 2, 2]
// 9  ==>  [3, 3]
// 12 ==>  [2, 2, 3]
//
// Answer:
function primeFactors(n) {
  let out = [];
  while (n % 2 === 0) {
    out.push(2);
    n /= 2;
  }
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    while (n % i === 0) {
      out.push(i);
      n /= i;
    }
  }
  if (n > 2) out.push(n);
  return out;
}
