// 5 kyu Esolang Interpreters #2 - Custom Smallfuck Interpreter
//
// The Task
// 
// Implement a custom Smallfuck interpreter interpreter() (interpreter in Haskell and F#, Interpreter in C#, custom_small_fuck:interpreter/2 in Erlang) 
// which accepts the following arguments:
// 
//     code - Required. The Smallfuck program to be executed, passed in as a string. May contain non-command characters. 
//            Your interpreter should simply ignore any non-command characters.
//     tape - Required. The initial state of the data storage (tape), passed in as a string. 
//            For example, if the string "00101100" is passed in then it should translate to something of this form within 
//            your interpreter: [0, 0, 1, 0, 1, 1, 0, 0]. You may assume that all input strings for tape will be non-empty and will only contain "0"s and "1"s.
// 
// Your interpreter should return the final state of the data storage (tape) as a string in the same format that it was passed in. 
// For example, if the tape in your interpreter ends up being [1, 1, 1, 1, 1] then return the string "11111".
// 
// NOTE: The pointer of the interpreter always starts from the first (leftmost) cell of the tape, same as in Brainfuck.
//
// Answer:
export function interpreter(code: string, tape: string): string {
    let codePtr: number = 0;
    let memPtr: number = 0;
    const stack: number[] = [];
    const memory: number[] = [...tape].map(Number);
    code = code.replace(/[^\[\]\*\<\>]/g, '');

    while (!(memPtr < 0 || memPtr > tape.length - 1 || codePtr > code.length - 1)) {
        switch (code[codePtr]) {
            case '>':
                memPtr++;
                break;
            case '<':
                memPtr--;
                break;
            case '*':
                memory[memPtr] = +!memory[memPtr];
                break;
            case '[':
                if (memory[memPtr] === 1) {
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
            case ']':
                if(stack.length >= 0) {
                  
                }
                let tmp: any = stack.pop();
                if(tmp !== undefined) codePtr = tmp - 1;
                break;
        }
        codePtr++;
    }
    return memory.join('');
}