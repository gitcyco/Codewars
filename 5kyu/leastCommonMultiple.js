// 5 kyu Least Common Multiple
//
// Write a function that calculates the least common multiple of its arguments; each argument is assumed to be a non-negative integer. 
// In the case that there are no arguments (or the provided array in compiled languages is empty), return 1.
//
// Answer:
//
const lcm = (...args) => args.reduce((a,b) => (a * b) / gcd(a, b));
const gcd = (...args) => args.reduce((a, b) => b === 0 ? a : gcd(b, a % b));