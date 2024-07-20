// 6 kyu Number of Digit d in m-based Number Converted to Base n
//
// You have a number x in base m (xm). Count the number of digits d after converting xm to base n.
// Representation of numbers
//
// base = 2: 0, 1
// base = 3: 0, 1, 2
// ...
// base = 10: 0, 1, ... 8, 9
// base = 11: 0 ... , 8, 9, a
// base = 12: 0 ... , 8, 9, a, b
// ...
// base = 16: 0 ... , 8, 9, a, ..., e, f
// base = 36: 0 ..., 8, 9, a, ..., y, z
//
// Preconditions
//
//     2 <= m <= 36
//     2 <= n <= 36
//     xm is always a valid non-negative m-based number.
//     d is always a valid digit for base n
//
// Examples
//
// // Function defintion
//
// countDigits(number, digit, base=10, from_base=10)
//
// // number    -> xm (str)
// // digit     -> d  (str)
// // base      -> n  (int)
// // from_base -> m  (int)
//
// countDigits("133", "3") == 2
// countDigits("10", "a", base=11) == 1
// countDigits("1100101110101", "d", base=15, from_base=2) == 1
//
// Answer:
function countDigit(number, digit, base, fromBase) {
  let int = parseInt(number, fromBase);
  let alt = int.toString(base);
  return (alt.match(new RegExp(digit, "g")) || []).length;
}
