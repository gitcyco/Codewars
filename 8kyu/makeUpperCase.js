// 8 kyu MakeUpperCase
//
// Write a function which converts the input string to uppercase.
//
// Answer:
// (not gonna use toUpperCase! Lets make something dumb and hard to read.)
const makeUpperCase = s => [...s].map(e=>e.charCodeAt(0)).map(e=> e>96&&e<123 ? String.fromCharCode(e-32) : String.fromCharCode(e)).join('');