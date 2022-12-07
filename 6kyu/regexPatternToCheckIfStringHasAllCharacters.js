// 6 kyu regex pattern to check if string has all characters
//
// Output
//
// Regular expression pattern string.
// Examples
//
// Your function should return a string.
//
// function regexContainsAll(str) {
//   return "abc";
// }
//
// That regex pattern will be tested like this.
//
// const abc = "abc";
// const pattern = regexContainsAll(abc);
// const str = "zzzaaacccbbbzzz";
// new RegExp(pattern).test(str);  // -> true
//
// Answer:
function regexContainsAll(str) {
  let pat = Array.from(new Set(str.split("")));
  let out = pat.map((e) => `(?=.*${e})`);
  return out.join("");
}
