// 7 kyu No ifs no buts
//
// Write a function that accepts two parameters (a and b) and says whether a is smaller than, bigger than, or equal to b.
//
// Here is an example code:
//
// var noIfsNoButs = function (a,b) {
//   if(a > b) return a + " is greater than " + b
//   else if(a < b) return a + " is smaller than " + b
//   else if(a == b) return a + " is equal to " + b
// }
//
// There's only one problem...
//
// You can't use if statements, and you can't use shorthands like (a < b)?true:false;
//
// in fact the word "if" and the character "?" are not allowed in the code.
//
// Inputs are guarenteed to be numbers
//
// Answer:
const noIfsNoButs = function (a, b) {
  let val = (Math.floor(a - b) >> -1) | 1;
  let arr = ["smaller than", "equal to", "greater than"];
  return `${a} is ${arr[!(a == b) + val]} ${b}`;
};
