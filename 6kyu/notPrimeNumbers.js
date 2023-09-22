// 6 kyu Not prime numbers
//
// You are given two positive integers a and b (a < b <= 20000).
// Complete the function which returns a list of all those numbers in the interval [a, b) whose digits
// are made up of prime numbers (2, 3, 5, 7) but which are not primes themselves.
//
// Be careful about your timing!
//
// Answer:
const isPrime = isPrimeWrapper();

function notPrimes(a, b) {
  const out = [];
  for (let n = a; n < b; n++) {
    let prime = true;
    let test = n.toString();
    if (isPrime(test[0]) && !isPrime(n)) {
      for (let c of test) {
        if (!isPrime(+c)) {
          prime = false;
          break;
        }
      }
      if (prime) out.push(n);
    }
  }
  return out;
}

function isPrimeWrapper() {
  const memo = {};
  return (num) => {
    if (num < 2) return false;
    if (num in memo) return memo[num];
    let sqrtnum = Math.floor(Math.sqrt(num));
    let prime = num !== 1;
    for (let i = 2; i < sqrtnum + 1; i++) {
      if (num % i === 0) {
        prime = false;
        break;
      }
    }
    memo[num] === prime;
    return prime;
  };
}
