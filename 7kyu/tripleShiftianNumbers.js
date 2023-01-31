// 7 kyu Triple Shiftian Numbers
//
// Much cooler than your run-of-the-mill Fibonacci numbers, the Triple Shiftian are so defined: T[n] = 4 * T[n-1] - 5 * T[n-2] + 3 * T[n-3].
//
// You are asked to create a function which accept a base with the first 3 numbers and then returns the nth element.
//
// tripleShiftian([1,1,1],25) == 1219856746
// tripleShiftian([1,2,3],25) == 2052198929
// tripleShiftian([6,7,2],25) == -2575238999
// tripleShiftian([3,2,1],35) == 23471258855679
// tripleShiftian([1,9,2],2) ==  2
//
// Answer:
function tripleShiftian(base, n) {
  let val = 0;
  for (let i = 2; i < n; i++) {
    val = 4 * base[base.length - 1] - 5 * base[base.length - 2] + 3 * base[base.length - 3];
    base.push(val);
  }
  return base[n];
}
