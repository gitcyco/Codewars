// 6 kyu Even Fibonacci Sum
//
// Give the summation of all even numbers in a Fibonacci sequence up to, but not including, the number passed to your function.
// Or, in other words, sum all the even Fibonacci numbers that are lower than the given number n (n is not the nth element of Fibonnacci sequence) without including n.
//
// The Fibonacci sequence is a series of numbers where the next value is the addition of the previous two values. The series starts with 0 and 1:
//
// 0 1 1 2 3 5 8 13 21...
//
// For example:
//
// fibonacci(0)==0
// fibonacci(33)==10
// fibonacci(25997544)==19544084
//
// Answer:
function fibonacci(max) {
  let cache = {};
  let sum = 0;
  for (let i = 0; i <= max; i++) {
    let val = fib(i, cache);
    if ((val + 2) % 2 === 0) {
      if (val >= max) return sum;
      else sum += val;
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
