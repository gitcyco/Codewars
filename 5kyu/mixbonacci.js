// 5 kyu Mixbonacci
//
// This is the first of my "-nacci" series. If you like this kata, check out the zozonacci sequence too.
// Task
//
//     Mix -nacci sequences using a given pattern p.
//     Return the first n elements of the mixed sequence.
//
// Rules
//
//     The pattern p is given as a list of strings (or array of symbols in Ruby) using the pattern mapping
//     below (e. g. ['fib', 'pad', 'pel'] means take the next fibonacci, then the next padovan, then the next pell number and so on).
//     When n is 0 or p is empty return an empty list.
//     If n is more than the length of p repeat the pattern.
//
// Examples
//
//             0  1  2  3  4
// ----------+------------------
// fibonacci:| 0, 1, 1, 2, 3 ...
// padovan:  | 1, 0, 0, 1, 0 ...
// pell:     | 0, 1, 2, 5, 12 ...
//
// pattern = ['fib', 'pad', 'pel']
// n = 6
// #          ['fib',        'pad',      'pel',   'fib',        'pad',      'pel']
// # result = [fibonacci(0), padovan(0), pell(0), fibonacci(1), padovan(1), pell(1)]
// result = [0, 1, 0, 1, 0, 1]
//
// pattern = ['fib', 'fib', 'pel']
// n = 6
// #          ['fib', 'fib', 'pel', 'fib', 'fib', 'pel']
// # result = [fibonacci(0), fibonacci(1), pell(0), fibonacci(2), fibonacci(3), pell(1)]
// result = [0, 1, 0, 1, 2, 1]
//
// Sequences
//
//     fibonacci : 0, 1, 1, 2, 3 ...
//     padovan: 1, 0, 0, 1, 0 ...
//     jacobsthal: 0, 1, 1, 3, 5 ...
//     pell: 0, 1, 2, 5, 12 ...
//     tribonacci: 0, 0, 1, 1, 2 ...
//     tetranacci: 0, 0, 0, 1, 1 ...
//
// Pattern mapping
//
//     'fib' -> fibonacci
//     'pad' -> padovan
//     'jac' -> jacobstahl
//     'pel' -> pell
//     'tri' -> tribonacci
//     'tet' -> tetranacci
//
// Answer:
const fibCache = { 0: 0, 1: 1, 2: 1, 3: 2, 4: 3 };
const padCache = { 0: 1, 1: 0, 2: 0, 3: 1, 4: 0 };
const pellCache = { 0: 0, 1: 1, 2: 2, 3: 5, 4: 12 };
const tribCache = { 0: 0, 1: 0, 2: 1, 3: 1, 4: 2 };
const tetraCache = { 0: 0, 1: 0, 2: 0, 3: 1, 4: 1 };
const jacobCache = { 0: 0, 1: 1, 2: 1, 3: 3, 4: 5 };

function mixbonacci(pattern, n) {
  if (n === 0 || pattern.length === 0) return [];
  const key = {
    fib: fibonacci(),
    pad: padovan(),
    jac: jacobstahl(),
    pel: pell(),
    tri: tribonacci(),
    tet: tetranacci(),
  };
  let index = 0;
  const out = [];
  for (let i = 0; i < n; i++) {
    out.push(key[pattern[index]].next().value);
    index = ++index % pattern.length;
  }
  return out;
}
const fibonacci = function* (cache = fibCache) {
  let num = 0;
  while (true) yield fib(num++);
  function fib(n) {
    if (n in cache) return cache[n];
    return (cache[n] = fib(n - 1, cache) + fib(n - 2, cache));
  }
};
const padovan = function* (cache = padCache) {
  let num = 0;
  while (true) yield pad(num++);
  function pad(n) {
    if (n in cache) return cache[n];
    return (cache[n] = pad(n - 2, cache) + pad(n - 3, cache));
  }
};
const pell = function* (cache = pellCache) {
  let num = 0;
  while (true) yield pe(num++);
  function pe(n) {
    if (n in cache) return cache[n];
    return (cache[n] = 2 * pe(n - 1, cache) + pe(n - 2, cache));
  }
};
const tribonacci = function* (cache = tribCache) {
  let num = 0;
  while (true) yield tri(num++);
  function tri(n) {
    if (n in cache) return cache[n];
    return (cache[n] =
      tri(n - 1, cache) + tri(n - 2, cache) + tri(n - 3, cache));
  }
};
const tetranacci = function* (cache = tetraCache) {
  let num = 0;
  while (true) yield tet(num++);
  function tet(n) {
    if (n in cache) return cache[n];
    return (cache[n] =
      tet(n - 1, cache) +
      tet(n - 2, cache) +
      tet(n - 3, cache) +
      tet(n - 4, cache));
  }
};
const jacobstahl = function* (cache = jacobCache) {
  let num = 0;
  while (true) yield jac(num++);
  function jac(n) {
    if (n in cache) return cache[n];
    return (cache[n] = jac(n - 1, cache) + 2 * jac(n - 2, cache));
  }
};
