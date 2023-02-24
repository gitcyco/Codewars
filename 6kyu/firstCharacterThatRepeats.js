// 6 kyu first character that repeats
//
// Find the first character that repeats in a String and return that character.
//
// firstDup('tweet') => 't'
// firstDup('like') => undefined
//
// This is not the same as finding the character that repeats first. In that case, an input of 'tweet' would yield 'e'.
//
// Another example:
//
// In 'translator' you should return 't', not 'a'.
//
// v      v
// translator
//   ^   ^
//
// While second 'a' appears before second 't', the first 't' is before the first 'a'.
//
// Answer:
function firstDup(s) {
  let map = [...s].reduce((a, e) => (a.has(e) ? a.set(e, a.get(e) + 1) : a.set(e, 1), a), new Map());
  for (let char of map) {
    if (char[1] > 1) return char[0];
  }
  return undefined;
}
