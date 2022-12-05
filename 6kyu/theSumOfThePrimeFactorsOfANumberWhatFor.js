// 6 kyu The Sum Of The Prime Factors Of a Number... What For?
//
// Every number may be factored in prime factors.
//
// For example, the number 18 may be factored by its prime factors 2 and 3
//
// 18 = 2 . 3 . 3 = 2 . 3²
//
// The sum of the prime factors of 18 is 2 + 3 + 3 = 8
//
// But some numbers like 70 are divisible by the sum of its prime factors:
//
// 70 = 2 . 5 . 7 # sum of prime factors = 2 + 5 + 7 = 14
// and 70 is a multiple of 14
//
// Of course that primes would fulfill this property, but is obvious, because the prime
// decomposition of a number, is the number itself and every number is divisible by iself.
// That is why we will discard every prime number in the results
//
// We are interested in collect the integer positive numbers (non primes) that have this property in a certain range [a, b] (inclusive).
//
// Make the function mult_primefactor_sum(), that receives the values a, b as limits of the range [a, b] and a < b and outputs the sorted list of these numbers.
//
// Let's see some cases:
//
// mult_primefactor_sum(10, 100) == [16, 27, 30, 60, 70, 72, 84]
//
// mult_primefactor_sum(1, 60) == [1, 4, 16, 27, 30, 60]
//
// Answer:
function multPrimefactorSum(a, b) {
  let arr = [];

  for (let i = a; i <= b; i++) {
    if (isPrime(i)) continue;
    let gen = getNextPrime();
    let val = i;
    let prime = gen.next().value;
    let tmp = [];
    while (true) {
      while (val / prime === parseInt(val / prime)) {
        tmp.push(prime);
        val = val / prime;
      }
      if (val < 2) break;
      else prime = gen.next().value;
    }
    if (i % tmp.reduce((a, e) => a + e, 0) === 0) arr.push(i);
  }
  return arr;
}

const checkPrime = () => {
  const cache = {};

  const primes = (num) => {
    if (num in cache) return cache[num];
    let sqrtnum = Math.floor(Math.sqrt(num));
    let prime = num !== 1;
    if (
      (num % 2 == 0 && num > 2) ||
      (num % 3 == 0 && num > 3) ||
      (num % 5 == 0 && num > 5) ||
      (num % 7 == 0 && num > 7) ||
      (num % 9 == 0 && num > 9)
    ) {
      cache[num] = false;
      return false;
    }
    for (let i = 2; i < sqrtnum + 1; i++) {
      if (num % i === 0) {
        prime = false;
        break;
      }
    }
    cache[num] = prime;
    return prime;
  };
  return primes;
};

const isPrime = checkPrime();

const getNextPrime = function* (num = 1) {
  while (true) {
    while (!isPrime(++num)) {}
    yield num;
  }
};
