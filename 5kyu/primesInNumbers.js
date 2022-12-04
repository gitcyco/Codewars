// 5 kyu Primes in numbers
//
// Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :
//
//  "(p1**n1)(p2**n2)...(pk**nk)"
//
// with the p(i) in increasing order and n(i) empty if n(i) is 1.
//
// Example: n = 86240 should return "(2**5)(5)(7**2)(11)"
//
// Answer:
function primeFactors(n) {
  const gen = getNextPrime();
  let map = new Map();
  let prime = gen.next().value;
  while (true) {
    while (n / prime === parseInt(n / prime)) {
      map.has(prime) ? map.set(prime, map.get(prime) + 1) : map.set(prime, 1);
      n = n / prime;
    }
    if (n < 2) break;
    else prime = gen.next().value;
  }

  let str = "";
  for (let [key, val] of map) {
    if (val === 1) {
      str += `(${key})`;
    } else {
      str += `(${key}**${val})`;
    }
  }
  return str;
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
