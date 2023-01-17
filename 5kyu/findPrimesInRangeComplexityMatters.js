// 5 kyu Find primes in range (complexity matters)
//
// Find all primes between 1 and n
// Return array of primes.
//
// Yep.. that's all.
//
// Warning: test requires you to generate all primes between 1 and 20 million without timing out.
//
// Answer:
const primeList = function (top) {
  let arr = [];
  for (let i = 1; i <= top; i++) {
    if (isPrime(i)) arr.push(i);
  }
  return arr;
};

function isPrime(num) {
  if (num < 1) return false;
  let sqrtnum = Math.floor(Math.sqrt(num));
  let prime = num !== 1;
  for (let i = 2; i < sqrtnum + 1; i++) {
    if (num % i === 0) {
      prime = false;
      break;
    }
  }
  return prime;
}
