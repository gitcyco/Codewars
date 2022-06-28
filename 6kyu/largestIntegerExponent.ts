// 6 kyu Largest integer exponent
//
// Write a method named getExponent(n,p) that returns the largest integer exponent x such that px evenly divides n. 
// if p<=1 the method should return null/None (throw an ArgumentOutOfRange exception in C#).
//
// Answer:
//
// This is too slow for Typescript, refactor:
//
function getExponent(n, p) {
    if (p < 2) return null;
    for (let i = Math.abs(n); i > 0; i--) {
        if (n % (p ** i) === 0) return i;
    }
    return 0;
}