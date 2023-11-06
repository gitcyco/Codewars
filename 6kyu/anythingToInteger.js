// 6 kyu Anything to integer
//
// Your task is to program a function which converts any input to an integer.
//
// Do not perform rounding, the fractional part should simply be discarded.
//
// If converting the input to an integer does not make sense (with an object, for instance), the function should return 0 (zero).
//
// Also, Math.floor(), parseInt() and parseFloat() are disabled for your unconvenience.
//
// Onegaishimasu!
//
// Answer:
const toInteger = (n) => +(+n).toString().replace(/\.\d+$|[^\d\-]/g, "");
