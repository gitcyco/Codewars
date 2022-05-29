// 5 kyu Simple Pig Latin
//
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
// Examples
// 
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !
//
// Answer:
const pigIt = str => str.split(' ').map((e,i) => e.match(/[a-z]/i) ? e.slice(1) + e[0] + 'ay' : e).join(' ');