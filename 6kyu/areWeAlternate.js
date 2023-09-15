// 6 kyu Are we alternate?
//
// Create a function isAlt() that accepts a string as an argument and validates whether the vowels (a, e, i, o, u) and consonants are in alternate order.
//
// isAlt("amazon")
// // true
// isAlt("apple")
// // false
// isAlt("banana")
// // true
//
// Answer:
function isAlt(word) {
  const vow = "aeiou";
  let flag = vow.includes(word[0]);
  for (let c of word.slice(1)) {
    if (flag && vow.includes(c)) return false;
    if (!flag && !vow.includes(c)) return false;
    flag = !flag;
  }
  return true;
}
