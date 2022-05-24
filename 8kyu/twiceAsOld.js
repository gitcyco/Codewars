// 8 kyu Twice as old
//
// Your function takes two arguments:
// 
//     current father's age (years)
//     current age of his son (years)
// 
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).
//
// Answer:
const twiceAsOld = (d, s) => Math.abs(s*2 - d);