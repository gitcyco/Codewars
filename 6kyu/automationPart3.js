// 6 kyu Automaton (Part 3)
//
// Preamble
//
// You were cleaning your virtual pantry and accidentally found a folder with a label on it: Automaton v1.9.
// Part 3
//
// You launched Automaton and it worked! During fixing you even improved it a little bit.
// Now you got the idea to update Automaton to v2.0. So you start from creating a new manual.
// Manual for Automaton v2.0
//
//     If automaton receives a string it will tell you the amount of each vowel that is present in the string. Examples:
//
//     automaton("String Example") // {"i": 1, "e": 2, "a": 1}
//
//     If automaton receives a number it will give you a list of all prime numbers from 1 up to the given number. Examples:
//
//     automaton(3); // [2, 3]
//     automaton(5.5); // [2, 3, 5]
//
//     If automaton receives an object it will return an array of 3 elements:
//     [n, keys, values] where n is the number of keys, keys is an array of all keys, and values is an array of stringified values.
//     Examples:
//
//     automaton({"a": "b"}); // [2, ["a"], ["b"]]
//     automaton([1, 0, 3]); // [3, ['0', '1', '2'], ['1', '0', '3']]
//     automaton([]); // [0, [], []]
//
//     Note thatkeysmust be sorted lexicographically andvaluesmust be sorted according to the keys.
//
// Now you need just to update automaton so it starts working correctly.
//
// Answer:
function automaton(e) {
  switch (typeof e) {
    case "string":
      e = e.toLowerCase().replace(/[^aeiou]/g, "");
      return [...e].reduce((a, e) => (e in a ? a[e]++ : (a[e] = 1), a), {});
    case "number":
      e = Math.floor(e);
      const arr = [];
      for (let i = 2; i <= e; i++) if (isPrime(i)) arr.push(i);
      return arr;
    case "object":
      let keys = Object.keys(e).sort();
      let values = Object.values(e).map(String);
      return [keys.length, keys, values];
  }
}

function isPrime(num) {
  if (num < 1) return false;
  let sqrtnum = Math.floor(Math.sqrt(num));
  let prime = num !== 1;
  for (let i = 2; i < sqrtnum + 1; i++) {
    if (num % i === 0) {
      prime = false;
      break;
    }
  }
  return prime;
}
