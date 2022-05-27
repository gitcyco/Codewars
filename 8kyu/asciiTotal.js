// 8 kyu ASCII Total
//
// You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all ASCII characters.
// 
// examples:
// 
// uniTotal("a") == 97 uniTotal("aaa") == 291
//
// Answer:
const uniTotal = str => [...str].reduce((a,e) => a += e.charCodeAt(0), 0);