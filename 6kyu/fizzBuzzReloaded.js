// 6 kyu Fizz Buzz Reloaded
//
// In this kata you must implement the "fizz buzz reloaded function". This function takes the following arguments:
//
//     start (integer >= 0). -> this is the point where we start counting (inclusive).
//     stop (integer >= 1) -> this is the point where we stop counting (inclusive).
//     step (integer) if step is positive count forwards, if count is negative count backwards.
//
// for example:
//
// start = 2, end = 10, step = 2
//   sequence: 2 4 6 8 10
//
// start = 10, end = 1, step = -3
//   sequence: 10 7 4 1
//
// The final paremeter is a dictionary/Map object of functions
// (where the key is the name of the function, and the value is the function itself).
// These functions take the following form:
//
// func(x): return bool
//
// For each number in the range, your task is to create a string where you combine the name of all functions that equate to true for the number.
//
// for example, suppose the dictionary/Map object looks like this:
//
// new Map([["flash", x => x % 3 === 0], ["bang", x => x % 5 === 0]])
//
// for the number 3, the string ought to be "fizz", for the number 15 it ought to be "fizzbuzz" (no spaces)
// because both of the functions are true. If NO functions equate to true, return the number
//
// OKay, lets show you a concrete example.
//
// fizzBuzzReloaded(15, 3, -4, new Map([["flash", x => x % 3 === 0], ["bang", x => x % 5 === 0]]))
//
// Our range is starting at 15 and ending at 3, with a step of -4. Thus we need to look at three numbers (15, 11, 7, 3).
//
// fizz(15) is true, as is buzz(15). Thus to the results we append "fizzbuzz"
// fizz(11) is false, buzz(11) is false. Thus to the results we append "11", the same can be said for "7".
// finally, fizz(3) is true but buzz(3) is false. Thus we append "fizz" to the results.
//
// Therefore, our final sequence is: "fizzbuzz 11 7 fizz"
//
// Answer:
function fizzBuzzReloaded(start, stop, step, functions) {
  let arr = [];
  let cur = start;
  while (true) {
    let funcs = [...functions].filter(([n, f]) => f(cur)).map((e) => e[0]);
    if (funcs.length > 0) arr.push(funcs.join(""));
    else arr.push(cur);
    cur += step;
    if (start >= stop && step < 0 && cur < stop) break;
    if (start <= stop && step > 0 && cur > stop) break;
  }
  return arr.join(" ");
}
