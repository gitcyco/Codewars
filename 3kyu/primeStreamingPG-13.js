// 3 kyu Prime Streaming (PG-13)
//
// Create an endless stream that yields prime numbers. The stream must be able to produce a million primes in a few seconds.
//
// Answer:
const primes = [];
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
    }
  }
}
class Primes {
  static *stream() {
    const primes = [];
    const n = Number.MAX_SAFE_INTEGER;
    let limit = 1000000;
    if (primes.length === 0) sieve(limit, primes);
    for (let p of primes) yield p;

    let low = limit;
    let high = 2 * limit;

    while (low < n) {
      if (high >= n) high = n;

      let mark = new Array(limit + 1).fill(true);

      for (let i = 0; i < primes.length; i++) {
        let loLim = Math.floor(low / primes[i]) * primes[i];
        if (loLim < low) loLim += primes[i];
        for (let j = loLim; j < high; j += primes[i]) {
          mark[j - low] = false;
        }
      }
      for (let i = low; i < high; i++) {
        if (mark[i - low] == true) yield i;
      }
      low = low + limit;
      high = high + limit;
    }
  }
}
