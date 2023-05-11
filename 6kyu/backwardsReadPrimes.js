// 6 kyu Backwards Read Primes
//
// Backwards Read Primes are primes that when read backwards in base 10 (from right to left) are a different prime.
// (This rules out primes which are palindromes.)
//
// Examples:
// 13 17 31 37 71 73 are Backwards Read Primes
//
// 13 is such because it's prime and read from right to left writes 31 which is prime too. Same for the others.
// Task
//
// Find all Backwards Read Primes between two positive given numbers (both inclusive), the second one
// always being greater than or equal to the first one.
// The resulting array or the resulting string will be ordered following the natural order of the prime numbers.
// Examples (in general form):
//
// backwardsPrime(2, 100) => [13, 17, 31, 37, 71, 73, 79, 97] backwardsPrime(9900, 10000) => [9923, 9931, 9941, 9967] backwardsPrime(501, 599) => []
//
// See "Sample Tests" for your language.
//
// Answer:
function backwardsPrime(start, stop) {
  let arr = [];
  for (let i = start; i <= stop; i++) {
    let s = i.toString();
    let b = s.split("").reverse().join("");
    if (s !== b && +s[0] / 2 !== 0) {
      if (isPrime(+s) && isPrime(+b)) arr.push(i);
    }
  }
  return arr;
}

function isPrime(num) {
  if (num < 1) return false;
  let sqrtnum = Math.floor(Math.sqrt(num));
  let prime = num !== 1;
  for (let i = 2; i < sqrtnum + 1; i++) {
    if (num % i === 0) return false;
  }
  return prime;
}
