// 7 kyu Alternate capitalization
//
// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. 
// Index 0 will be considered even.
// 
// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
// 
// The input will be a lowercase string with no spaces.
// 
// Good luck!
//
// Answer:
const capitalize = s => [s,s].map((e,i)=>e.split('')
  .map((a,b)=>(i+2)%2 ? (b+2)%2 ? a.toUpperCase() : a 
    : (b+2)%2 ? a : a.toUpperCase() ).join(''));