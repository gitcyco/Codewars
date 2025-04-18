// 6 kyu Remember
//
// Write a function that takes a string and returns an array of the repeated characters (letters, numbers, whitespace) in the string.
//
// If a charater is repeated more than once, only show it once in the result array.
//
// Characters should be shown by the order of their first repetition.
// Note that this may be different from the order of first appearance of the character.
//
// Characters are case sensitive.
//
// For F# return a "char list"
// Examples:
//
// remember("apple") => returns ["p"]
// remember("apPle") => returns []          // no repeats, "p" != "P"
// remember("pippi") => returns ["p","i"]   // show "p" only once
// remember('Pippi') => returns ["p","i"]   // "p" is repeated first
//
// Answer:
function remember(str) {
  const out = [];
  const map = {};
  for (let char of str) {
    if (map[char] === 1) {
      map[char]++;
      out.push(char);
    } else if (!map[char]) {
      map[char] = 1;
    }
  }
  return out;
}
