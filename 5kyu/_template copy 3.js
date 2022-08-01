// 5 kyu Brainscrambler - Esoteric programming #3
//
// Brainscrambler
//
// Brainscrambler is an Esoteric programming language.
//
// A Brainscrambler program consists of a string containing
//
//     command characters
//     decimal numbers, which are the input of the program.
//
// Brainscrabler memory is made up of three stacks storing integers : A, B, and C.
// The "current stack" starts out at A, then is rotated to B, then to C, then back to A again, etc.
// The "current value" is the number at the top of the current stack.
//
// In other words :
//
//     A is to the right of C and to the left of B
//     B is to the right of A and to the left of C
//     C is to the right of B and to the left of A
//
// Your task is to create an interpreter for Brainscrambler. You have to write the method read(input) of the object Interpreter.
//
// This method takes as parameter a string representing the source code of the Brainscrambler program.
//
// Its output shall be a string containing all the values that have been sent to the output during the execution of the program.
//
// You must execute the commands until you reach the end of the input string.
// Commands
//
// The eleven possible commands in the Brainscrambler language:
//
//      + Increment the current number.
//      - Decrement the current number.
//      < Move the current number to the stack to the "left".
//      > Move the current number to the stack to the "right".
//      * Push a zero onto the current stack.
//      ^ Pop the current number and discard it.
//      # Rotate between stacks.
//     , Input a number and push it to the current stack. This number will consist of the decimal digits
//       immediatly to the right of the , character. After reading the number, the program resumes at the command to the right of the last digit.
//      . Output the current number.
//     [ Enter the loop.
//     ] Jump to the corresponding [ bracket if the current number is > 0.
//
// Specifications
//
//     All stacks have an original value of 0
//
//     The input numbers are decimal and in the big-endian order.
//
//     When popping from the stack, if the stack is empty, the current number will be undefined. If the current number is undefined :
//         If a . or < or > operation appears, do not add anything to the output or shift anything.
//         If a + or - appears, set the current number to 0.
//         If a ] appears, do not reenter the loop (as undefined > 0 === false).
//
//     Between read() calls :
//         The output is reset;
//         The stacks keep their values;
//         The current stack stays the same.
//
//     The loops are do [] while loops, i.e. the loop body is executed BEFORE evaluating the current value
//
//     Loops can be nested
//
// Examples
// Simple Program
//
// const interpreter = new Interpreter();
// interpreter.read('*+.');
// '1'
//
// Answer:
const Interpreter = function () {
  const stacks = [[0], [0], [0]];
  let sIdx = 0;
  let sPtr = stacks[sIdx];

  return {
    read: function (code) {
      let out = [];
      let stack = [];
      let num = "";
      let tmp = 0;
      let pop;
      let codePtr = 0;

      while (codePtr < code.length) {
        switch (code[codePtr]) {
          case "+":
            pop = sPtr.pop();
            if (pop != undefined) sPtr.push(++pop);
            else sPtr.push(0);
            break;
          case "-":
            pop = sPtr.pop();
            if (pop != undefined) sPtr.push(--pop);
            else sPtr.push(0);
            break;
          case "<":
            pop = sPtr.pop();
            tmp = sIdx - 1 < 0 ? 2 : sIdx - 1;
            if (pop != undefined) stacks[tmp].push(pop);
            break;
          case ">":
            pop = sPtr.pop();
            tmp = (sIdx + 1) % 3;
            if (pop != undefined) stacks[tmp].push(pop);
            break;
          case "#":
            sIdx = ++sIdx % 3;
            sPtr = stacks[sIdx];
            break;
          case "*":
            sPtr.push(0);
            break;
          case ".":
            if (sPtr[sPtr.length - 1] != undefined) out.push(sPtr[sPtr.length - 1]);
            break;
          case "^":
            sPtr.pop();
            break;
          case ",":
            while (codePtr < code.length) {
              tmp = parseInt(code[++codePtr]);
              if (tmp >= 0) {
                num += "" + tmp;
              } else {
                codePtr--;
                break;
              }
            }
            if (+num >= 0) sPtr.push(+num);
            num = "";
            break;
          case "[":
            stack.push(codePtr);
            break;
          case "]":
            if (sPtr[sPtr.length - 1] > 0) {
              codePtr = stack.pop() - 1;
            }
            break;
        } // end switch
        codePtr++;
      }
      return out.join("");
    },
  };
};
