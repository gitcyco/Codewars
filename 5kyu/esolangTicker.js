// 5 kyu Esolang: Ticker
//
// NOTE: It is recommended you complete Introduction to Esolangs or MiniBitFlip before solving this one.
// Task:
// Make an interpreter for an esoteric language called Ticker. Ticker is a descendant of [Tick](https://www.codewars.com/kata/esolang-tick).
// Your language has the following commands:
//
// >: increment the selector by 1
//
// <: decrement the selector by 1
//
// *: add the ascii value of selected cell to the output tape
//
// +: increment selected cell data by 1. If 256, then it is 0
//
// -: increment selected cell data by -1. If less than 0, then 255
//
// /: set selected cell data to 0
//
// !: add new data cell to the end of the array
//
// You start with selector at 0 and one cell with a value of 0.
// If selector goes out of bounds, assume 0 for that cell but do not add it to the memory.
// If a + or - is being made do not change the value of the assumed cell. It will always stay 0 unless it is added to the memory
//
// In other words:
//
// data: start 0 end
// selector:   ^
// data start 1 2 4 end
// selector:        ^
// Assume that cell is zero.
//
// Answer:
function interpreter(code) {
  let tape = [0];
  let memPtr = 0;
  let codePtr = 0;
  let out = [];

  while (codePtr < code.length) {
    switch (code[codePtr]) {
      case ">":
        memPtr++;
        break;
      case "<":
        memPtr--;
        break;
      case "+":
        if (memPtr < tape.length && memPtr >= 0) tape[memPtr] = ++tape[memPtr] % 256;
        break;
      case "-":
        if (memPtr < tape.length && memPtr >= 0) tape[memPtr] = --tape[memPtr] < 0 ? 255 : tape[memPtr];
        break;
      case "/":
        if (memPtr < tape.length && memPtr >= 0) tape[memPtr] = 0;
        break;
      case "*":
        if (memPtr < tape.length && memPtr >= 0) out.push(String.fromCharCode(tape[memPtr]));
        else out.push(String.fromCharCode(0));
        break;
      case "!":
        tape.push(0);
        break;
    } // end switch
    codePtr++;
  }
  return out.join("");
}
