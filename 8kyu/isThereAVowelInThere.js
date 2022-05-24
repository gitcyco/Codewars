// 8 kyu Is there a vowel in there?
//
// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).
// 
// If they are, change the array value to a string of that vowel.
// 
// Return the resulting array.
//
// Answer:
const isVow = (a, v=[97,101,105,111,117]) => a.map(e=>v.includes(e) ? String.fromCharCode(e) : e);