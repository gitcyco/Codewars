// 5 kyu Bit calculator
//
// In this kata your task is to create bit calculator. Function arguments are two bit
// representation of numbers ("101","1","10"...), and you must return their sum in decimal representation.
//
// Test.expect(calculate("10","10") == 4);
// Test.expect(calculate("10","0") == 2);
// Test.expect(calculate("101","10") == 7);
//
// parseInt and some Math functions are disabled.
//
// Those Math functions are enabled: pow,round,random
//
// Answer:
function calculate(n1, n2, ct = 0) {
  const s1 = n1.split("").reverse();
  const s2 = n2.split("").reverse();
  ct = s1.reduce((ac, e, i) => (ac += +e * 2 ** i), 0);
  ct += s2.reduce((ac, e, i) => (ac += +e * 2 ** i), 0);
  return ct;
}
