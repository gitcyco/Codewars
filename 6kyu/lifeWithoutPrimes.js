// 6 kyu Life without primes
//
// Consider an array that has no prime numbers, and none of its elements has any prime digit.
// It would start with: [1,4,6,8,9,10,14,16,18,40,44..].
//
// 12 and 15 are not in the list because 2 and 5 are primes.
//
// You will be given an integer n and your task will be return the number at that index in the array. For example:
//
// solve(0) = 1
// solve(2) = 6
//
// Answer:
function solve(n) {
  const p = [2, 3, 5, 7];
  let count = 1;
  let num = 1;
  while (count < n + 1) {
    num++;
    let dig = num.toString().split("").map(Number);
    if (p.every((e) => !dig.includes(e)) && !isPrime(num)) {
      count++;
    }
  }
  return num;
}

function isPrime(num) {
  if (num < 1) return false;
  let sqrtnum = Math.floor(Math.sqrt(num));
  let prime = num !== 1;
  for (let i = 2; i < sqrtnum + 1; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return prime;
}
