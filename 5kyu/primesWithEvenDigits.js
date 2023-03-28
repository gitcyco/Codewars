// 5 kyu Primes with Even Digits
//
// Find the closest prime number under a certain integer n that has the maximum possible amount of even digits.
//
// For n = 1000, the highest prime under 1000 is 887, having two even digits (8 twice)
//
// Naming f(), the function that gives that prime, the above case and others will be like the following below.
//
// f(1000) ---> 887 (even digits: 8, 8)
//
// f(1210) ---> 1201 (even digits: 2, 0)
//
// f(10000) ---> 8887
//
// f(500) ---> 487
//
// f(487) ---> 467
//
// Features of the random tests:
//
// Number of tests = 28
// 1000 <= n <= 5000000
//
// Answer:
//
// Brute forcing it by precalculating all of the matching primes below 5000000
let primes = [];
for (let i = 1; i < 5000000; i++) {
  if (isPrime(i)) primes.push(i);
}
primes = primes.filter((e) => /[02468]/g.test(String(e)));

function f(n) {
  let prime;
  let maxC = 0;
  let idx = primes.findIndex((e) => e > n);
  for (let i = idx - 1; i >= 0; i--) {
    if (primes[i] >= n) continue;
    let count = (primes[i].toString().match(/[02468]/g) || []).length;
    if (count > maxC) {
      maxC = count;
      prime = primes[i];
    }
  }
  return prime;
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
