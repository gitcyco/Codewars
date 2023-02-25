// 5 kyu Common Bit Twiddles
//
// In this kata, we are throwing readablity to the wind and are refactoring simple functions to use Bit Twiddling.
// Specifications
//
// The functions we will make are:
//
//     isEven
//     isOdd
//     halfAndFloor
//     isPowerOfTwo
//     nthPowerOfTwo
//     truncate (note: not in Haskell)
//     abs
//
// You are only allowed to use bitwise / boolean operators (and corresponding assignment operators): !, &&, ||, &, |, ^, ~, <<, >>, >>>, +, and -.
//
// You should not use ?, :, *, /, %, if, else, for, while, do, switch, case, or the object Math.
//
// ###Code Examples
//
// //All inputs are between + or - 2147483647
//
// //Only receives whole numbers
// isEven(2) // true
// isEven(1) // false
//
// //Only receives whole numbers
// isOdd(2) // false
// isOdd(1) // true
//
// //Only receives positive whole numbers
// halfAndFloor(10) // 5
// halfAndFloor(11) // 5
//
// //Only receives positive whole numbers
// isPowerOfTwo(256) // true
// nthPowerOfTwo(4) // 16
//
// //Receives decimal numbers
// truncate(1.1) // 1
//
// //Receives negative / positive whole numbers
// abs(-1) // 1
//
// Answer:
const isEven = (n) => (n & 1) === 0;
const isOdd = (n) => (n & 1) === 1;
const halfAndFloor = (n) => n >> 1;
const isPowerOfTwo = (n) => !(n & (n - 1));
const nthPowerOfTwo = (n) => 1 << n;
const truncate = (n) => n & n;
const abs = (n) => (n & 0x80000000 && -n) || n;
