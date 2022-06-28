// 4 kyu Esolang Interpreters #3 - Custom Paintf**k Interpreter
//
// The Task
// 
// Your task is to implement a custom Paintfuck interpreter interpreter()/Interpret which accepts the following arguments in the specified order:
// 
//     code - Required. The Paintfuck code to be executed, passed in as a string. 
//     May contain comments (non-command characters), in which case your interpreter should simply ignore them. 
//     If empty, simply return the initial state of the data grid.
//     iterations - Required. A non-negative integer specifying the number of iterations to be performed before the final state of the data grid is returned. 
//     See notes for definition of 1 iteration. If equal to zero, simply return the initial state of the data grid.
//     width - Required. The width of the data grid in terms of the number of data cells in each row, passed in as a positive integer.
//     height - Required. The height of the data grid in cells (i.e. number of rows) passed in as a positive integer.
// 
// A few things to note:
// 
//     Your interpreter should treat all command characters as case-sensitive so N, E, S and W are not valid command characters
//     Your interpreter should initialize all cells within the data grid to a value of 0 regardless of the width and height of the grid
//     In this implementation, your pointer must always start at the top-left hand corner of the data grid (i.e. first row, first column). 
//     This is important as some implementations have the data pointer starting at the middle of the grid.
//     One iteration is defined as one step in the program, i.e. the number of command characters evaluated. 
//     For example, given a program nessewnnnewwwsswse and an iteration count of 5, your interpreter should evaluate nesse 
//     before returning the final state of the data grid. Non-command characters should not count towards the number of iterations.
//     Regarding iterations, the act of skipping to the matching ] when a [ is encountered (or vice versa) is considered to be one iteration 
//     regardless of the number of command characters in between. The next iteration then commences at the command right after the matching ] (or [).
//     Your interpreter should terminate normally and return the final state of the 2D data grid whenever any of the mentioned 
//     conditions become true: 
//     (1) All commands have been considered left to right, or 
//     (2) Your interpreter has already performed the number of iterations specified in the second argument.
//     The return value of your interpreter should be a representation of the final state of the 2D data grid 
//     where each row is separated from the next by a CRLF (\r\n). For example, if the final state of your datagrid is
// 
// [
//   [1, 0, 0],
//   [0, 1, 0],
//   [0, 0, 1]
// ]
// 
// ... then your return string should be "100\r\n010\r\n001".
//
// Answer:
function interpreter(code, iter, w, h) {
    let codePtr = xPtr = yPtr = numIter = counter = 0;
    const stack = [];
    let skip = false;
    const grid = Array(h).fill(0).map(e => Array(w).fill(0));
    // console.log('code: ', code, 'iter: ', iter, 'HxW: ',h,w, 'Ingrid: ', grid);
    while (true) {
        skip = false;
        if (numIter >= iter) {
            // console.log("numIter >= iter: ", numIter, iter);
            break;
        }
        if (codePtr > code.length) {
            // console.log("codePtr > code.length - 1: ", codePtr, code.length - 1);
            break;
        }
        switch (code[codePtr]) {
            case 'n':
                yPtr = --yPtr < 0 ? h - 1 : yPtr;
                break;
            case 'e':
                xPtr = (xPtr + 1) % w;
                break;
            case 's':
                yPtr = (yPtr + 1) % h;
                break;
            case 'w':
                xPtr = --xPtr < 0 ? w - 1 : xPtr;
                break;
            case '*':
                grid[yPtr][xPtr] = +!grid[yPtr][xPtr];
                break;
            case '[':
                if (grid[yPtr][xPtr] === 1) {
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
                codePtr = stack.pop() - 1;
                numIter--;
                break;
            default:
                skip = true;
        }
        codePtr++;
        if (!skip) numIter++;
    }
    // let out = grid.map(e => e.join('')).join('\r\n');
    // console.log("Outgrid:\n", grid, '\nout:\n',out);
    return grid.map(e => e.join('')).join('\r\n');
}