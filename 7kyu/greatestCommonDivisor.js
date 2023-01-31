// 7 kyu Greatest common divisor
//
// Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.
//
// The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.
//
// Answer:
//
// Iterative brute force solution:
function mygcd(x, y) {
  return y == 0 ? x : mygcd(y, x % y);
  let a = x >= y ? x : y;
  let b = x > y ? y : x;
  if (a / b == parseInt(a / b)) return b;
  for (let i = parseInt(b / 2); i > 0; i--) {
    if (a / i == parseInt(a / i) && b / i == parseInt(b / i)) return i;
  }
}

// Recursive solution:
const mygcd_recursive = (x, y) => (y == 0 ? x : mygcd_recursive(y, x % y));
