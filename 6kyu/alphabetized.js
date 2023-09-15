// 6 kyu Alphabetized
//
// Re-order the characters of a string, so that they are concatenated into a new string
// in "case-insensitively-alphabetical-order-of-appearance" order. Whitespace and punctuation shall simply be removed!
//
// The input is restricted to contain no numerals and only words containing the english alphabet letters.
//
// Example:
//
// alphabetized("The Holy Bible") // "BbeehHilloTy"
//
// Answer:
function alphabetized(s) {
  let key = "abcdefghijklmnopqrstuvwxyz";
  let obj = {};
  for (let char of s) {
    let low = char.toLowerCase();
    if (obj[low]) obj[low].push(char);
    else obj[low] = [char];
  }
  let str = "";
  for (let char of key) {
    if (obj[char]) str += obj[char].join("");
  }
  return str;
}
