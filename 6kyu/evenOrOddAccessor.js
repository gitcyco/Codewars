// 6 kyu Even or Odd Accessor
//
// Create a function or callable object that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
// The function should also return "Even" or "Odd" when accessing a value at an integer index.
//
// For example:
//
// evenOrOdd(2); //'Even'
// evenOrOdd[2]; //'Even'
// evenOrOdd(7); //'Odd'
// evenOrOdd[7]; //'Odd'
//
// Answer:
function evenFunc(n) {
  return n % 2 ? "Odd" : "Even";
}
const handler = {
  get(t, prop, r) {
    if (prop % 2 === 0) return "Even";
    else return "Odd";
  },
};

const evenOrOdd = new Proxy(evenFunc, handler);
