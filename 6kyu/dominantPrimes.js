// 6 kyu Dominant primes
//
// The prime number sequence starts with: 2,3,5,7,11,13,17,19.... Notice that 2 is in position one.
//
// 3 occupies position two, which is a prime-numbered position. Similarly, 5, 11 and 17 also occupy prime-numbered positions.
// We shall call primes such as 3,5,11,17 dominant primes because they occupy prime-numbered
// positions in the prime number sequence. Let's call this listA.
//
// As you can see from listA, for the prime range range(0,10), there are only two dominant primes (3 and 5) and the sum of these primes is: 3 + 5 = 8.
//
// Similarly, as shown in listA, in the range (6,20), the dominant primes in this range are 11 and 17, with a sum of 28.
//
// Given a range (a,b), what is the sum of dominant primes within that range? Note that a <= range <= b and b will not exceed 500000.
//
// Answer:

// using sieve and lookup table to precompute primes:
const primes = [0];
const lookup = {};
sieve(500000, primes);

function solve(a, b) {
  let sum = 0;
  while (!isPrime(a)) a++;
  let start = primes.indexOf(a);
  while (primes[start] <= b) {
    if (isPrime(start)) sum += primes[start];
    start++;
  }
  return sum;
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
      lookup[p] = true;
    }
  }
}
function isPrime(num) {
  if (lookup[num]) return true;
  return false;
}
