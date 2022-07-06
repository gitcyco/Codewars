// 4 kyu ABC - Esoteric programming #2
//
// ABC
// 
// ABC is an esoteric programming language. It works by applying operations to an integer variable called accumulator.
// 
// Your task is to create an interpreter for ABC.
// 
// You have to write the method read(input) of the class Interpreter. This method takes for parameter the source 
// code of an ABC program as a string and returns an instance of the Output class, which has beeen preloaded for you :
// 
// class Output {
//   constructor(out, debug){
//     this.output = out;
//     this.debug = debug;
//   }
// }
// 
// The output field is a string written to by the c command.
// The debug field is an array of strings written to by the ; command.
// ABC Commands list
// 
// The 9 commands of the ABC language:
// 
//     a - Increment the accumulator
//     b - decrement the accumulator
//     c - Output the accumulator
//     d - Invert the sign of the accumulator
//     r - Set accumulator to a random number between 0 and accumulator (both inclusive)
//     n - Set accumulator to 0
//     $ - Toggle ASCII output mode. When on, the c instruction prints the accumulator as an ASCII character.
//     l - Loop back to the beginning of the program. Accumulator and ASCII mode do not reset.
//     ; - Debug. Push the accumulator and its corresponding ASCII character to the debug array.
//     Any other character has no effect (no-op)
// 
// Details
// 
//     The accumulator has an initial value of 0
//     Each time ; is called, push the following string format to the debug array : `${accumulator}->${ASCII}`
//     In order to make loops more useful, this kata differs from the original implementation 
//     regarding the behavior of the l command : each time you reach a l, you must erase it from the input and return to the start of the source code.
// 
// Example
// 
// Simple Program :
// 
// const interpreter = new Interpreter();
// interpreter.read('aaaaac').output;
// --> '5'
// 
// interpreter.read('aaaaac;').output;
// --> '5'
// interpreter.read('aaaaac;').debug;
// --> ["5->\u0005"]
//
// Answer:
class Interpreter {
    constructor() {
      return;
    }
    
    read(code){
        let acc = 0;
        let codePtr = 0;
        let out = '';
        let debugArr = [];
        let ascii = false;

        while (codePtr < code.length) {
            switch (code[codePtr]) {
                case 'a':
                    acc++ ;
                    break;
                case 'b':
                    acc-- ;
                    break;
                case 'c':
                    if(ascii) out += String.fromCharCode(acc);
                    else out += acc;
                    break;
                case 'd':
                    acc = -(acc);
                    break;
                case 'r':
                    acc = Math.floor(Math.random() * (acc + 1));
                    break;
                case 'n':
                    acc = 0;
                    break;
                case '$':
                    ascii = !ascii;
                    break;
                case 'l':
                    code = code.slice(0,codePtr) + code.slice(codePtr+1);
                    codePtr = 0;
                    continue;
                case ';':
                    debugArr.push(`${acc}->${String.fromCharCode(acc)}`);
                    break;
            } // end switch
            codePtr++;
        }
        return new Output(out.toString(), debugArr);
    }
}