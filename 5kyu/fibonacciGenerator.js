// 5 kyu Fibonacci Generator
//
// Create a function generator genfib() that returns a function fib() which always returns
// the next fibonacci number on each invocation (and returns 0 when being called the first time).
//
// Example:
//
// var fib = genfib();
// fib(); // -> returns 0
// fib(); // -> returns 1
// fib(); // -> returns 1
// fib(); // -> returns 2
//
// Answer:
function genfib() {
  let num = 0;
  return () => fibonacci(num++);
}

const fibonacci = function (n, cache = {}) {
  if (cache[n]) return cache[n];
  if (n < 2) return n;
  return (cache[n] = fibonacci(n - 1, cache) + fibonacci(n - 2, cache));
};
