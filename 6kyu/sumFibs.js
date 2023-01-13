// 6 kyu SumFibs
//
// Create a function that takes an argument n and sums even Fibonacci numbers up to n's index in the Fibonacci sequence.
//
// Example:
//
// sumFibs(5) === 2 // (0, 1, 1, 2, 3, 5);2 is the only even number in the sequence and doesn't have another
// number in the sequence to get added to in the indexed Fibonacci sequence.
//
// Example:
//
// sumFibs(9) === 44; // (0, 1, 1, 2, 3, 5, 8, 13, 21, 34)
// // 2 + 8 + 34 = 44;
//
// Answer:
function sumFibs(max) {
  let cache = {};
  let sum = 0;
  for (let i = 0; i <= max; i++) {
    let val = fib(i, cache);
    if (val % 2 === 0) {
      sum += val;
    }
  }
  return sum;
}

const fib = function (n, cache) {
  if (!cache) cache = {};
  if (cache[n]) return cache[n];
  if (n < 2) return n;
  return (cache[n] = fib(n - 1, cache) + fib(n - 2, cache));
};
