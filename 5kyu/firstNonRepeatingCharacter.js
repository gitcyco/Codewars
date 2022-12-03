// 5 kyu First non-repeating character
//
// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.
//
// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.
//
// As an added challenge, upper- and lowercase letters are considered the same character, but the function
// should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.
//
// If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.
//
// Answer:
function firstNonRepeatingLetter(s) {
  let map = new Map();
  let arr = s.split("");
  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) map.set(arr[i], map.get(arr[i]) + 1);
    else map.set(arr[i], 1);
  }
  for (let [key, val] of map) {
    if (key.match(/[a-z]/gi)) {
      if (map.has(opCase(key))) continue;
    }
    if (val == 1) return key;
  }
  return "";
}

const opCase = (c) => {
  if (c === c.toUpperCase()) return c.toLowerCase();
  else return c.toUpperCase();
};
