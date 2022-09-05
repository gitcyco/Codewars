// 6 kyu String Breakers
//
// I will give you an integer (N) and a string. Break the string up into as many substrings of N as you can without spaces.
// If there are leftover characters, include those as well.
//
// Example:
//
// N = 5;
//
// String = "This is an example string";
//
// Return value:
// Thisi
// sanex
// ample
// strin
// g
//
// Return value as a string: 'Thisi'+'\n'+'sanex'+'\n'+'ample'+'\n'+'strin'+'\n'+'g'
//
// Answer:
const stringBreakers = (n, str) =>
  str
    .replace(/ /g, "")
    .match(RegExp(`.{1,${n}}`, "gi"))
    .join("\n");
