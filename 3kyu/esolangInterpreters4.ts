// 3 kyu Esolang Interpreters #4 - Boolfuck Interpreter
//
// The Task
//
// Write a Boolfuck interpreter which accepts up to two arguments. The first (required) argument is the Boolfuck code in the form of a string.
// The second (optional) argument is the input passed in by the end-user (i.e. as actual characters not bits) which should default to "" if not provided.
// Your interpreter should return the output as actual characters (not bits!) as a string.
//
// function boolfuck (code, input = "")
//
// Preloaded for you is a function brainfuckToBoolfuck()/brainfuck_to_boolfuck()/BrainfuckToBoolfuck() which accepts 1 required
// argument (the Brainfuck code) and returns its Boolfuck equivalent should you find it useful.
//
// Please note that your interpreter should simply ignore any non-command characters. This will be tested in the test cases.
//
// If in doubt, feel free to refer to the official website (link at top).

// Answer:
export function boolfuck(code: string, input: string = ""): string {
  let tape: any[] = Array(256).fill(0);
  let memPtr: number = tape.length / 2;
  let codePtr: number = 0;
  let bitGen = getBit(input);
  const stack: number[] = [];
  let out: any[] = [];
  let outChars: string = "";

  while (codePtr < code.length) {
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
        tape[memPtr] = +!tape[memPtr];
        break;
      case ",":
        tape[memPtr] = bitGen.next().value;
        break;
      case ";":
        out.push(tape[memPtr]);
        break;
      case "[":
        if (tape[memPtr] === 1) {
          stack.push(codePtr);
        } else {
          let counter: number = 0;
          while (true) {
            codePtr++;
            if (!code[codePtr]) break;
            if (code[codePtr] === "[") counter++;
            else if (code[codePtr] === "]") {
              if (counter) counter--;
              else break;
            }
          }
        }
        break;
      case "]":
        let tmp: any = 0;
        tmp = stack.pop();
        codePtr = tmp - 1;
        break;
    } // end switch
    codePtr++;
  }
  console.log("out1: ", out);
  let tmp: string[] = [];
  if (8 - (out.length % 8) !== 8) out = out.concat(Array(8 - (out.length % 8)).fill(0));
  for (let i = 1; i <= out.length; i++) {
    if (i % 8 === 0) {
      tmp.push(out[i - 1]);
      outChars += String.fromCodePoint(parseInt(tmp.reverse().join(""), 2));
      tmp = [];
    } else {
      tmp.push(out[i - 1]);
    }
  }

  if (tmp.length > 0) {
    outChars += String.fromCodePoint(parseInt(tmp.reverse().join("").padStart(8, "0"), 2));
  }
  return outChars;
}

function* getBit(input: string) {
  let chars: string[] = input.split("");
  let bits: string[] = [];
  for (let i = 0; i < chars.length; i++) {
    bits = chars[i].charCodeAt(0).toString(2).padStart(8, "0").split("").reverse();
    for (let j = 0; j < bits.length; j++) {
      yield +bits[j];
    }
  }
  while (true) {
    yield 0;
  }
}
