// 5 kyu Esolang: Stick
//
// Task
// 
// Make a custom esolang interpreter for the language Stick. Stick is a simple, stack-based esoteric programming language with only 7 commands.
// Commands
// 
//     ^: Pop the stack.
// 
//     !: Add new element to stack with the value of 0.
// 
//     +: Increment element. 255+1=0.
// 
//     -: Decrement element. 0-1=255.
// 
//     *: Add ascii value of top element to the output stream.
// 
//     [: Skip past next ] if element value is 0.
// 
//     ]: Jump back to the command after previous [ if element value is nonzero.
// 
// Syntax and other info
// 
//     You don't need to add support for nested brackets.
//     Non-command characters should be ignored.
//     Code will always have all brackets closed.
//     Note the highlighted next and previous in the commands reference.
//     Program begins with the top element having the value of 0 and being the only element in the stack.
//     Program ends when command executor reaches the end.
// 
// Examples
// Hello, World!
// 
// '++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*!+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*!++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*!++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*!+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*!++++++++++++++++++++++++++++++++++++++++++++*!++++++++++++++++++++++++++++++++*!+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*!+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*!++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*!++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*!++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*!+++++++++++++++++++++++++++++++++*!'
// 
// Notes
// 
//     Feel free to comment in the discourse area.
//     Swift versions must throw an error (conforming to the Error Protocol) when abnormal conditions occur.
//     Javascript versions should throw when abnormal conditions occur (like the stack being empty).
// 
// Answer:
function interpreter(code) {
    let memPtr = codePtr = 0;
    const lStack = [];
    const mStack = [0];
    let out = '';

    while (codePtr < code.length) {
        switch (code[codePtr]) {
            case '^':
                mStack.pop();
                memPtr--;
                if (mStack.length < 1) throw new Error('Stack Empty');
                break;
            case '!':
                mStack.push(0);
                memPtr++;
                break;
            case '+':
                mStack[memPtr] = ++mStack[memPtr] % 256;
                break;
            case '-':
                mStack[memPtr] = --mStack[memPtr] < 0 ? 255 : mStack[memPtr];
                break;
            case '*':
                out += (String.fromCharCode(mStack[memPtr]));
                break;
            case '[':
                if (mStack[memPtr] > 0) {
                    lStack.push(codePtr);
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
                codePtr = lStack.pop() - 1;
                break;
        } // end switch
        codePtr++;
    }
    return out;
}