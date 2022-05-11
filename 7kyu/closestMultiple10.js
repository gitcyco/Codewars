// 7 kyu Return the closest number multiple of 10
//
// Given a number return the closest number to it that is divisible by 10.
//
// Example input:
//
// 22
// 25
// 37
//
// Expected output:
//
// 20
// 30
// 40
//
// Answer:
const closestMultiple10 = num => Math.round(num / 10) * 10;