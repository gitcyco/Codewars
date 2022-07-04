// 6 kyu Esolang: Tick
//
// Task
// 
// Make a custom esolang interpreter for the language Tick. Tick is a descendant of Ticker but also very different data and command-wise.
// Syntax/Info
// 
// Commands are given in character format. Non-command characters should be ignored. 
// Tick has an potentially infinite memory as opposed to Ticker(which you have a special command to add a new cell) and only has 4 commands(as opposed to 7). 
// Read about this esolang here.
// Commands
// 
// >: Move data selector right
// 
// <: Move data selector left(infinite in both directions)
// 
// +: Increment memory cell by 1. 255+1=0
// 
// *: Add ascii value of memory cell to the output tape.
// Examples
// 
// Hello world!
// 
// '++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*>+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*>++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++**>+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*>++++++++++++++++++++++++++++++++*>+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*<<*>>>++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*<<<<*>>>>>++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*>+++++++++++++++++++++++++++++++++*'
//
// Answer:
function interpreter(code) {
    let tape = Array(2048).fill(0);
    let memPtr = tape.length / 2;
    let codePtr = 0;
    let out = '';

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
                tape[memPtr] = ++tape[memPtr] % 256;;
                break;
            case '*':
                out += String.fromCharCode(tape[memPtr]);
                break;
        } // end switch
        codePtr++;
    }

    return out;
}