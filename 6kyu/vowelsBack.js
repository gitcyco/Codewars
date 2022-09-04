// 6 kyu Vowels Back
//
// You need to play around with the provided string (s).
//
// Move consonants forward 9 places through the alphabet. If they pass 'z', start again at 'a'.
//
// Move vowels back 5 places through the alphabet. If they pass 'a', start again at 'z'. For our Polish friends this kata does not count 'y' as a vowel.
//
// Exceptions:
//
// If the character is 'c' or 'o', move it back 1 place. For 'd' move it back 3, and for 'e', move it back 4.
//
// If a moved letter becomes 'c', 'o', 'd' or 'e', revert it back to it's original value.
//
// Provided string will always be lower case, won't be empty and will have no special characters.
//
// Answer:
function vowelBack(s) {
  const spec = { a: -5, e: -4, i: -5, o: -1, u: -5, c: -1, d: -3 };
  return s
    .split("")
    .map((e) => {
      let a = spec[e] ? rotX(e, spec[e]) : rotX(e, 9);
      return "code".includes(a) ? e : a;
    })
    .join("");
}

const rotX = (str, x) =>
  str.replace(/[a-z]/gi, (e) =>
    String.fromCharCode((((x < 0 ? 26 : 0) + e.charCodeAt(0) - offset(e) + (x < 0 ? x % 26 : x)) % 26) + offset(e))
  );
const offset = (s) => (s.toUpperCase() === s ? 65 : 97);
