// 6 kyu Combinator Flip
//
// Create a combinator function named flip that takes a function as an argument and returns that function with it's arguments reversed.
//
// For example:
//
// flip(print)(4,5) // returns "5 -> 4"
//
// function print(a,b) {
//   return a + " -> " + b;
// }
//
// The idea is to reverse any number of arguments using a higher order function, without any concern for the function being passed into it.
//
// Answer:
function flip(fn) {
  return function f(...args) {
    const a = args.reverse();
    return fn(...a);
  };
}
