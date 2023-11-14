// 6 kyu Simple prime streaming
//
// Consider a sequence made up of the consecutive prime numbers. This infinite sequence would start with:
//
// "2357111317192329313741434753596167717379..."
//
// You will be given two numbers: a and b, and your task will be to return b elements starting from index a in this sequence.
//
// For example:
// solve(10,5) == `19232` Because these are 5 elements from index 10 in the sequence.
//
// Tests go up to about index 20000.
//
// Answer:
function solve(a, b) {
  const primes = [];
  sieve(50000, primes);
  const str = primes.join("");
  return str.slice(a, a + b);
}

function sieve(limit, primes) {
  let mark = new Array(limit + 1).fill(true);
  for (let p = 2; p * p < limit; p++) {
    if (mark[p] === true) {
      for (let i = p * p; i < limit; i += p) {
        mark[i] = false;
      }
    }
  }
  for (let p = 2; p < limit; p++) {
    if (mark[p] === true) {
      primes.push(p);
    }
  }
}
