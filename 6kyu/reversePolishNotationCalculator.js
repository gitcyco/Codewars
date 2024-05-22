// 6 kyu Reverse polish notation calculator
//
// Your job is to create a calculator which evaluates expressions in Reverse Polish notation.
//
// For example expression 5 1 2 + 4 * + 3 - (which is equivalent to 5 + ((1 + 2) * 4) - 3 in normal notation) should evaluate to 14.
//
// For your convenience, the input is formatted such that a space is provided between every token.
//
// Empty expression should evaluate to 0.
//
// Valid operations are +, -, *, /.
//
// You may assume that there won't be exceptional situations (like stack underflow or division by zero).
//
// Answer:
function calc(expr) {
  const stack = [0];
  const oper = {
    "-": function (a, b) {
      return a - b;
    },
    "+": function (a, b) {
      return a + b;
    },
    "*": function (a, b) {
      return a * b;
    },
    "/": function (a, b) {
      return a / b;
    },
  };
  let toks = expr.split(" ");
  for (let t of toks) {
    if (/^[\+\-\*\/]$/.test(t)) {
      let b = stack.pop();
      let a = stack.pop();
      stack.push(oper[t](a, b));
    } else {
      stack.push(+t);
    }
  }
  return stack.pop();
}
