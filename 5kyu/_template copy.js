// DESCRIPTION
//
//
// Answer:
const Interpreter = function() {
    //   const a = [0];
    //   const b = [0];
    //   const c = [0];
      const stacks = [[0],[0],[0]];
      let sIdx = 0;
      let sPtr = stacks[sIdx];
      
      return {
        read:function(code){
          let out = '';
          let codePtr = 0;
          console.log(sPtr[0]++, stacks, sPtr);
        }
      };
}


/////////////
/////////////
// reference:
function brainLuck(code, input = "") {
    let tape = Array(256).fill(0);
    let memPtr = 0;
    let codePtr = 0;
    let inGen = getData(input);
    const stack = [];
    let out = [];
    let outChars = "";

    while (codePtr < code.length) {
        switch (code[codePtr]) {
            case '>':
                memPtr++;
                if (memPtr > tape.length - 1) tape.push(0);
                break;
            case '<':
                memPtr--;
                if (memPtr < 0) {
                    tape.unshift(0);
                    memPtr = 0;
                }
                break;
            case '+':
                tape[memPtr] = (tape[memPtr] + 1) % 256;
                break;
            case '-':
                tape[memPtr] = tape[memPtr] - 1 < 0 ? 255 : --tape[memPtr];
                break;
            case ',':
                tape[memPtr] = inGen.next().value;
                break;
            case '.':
                out.push(tape[memPtr]);
                break;
            case '[':
                if (tape[memPtr] > 0) {
                    stack.push(codePtr);
                } else {
                    let counter = 0;
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
            case ']':
                if (tape[memPtr] > 0) {
                    codePtr = stack.pop() - 1;
                } else stack.pop();
                break;
        } // end switch
        codePtr++;
    }
    outChars = out.map(e => String.fromCharCode(e));
    return outChars.join('');
}


function* getData(input) {
    let chars = input.split('').map(e => e.charCodeAt(0));
    for (let i = 0; i < chars.length; i++) yield chars[i];
    while (true) yield 0;
}