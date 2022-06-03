// 7 kyu Remove duplicate words
//
// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.
// 
// Example:
// 
// Input:
// 
// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
// 
// Output:
// 
// 'alpha beta gamma delta'
//
// Answer:
const removeDuplicateWords = s => Array.from(new Set(s.split(' '))).join(' ');