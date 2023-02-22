// 7 kyu The First Non Repeated Character In A String
//
// You need to write a function, that returns the first non-repeated character in the given string.
//
// If all the characters are unique, return the first character of the string.
// If there is no unique character, return null in JS or Java, None in Python, '\0' in C.
//
// You can assume, that the input string has always non-zero length.
// Examples
//
// "test"   returns "e"
// "teeter" returns "r"
// "trend"  returns "t" (all the characters are unique)
// "aabbcc" returns null (all the characters are repeated)
//
// Answer:
function firstNonRepeated(s) {
  const obj = [...s].reduce((a, e) => (e in a ? a[e]++ : (a[e] = 1), a), {});
  for (let c of s) {
    if (obj[c] === 1) return c;
  }
  return null;
}
