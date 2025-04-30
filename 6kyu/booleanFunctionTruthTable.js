// 6 kyu Boolean function truth table
//
// a truth table
//
// You are given a boolean function (i.e. a function that takes boolean parameters and returns a boolean).
// You have to return a string representing the function's truth table.
// Formatting rules :
//
//     The variables should be named A, B, C, D ... and so on, in the same order as they are passed
//     to the boolean function, i.e. first (leftmost) parameter is A. (There won't be functions with more than 26 (A ... Z) parameters).
//     Boolean values will be represented by either 1 (true) or 0 (false)
//     If the function is anonymous / a closure / a lambda (depending on the language), use the letter f as a name.
//         in PHP, this happens if the function is a Closure
//         in Python, this happens if the function is a lambda
//         in JavaScript, this happens if the function's name is an empty string
//         in Java and C, there will be no anonymous functions
//         in Lua, this always happens
//     The first line will consist of, in order:
//         the variables' names, separated by a space ( )
//         two tabulations (\t) characters
//         the function name with, inside parentheses, its parameters separated by commas (,)
//         two newline (\n) characters
//     The following lines will consist of, in order:
//         the variables' values, separated by a space ( )
//         two tabulations (\t) characters
//         the function result for this arrangement of variables
//         a newline (\n) character
//     The binary number formed by concatenating the function's arguments together must be in increasing order
//
// Examples
//
// A B        AND(A,B)
//
// 0 0        0
// 0 1        0
// 1 0        0
// 1 1        1
//
// Answer:
function truthTable(bf) {
  const name = bf.name || "f";
  let params = (bf
    .toString()
    .replace(/\n/g, " ")
    .match(/(?<=\()[A-Z, ]+(?=\))/) || [""])[0];
  params = params.replace(/\s/g, "").split(",");
  const len = params.length;
  const bin = 2 ** len - 1;
  let out = params.join(" ") + "\t\t" + name + `(${[params.toString()]})\n\n`;
  for (let i = 0; i <= bin; i++) {
    const args = i.toString(2).padStart(len, 0).split("").map(Number);
    const result = +bf(...args);
    out += args.join(" ") + "\t\t" + result + "\n";
  }
  return out;
}
