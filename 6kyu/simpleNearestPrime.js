// 6 kyu Simple nearest prime
//
// In this Kata, you will be given a number and your task will be to return the nearest prime number.
//
// solve(4) = 3. The nearest primes are 3 and 5. If difference is equal, pick the lower one.
// solve(125) = 127
//
// We'll be testing for numbers up to 1E10. 500 tests.
//
// More examples in test cases.
//
// Answer:
function solve(n) {
  let low = n;
  let high = n;
  while (!isPrime(low)) {
    low--;
  }
  while (!isPrime(high)) {
    high++;
  }
  if (Math.abs(n - low) > Math.abs(n - high)) return high;
  return low;
}
function isPrime(num) {
  if (num < 1) return false;
  let sqrtnum = Math.floor(Math.sqrt(num));
  let prime = num !== 1;
  for (let i = 2; i < sqrtnum + 1; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return prime;
}
