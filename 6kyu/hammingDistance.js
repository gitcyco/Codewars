// 6 kyu Hamming Distance
//
// The Hamming Distance is a measure of similarity between two strings of equal length. Complete the function so that it returns the number of positions where the input strings do not match.
// Examples:
//
// a = "I like turtles"
// b = "I like turkeys"
// Result: 3
//
// a = "Hello World"
// b = "Hello World"
// Result: 0
//
// a = "espresso"
// b = "Expresso"
// Result: 2
//
// You can assume that the two input strings are of equal length.
//
// Answer:
const hamming = (a, b) => [...a].reduce((a, e, i) => (a += e === b[i] ? 0 : 1), 0);
