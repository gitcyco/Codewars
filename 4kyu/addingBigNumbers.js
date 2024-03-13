// 4 kyu Adding Big Numbers
//
// We need to sum big numbers and we require your help.
//
// Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.
// Example
//
// add("123", "321"); -> "444"
// add("11", "99");   -> "110"
//
// Notes
//
//     The input numbers are big.
//     The input is a string of only digits
//     The numbers are positives
//
// Answer:
function add(a, b) {
  let carry = 0;
  let total = "";
  a = a.split("");
  b = b.split("");
  while (a.length || b.length || carry) {
    carry += (+a.pop() || 0) + (+b.pop() || 0);
    total = (carry % 10) + total;
    carry = carry > 9;
  }
  return total;
}
