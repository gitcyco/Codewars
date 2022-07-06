// 5 kyu 5command - Esoteric programming #1
//
// 5command
// 
// 5command is an Esoteric programming language which has 5 commands, Your task is to create an interpreter for a 5command input. 
// The FiveCommands class is provided and a function called read which will be used.
// Commands
// 
// The five possible commands in the 5command language:
// 
// + move the pointer right on the tape
// - move the pointer left on the tape
// ^ increment the value on the tape where the pointer is currently
// v decrement the value on the tape where the pointer is currently
// * print to tape the number at the pointer (without a space);
// 
// Important
// 
// Each time * is called you must add the number at the pointer to the output variable which will then be returned as a number when the program has finished.
// 
// The tape used is unlimited so everytime the pointer is at 0 and the program asks you to minus one from the pointer or go to -1 on the tape just expand the tape at the start.
// Input
// 
// You should expect input only for the read function inside the Interpreter class which will take two parameters: input and debug.
// 
// Input will be a string of possible commands for example: ^*.
// 
// Debug will be a boolean either true or false which will determine if a debug value is returned. If it is false then return an empty array.
// Output
// 
// The output expected for this kata will be an object this object will be predefined in the solution called Output It takes two properties: output and debug. 
// The output must be the result of the input as a string. The debug must then be an array representation of the tape (examples below).
// 
// Output class definition.
// 
// class Output {
//   constructor(out, debug){
//     this.output = out;
//     this.debug = debug;
//   }
// }
// 
// Examples
// Simple Program
// 
// ^*
// 
// Normal Mode should output:
// 
// output: 1
// 
// Debug Mode should output:
// 
// output: '1'
// debug: ['0->1']
//
// Answer:
class FiveCommands {
    constructor() {
      return;
    }
    
    read(code, debug = false){
        let tape = [0];
        let memPtr = 0; 
        let codePtr = 0;
        let out = '';
        let debugArr = [];

        while (codePtr < code.length) {
            switch (code[codePtr]) {
                case '+':
                    memPtr++;
                    if (memPtr > tape.length - 1) tape.push(0);
                    break;
                case '-':
                    memPtr--;
                    if (memPtr < 0) {
                        tape.unshift(0);
                        memPtr = 0;
                    }
                    break;
                case '^':
                    tape[memPtr]++ ;
                    break;
                case 'v':
                    tape[memPtr]-- ;
                    break;
                case '*':
                    out += tape[memPtr];
                    break;
            } // end switch
            codePtr++;
        }
        if(debug) debugArr = tape.map((e,i) => `${i}->${e}`);
        return new Output(out.toString(), debugArr);
    }
}