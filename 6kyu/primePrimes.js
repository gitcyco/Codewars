// 6 kyu Prime Primes
//
// Define a "prime prime" number to be a rational number written as one prime number over another prime number: primeA / primeB (e.g. 7/31)
//
// Given a whole number N / n, generate the number of "prime prime" rational numbers less than 1, using only prime numbers between 0 and N / n(non inclusive).
//
// Return the count of these "prime primes", and the integer part of their sum.
// Example
//
// N = 6
//
// // The "prime primes" less than 1 are:
// 2/3, 2/5, 3/5               // count: 3
//
// 2/3 + 2/5 + 3/5 = 1.6667    // integer part: 1
//
// Thus, the function should return [3, 1].
//
// Answer:
const primePrimes = (n) => {
  const arr = [];
  for (let i = 2; i < n; i++) {
    if (isPrime(i)) arr.push(i);
  }
  let tot = 0;
  let sum = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      sum += arr[i] / arr[j];
      tot++;
    }
  }
  return [tot, parseInt(sum)];
};

function isPrime(num) {
  if (num < 1) return false;
  let sqrtnum = Math.floor(Math.sqrt(num));
  let prime = num !== 1;
  for (let i = 2; i < sqrtnum + 1; i++) {
    if (num % i === 0) return false;
  }
  return prime;
}
