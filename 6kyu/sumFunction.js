// 6 kyu sum function
//
// Write a sum function which will work properly when invoked using either syntax below.
// 
// sum(2,3);  // Outputs 5
// 
// sum(2)(3); // Outputs 5
// 
// HINT : use closures
//
// Answer:
//
const sum = (a,b) => (b == undefined) ? c => a+c : a+b;

// Expanded to make sense:
//
// function sum(a,b) {
//   if(!b) return function(c) {
//     return a+c;
//   } 
//   return a+b;
// }