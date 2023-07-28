// 7 kyu Binary sXORe
//
// Given a number n we will define it's sXORe to be 0 XOR 1 XOR 2 ... XOR n where XOR is the bitwise XOR operator.
//
// Write a function that takes n and returns it's sXORe.
// Examples
// n 	sXORe n
// 0 	0
// 1 	1
// 50 	51
// 1000000 	1000000
//
// Answer:
const sxore = function (n) {
  if (n > 1 && (n + 1) % 4 === 0) return 0;
  if (n % 4 === 0) return n;
  if (n % 4 === 1) return 1;
  if (n % 4 === 2) return n + 1;
};
