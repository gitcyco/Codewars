// 6 kyu Pure odd digits primes
//
// Primes that have only odd digits are pure odd digits primes, obvious but necessary definition.
// Examples of pure odd digit primes are: 11, 13, 17, 19, 31...
// If a prime has only one even digit does not belong to pure odd digits prime, no matter the amount of odd digits that may have.
//
// Create a function, only_oddDigPrimes(), that receive any positive integer n, and output a list like the one below:
//
// [number pure odd digit primes below n, largest pure odd digit prime smaller than n, smallest pure odd digit prime higher than n]
//
// Let's see some cases:
//
// only_oddDigPrimes(20) ----> [7, 19, 31]
// ///7, beacause we have seven pure odd digit primes below 20 and are 3, 5, 7, 11, 13, 17, 19
// 19, because is the nearest prime of this type to 20
// 31, is the first pure odd digit that we encounter after 20///
//
// only_oddDigPrimes(40) ----> [9, 37, 53]
//
// In the case that n, the given value, is a pure odd prime, should be counted with the found primes and search for the immediately below and the immediately after.
//
// Happy coding!!
//
// Answer:
function onlyOddDigPrimes(n) {
  const gen = getNextPrime();
  let count = 0;
  let maxB = 0;
  let maxH = 0;
  while (true) {
    let tmp = gen.next().value;
    if (tmp < n) {
      if (!/[24680]/g.test(tmp.toString())) {
        count++;
        maxB = tmp;
      }
    } else {
      if (!/[24680]/g.test(tmp.toString())) {
        maxH = tmp;
        break;
      }
    }
  }
  return [count, maxB, maxH];
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
