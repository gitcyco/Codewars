// 7 kyu Boolean logic from scratch
//
// Task
// 
// You need to implement two functions, xor and or, that replicate the behaviour of their respective operators:
// 
//     xor = Takes 2 values and returns true if, and only if, one of them is truthy.
//     or = Takes 2 values and returns true if either one of them is truthy.
// 
// When doing so, you cannot use the or operator: ||.
// Input
// 
//     Not all input will be booleans - there will be truthy and falsey values [the latter including also empty strings and empty arrays]
//     There will always be 2 values provided
// 
// Examples
// 
//     xor(true, true) should return false
//     xor(false, true) should return true
//     or(true, false) should return true
//     or(false, false) should return false
//
// Answer:
// Doing this with a basic logic gate only, the NAND
// With NAND, we can construct ALL other logic gates. It is a fundamental gate, upon which all
// boolean logic (and hence, cpu's, etc) can be based upon.
const or = (a,b) => nand(nand(a,a), nand(b,b));
const xor = (a,b) => nand( nand(a,nand(a,b)), nand(b,nand(a,b)));
const nand = (a,b) => !(a && b) ? true : false;

