// 6 kyu Special Multiples
//
// Some numbers have the property to be divisible by 2 and 3.
// Other smaller subset of numbers have the property to be divisible by 2, 3 and 5.
// Another subset with less abundant numbers may be divisible by 2, 3, 5 and 7.
// These numbers have something in common: their prime factors are contiguous primes.
//
// Implement a function that finds the amount of numbers that have the first N primes as factors below a given limit.
//
// Let's see some cases:
//
// count_specMult(3, 200)  =>  6
//
// The first 3 primes are: 2, 3 and 5.
//
// And the found numbers below 200 are: 30, 60, 90, 120, 150, 180.
//
// Answer:
function countSpecMult(n, max) {
  const prime = getNextPrime();
  const min = new Array(n)
    .fill(0)
    .map((e) => prime.next().value)
    .reduce((a, e) => a * e);
  return Math.floor(max / min);
}

const isPrime = (num) => {
  let sqrtnum = Math.floor(Math.sqrt(num));
  let prime = num !== 1;
  for (let i = 2; i < sqrtnum + 1; i++) {
    if (num % i === 0) {
      prime = false;
      break;
    }
  }
  return prime;
};

const getNextPrime = function* (num = 1) {
  while (true) {
    while (!isPrime(++num)) {}
    yield num;
  }
};
