// 7 kyu Simple string reversal
//
// In this Kata, we are going to reverse a string while maintaining the spaces (if any) in their original place.
//
// For example:
//
// solve("our code") = "edo cruo"
// -- Normal reversal without spaces is "edocruo".
// -- However, there is a space at index 3, so the string becomes "edo cruo"
//
// solve("your code rocks") = "skco redo cruoy".
// solve("codewars") = "srawedoc"
//
// More examples in the test cases. All input will be lower case letters and in some cases spaces.
//
// Answer:
function solve(str) {
  let s = 0;
  const grp = str.split(" ").reduce((ac, e, i, ar) => ((ac[i] = ar[i].length), ac), []);
  str = str.replace(/\s/g, "").split("").reverse().join("");
  const out = grp.map((e, i, ar) => ((e = str.slice(s, s + e)), (s += ar[i]), e));
  return out.join(" ");
}
