// 6 kyu Loneliest character
//
// Complete the function which accepts a string and return an array of character(s) that have the most spaces to their right and left.
//
// Notes:
//
//     the string can have leading/trailing spaces - you should not count them
//     the strings contain only unique characters from a to z
//     the order of characters in the returned array doesn't matter
//
// Examples
//
// "a b  c"                        -->  ["b"]
// "a bcs           d k"           -->  ["d"]
// "    a b  sc     p     t   k"   -->  ["p"]
// "a  b  c  de"                   -->  ["b", "c"]
// "     a  b  c de        "       -->  ["b"]
// "abc"                           -->  ["a", "b", "c"]
//
// Answer:
function loneliest(str) {
  str = str.trim();
  let chars = str.match(/[a-z]/gi) || [];
  let text = [];
  for (let c of chars) {
    let regex = new RegExp(`\\s*${c}\\s*`, "gi");
    text.push((str.match(regex) || [])[0]);
  }
  text = text
    .sort((a, b) => b.length - a.length)
    .filter((e, i, a) => e.length === a[0].length);
  return text.map((e) => e.trim());
}
