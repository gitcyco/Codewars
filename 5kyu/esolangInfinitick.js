// 5 kyu Esolang: InfiniTick
//
// Task
//
// Make a custom esolang interpreter for the language InfiniTick. InfiniTick is a descendant of Tick but also very different.
// Unlike Tick, InfiniTick has 8 commands instead of 4. It also runs infinitely, stopping the program only when an error occurs.
// You may choose to do the Tick kata first.
// Syntax/Info
//
// InfiniTick runs in an infinite loop. This makes it both harder and easier to program in.
// It has an infinite memory of bytes and an infinite output amount. The program only stops when an error is reached. The program is also supposed to ignore non-commands.
// Commands
//
// >: Move data selector right.
//
// <: Move data selector left.
//
// +: Increment amount of memory cell. Truncate overflow: 255+1=0.
//
// -: Decrement amount of memory cell. Truncate overflow: 0-1=255.
//
// *: Add ascii value of memory cell to the output tape.
//
// &: Raise an error, ie stop the program.
//
// /: Skip next command if cell value is zero.
//
// \: Skip next command if cell value is nonzero.
//
// Notes
//
//     Please be wordy and post your likes/dislikes in the discourse area.
//     If this kata is a duplicate or uses incorrect style, this is not an issue, this is a suggestion.
//     Please don't edit this kata just to change the estimated rank. Thank you!
//
// Answer:
function interpreter(code) {
  let tape = Array(20000).fill(0);
  let memPtr = Math.floor(tape.length / 2);
  let codePtr = 0;
  let out = [];
  let go = true;
  let skip = false;

  while (go) {
    if (skip) {
      if (code[codePtr].match(/[><\+\-&\*\/\\]/)) {
        skip = false;
        codePtr = ++codePtr % code.length;
        continue;
      }
    }
    switch (code[codePtr]) {
      case ">":
        memPtr++;
        if (memPtr > tape.length - 1) tape.push(0);
        break;
      case "<":
        memPtr--;
        if (memPtr < 0) {
          tape.unshift(0);
          memPtr = 0;
        }
        break;
      case "+":
        tape[memPtr] = ++tape[memPtr] % 256;
        break;
      case "-":
        tape[memPtr] = --tape[memPtr] < 0 ? 255 : tape[memPtr];
        break;
      case "&":
        go = false;
        break;
      case "*":
        out.push(String.fromCharCode(tape[memPtr]));
        break;
      case "/":
        if (tape[memPtr] === 0) skip = true;
        break;
      case "\\":
        if (tape[memPtr] !== 0) skip = true;
        break;
    } // end switch
    codePtr = ++codePtr % code.length;
  }
  return out.join("");
}

let a = interpreter(
  "uiwqYTeioYRTYRqsdjkRTYhsdfjnxxnc+ncbzRxRTFSnmcSDSDFbuihYeiowisispfshkkjxbm*92892sdf348sSDFdf78rteSDF9tyu23SDF7246uyi7ert161xcv37286xcv378453slkdfjSLDKFJSKLWOI2389472398&zjkxbcjk289347289JKHSDFX98v89cxv7"
);
console.log(a);
