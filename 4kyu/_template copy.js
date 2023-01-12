// DESCRIPTION
//
//
// Answer:

// Saving here until I get back to it, need to fix the looping
function interpret(input) {
  const stack = [];
  let code = input.split("\n");
  let maxX = code.reduce((a, e) => (e.length > a ? e.length : a), 0);
  let maxY = code.length;
  console.log(code);
  let dir = ">";
  let curX = 0;
  let curY = 0;
  let mode = 0; // 0 == normal code, 1 == string mode
  let a, b, x, y, v;
  let output = "";
  code = code.map((e) => e.padEnd(maxX, " ")).map((e) => e.split(""));

  // Reset maxX and maxY to 0 based indexing
  maxX--;
  maxY--;
  console.log(code, maxX, maxY);

  while (code[curY][curX] !== "@") {
    //     console.log(stack, dir, curX, curY, maxX, maxY, output, "CODE:", code[curY][curX]);
    // Are we in string mode? If so, start pushing chars to stack until next "
    if (mode) {
      if (code[curY][curX] === '"') {
        mode = 0;
      } else {
        stack.push(String(code[curY][curX]).charCodeAt(0));
      }
      // Is the instruction a number from 0-9?
    } else if (/[0-9]/gi.test(code[curY][curX])) {
      //     } else if(code[curY][curX] !== ' ' && !isNaN(code[curY][curX]) && +code[curY][curX] >= 0 && +code[curY][curX] <= 9) {
      //     } else if(!isNaN(code[curY][curX]) && +code[curY][curX] >= 0 && +code[curY][curX] <= 9) {
      stack.push(+code[curY][curX]);
    } else {
      switch (code[curY][curX]) {
        case '"':
          mode = 1;
          break;
        case " ":
          break;
        case ">":
          dir = ">";
          break;
        case "v":
          dir = "v";
          break;
        case "<":
          dir = "<";
          break;
        case "^":
          dir = "^";
          break;
        case "?":
          dir = ranDir();
          break;
        case "+":
          a = +stack.pop();
          b = +stack.pop();
          stack.push(a + b);
          break;
        case "-":
          a = +stack.pop();
          b = +stack.pop();
          stack.push(b - a);
          break;
        case "*":
          a = +stack.pop();
          b = +stack.pop();
          stack.push(a * b);
          break;
        case "/":
          a = +stack.pop();
          b = +stack.pop();
          if (a == 0) stack.push(0);
          else Math.floor(stack.push(b / a));
          break;
        case "%":
          a = +stack.pop();
          b = +stack.pop();
          if (a == 0) stack.push(0);
          else stack.push(b % a);
          break;
        case "!":
          a = stack.pop();
          if (a === 0) stack.push(1);
          else stack.push(0);
          break;
        case "`":
          a = stack.pop();
          b = stack.pop();
          stack.push(b > a ? 1 : 0);
          break;
        case "_":
          console.log("choose", stack);
          a = stack.pop();
          if (a == 0) {
            dir = ">";
          } else {
            dir = "<";
          }
          break;
        case "|":
          a = +stack.pop();
          if (a === 0) {
            dir = "v";
          } else {
            dir = "^";
          }
          break;
        case ":":
          //           console.log("DUPE:")
          if (stack.length === 0) stack.push(0);
          else stack.push(stack[stack.length - 1]);
          break;
        case "\\":
          console.log("wackwack", stack);
          if (stack.length === 1) {
            stack.push(0);
          } else {
            a = stack.pop();
            b = stack.pop();
            stack.push(b);
            stack.push(a);
          }
          break;
        case "$":
          stack.pop();
          break;
        case ".":
          if (stack.length > 0) {
            a = +stack.pop();
            console.log("OUTPUT:", a);
            output += a.toString();
          }
          break;
        case ",":
          a = +stack.pop();
          output += String.fromCharCode(a);
          break;
        case "#":
          [curX, curY] = move(curX, curY, dir, maxX, maxY);
          break;
        case "p":
          y = +stack.pop();
          x = +stack.pop();
          v = +stack.pop();
          code[y][x] = String.fromCharCode(v);
          break;
        case "g":
          y = +stack.pop();
          x = +stack.pop();
          stack.push(code[y][x].charCodeAt(0));
          break;
      }
    }

    [curX, curY] = move(curX, curY, dir, maxX, maxY);
  }
  return output;
}

// Get a random direction
const ranDir = () => [">", "<", "^", "v"][Math.floor(Math.random() * 4)];
const move = (curX, curY, dir, maxX, maxY) => {
  switch (dir) {
    case ">":
      curX = curX === maxX ? 0 : curX + 1;
      break;
    case "v":
      curY = curY === maxY ? 0 : curY + 1;
      break;
    case "<":
      curX = curX === 0 ? maxX : curX - 1;
      break;
    case "^":
      curY = curY === 0 ? maxY : curY - 1;
      break;
  }
  return [curX, curY];
};
