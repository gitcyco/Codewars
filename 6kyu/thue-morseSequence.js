// 6 kyu Thue-Morse Sequence
//
// Given a positive integer n, return first n dgits of Thue-Morse sequence, as a string (see examples).
//
// Thue-Morse sequence is a binary sequence with 0 as the first element.
// The rest of the sequece is obtained by adding the Boolean (binary) complement of a group obtained so far.
//
// For example:
//
// 0
// 01
// 0110
// 01101001
// and so on...
//
// alt
//
// Ex.:
//
// thueMorse(1); //'0'
// thueMorse(2); //'01'
// thueMorse(5); //'01101'
// thueMorse(10): //'0110100110'
//
//     You don't need to test if n is valid - it will always be a positive integer.
//     n will be between 1 and 10000
//
// Answer:
function thueMorse(n) {
  let arr = [0];
  for (let i = 0; arr.length <= n; i++) {
    let len = arr.length;
    for (let j = 0; j < len; j++) {
      arr.push(+!arr[j]);
    }
  }
  return arr.slice(0, n).join("");
}
