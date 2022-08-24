// 6 kyu Simple Simple Simple String Expansion
//
// The first occurrence of a numeric value should be the number of times each character behind it is repeated, until the next numeric value appears.
//
// stringExpansion('3D2a5d2f') === 'DDDaadddddff'
//
// stringExpansion('3abc') === 'aaabbbccc'      // correct
// stringExpansion('3abc') !== 'aaabc'          // wrong
// stringExpansion('3abc') !== 'abcabcabc'      // wrong
//
// If there are two consecutive numeric characters the first one is ignored.
//
// stringExpansion('3d332f2a') === 'dddffaa'
//
// If there are two consecutive alphabetic characters then the first character has no effect on the one after it.
//
// stringExpansion('abcde') === 'abcde'
//
// Your code should be able to work for both lower and capital case letters.
//
// stringExpansion('') === ''
//
// Answer:
function stringExpansion(s) {
  let out = "";
  let rep = 1;
  const arr = s.split("");
  for (let i = 0; i < s.length; i++) {
    if (/[0-9]/.test(s[i])) rep = +s[i];
    if (/[a-z]/gi.test(s[i])) out += s[i].repeat(rep);
  }
  return out;
}
