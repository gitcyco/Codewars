// 7 kyu Shortest Word
//
// Simple, given a string of words, return the length of the shortest word(s).
// 
// String will never be empty and you do not need to account for different data types.
//
// Answer:
const findShort = s => s.split(' ').sort((a,b) => a.length - b.length)[0].length;