// 6 kyu Break camelCase
//
// Complete the solution so that the function will break up camel casing, using a space between words.
// Example
// 
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""
// 
// Answer:
const solution = str => str.replace(/[(A-Z)]/g, x => ' ' + x.toUpperCase()).trim();