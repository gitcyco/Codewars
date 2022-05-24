// 5 kyu Additionless addition.
//
// Create an addition function that does not utilize the + or - operators.
// Anti-cheat tests
// 
// You may not use any of these symbols: +-[].'"`
// 
// Moreover, Math, Array, eval, new Function, with and such have been disabled.
//
// Answer:
function add (x, y) {
    let c = 0;
    while (y != 0) {
      c = x&y;
      x = x^y;
      y = c<<1
    }
    return x;
}