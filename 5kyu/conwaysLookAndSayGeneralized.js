// 5 kyu Conway's Look and Say - Generalized
//
// Your task is to create a function that will take an integer and return the result of the look-and-say function on that integer.
// This should be a general function that takes as input any positive integer, and returns an integer; inputs are not limited to the sequence which starts with "1".
//
// Conway's Look-and-say sequence goes like this:
//
//     Start with a number.
//     Look at the number, and group consecutive digits together.
//     For each digit group, say the number of digits, then the digit itself.
//
// This can be repeated on its result to generate the sequence.
//
// For example:
//
//     Start with 1.
//     There is one 1 --> 11
//     Start with 11. There are two 1 digits --> 21
//     Start with 21. There is one 2 and one 1 --> 1211
//     Start with 1211. There is one 1, one 2, and two 1s --> 111221
//
// Sample inputs and outputs::
//
//     0 --> 10
//     2014 --> 12101114
//     9000 --> 1930
//     22322 --> 221322
//     222222222222 --> 122
//
// Answer:
function lookSay(n) {
  let say = "";
  let tmp = n.toString().match(/(.)\1*/g);
  return +tmp.reduce((a, e) => a + e.length + e[0], "");
}
