// 4 kyu RoboScript #3 - Implement the RS2 Specification
//
// RoboScript #3 - Implement the RS2 Specification
// Disclaimer
//
// The story presented in this Kata Series is purely fictional; any resemblance to actual programming
// languages, products, organisations or people should be treated as purely coincidental.
// About this Kata Series
//
// This Kata Series is based on a fictional story about a computer scientist and engineer who owns
// a firm that sells a toy robot called MyRobot which can interpret its own (esoteric) programming language called RoboScript.
// Naturally, this Kata Series deals with the software side of things (I'm afraid Codewars cannot test your ability to build a physical robot!).
// Story
//
// Last time, you implemented the RS1 specification which allowed your customers to write more concise scripts
// for their robots by allowing them to simplify consecutive repeated commands by postfixing a non-negative integer onto the selected command.
// For example, if your customers wanted to make their robot move 20 steps to the right, instead
// of typing FFFFFFFFFFFFFFFFFFFF, they could simply type F20 which made their scripts more concise.
// However, you later realised that this simplification wasn't enough.
// What if a set of commands/moves were to be repeated? The code would still appear cumbersome.
// Take the program that makes the robot move in a snake-like manner, for example.
// The shortened code for it was F4LF4RF4RF4LF4LF4RF4RF4LF4LF4RF4RF4 which still contained a lot of repeated commands.
// Task
//
// Your task is to allow your customers to further shorten their scripts and make them even more concise
// by implementing the newest specification of RoboScript (at the time of writing) that is RS2.
// RS2 syntax is a superset of RS1 syntax which means that all valid RS1 code from the previous
// Kata of this Series should still work with your RS2 interpreter.
// The only main addition in RS2 is that the customer should be able to group certain sets of commands using round brackets.
// For example, the last example used in the previous Kata in this Series:
//
// LF5RF3RF3RF7
//
// ... can be expressed in RS2 as:
//
// LF5(RF3)(RF3R)F7
//
// Or ...
//
// (L(F5(RF3))(((R(F3R)F7))))
//
// Simply put, your interpreter should be able to deal with nested brackets of any level.
//
// And of course, brackets are useless if you cannot use them to repeat a sequence of movements!
// Similar to how individual commands can be postfixed by a non-negative integer to specify how many times
// to repeat that command, a sequence of commands grouped by round brackets () should also be repeated n times
// provided a non-negative integer is postfixed onto the brackets, like such:
//
// (SEQUENCE_OF_COMMANDS)n
//
// ... is equivalent to ...
//
// SEQUENCE_OF_COMMANDS...SEQUENCE_OF_COMMANDS (repeatedly executed "n" times)
//
// For example, this RS1 program:
//
// F4LF4RF4RF4LF4LF4RF4RF4LF4LF4RF4RF4
//
// ... can be rewritten in RS2 as:
//
// F4L(F4RF4RF4LF4L)2F4RF4RF4
//
// Or:
//
// F4L((F4R)2(F4L)2)2(F4R)2F4

// Answer:
function execute(code) {
  if (code.length === 0) return "*";
  let curDir = 0;
  let path = [[0, 0]];
  const tokens = tokenize("(" + code + ")");
  const parsed = parenthesize(tokens.reverse());
  evaluate(parsed, path, curDir);

  // Construct the string output from the path array
  const [maxX, maxY, minX, minY] = getMax(path);
  const [xLen, yLen] = [
    Math.abs(maxX) + Math.abs(minX) + 1,
    Math.abs(maxY) + Math.abs(minY) + 1,
  ];
  path = path.map((e) => [e[0] + Math.abs(minX), e[1] + Math.abs(minY)]);
  const mapped = new Array(yLen).fill(0).map((e) => new Array(xLen).fill(" "));
  for (let [x, y] of path) mapped[y][x] = "*";
  return mapped.map((e) => e.join("")).join("\r\n");
}

// Evaluate the AST, processing expressions, nested expressions, and commands
function evaluate(ast, path, curDir) {
  const dirs = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  if (ast.type === "expression") {
    for (let i = 0; i < ast.count; i++) {
      curDir = evaluate(ast.code, path, curDir);
    }
  } else if (Array.isArray(ast)) {
    for (const item of ast) {
      if (item.type === "expression") {
        curDir = evaluate(item, path, curDir);
      } else {
        const move = item.value;
        const num = item.count;
        const [xD, yD] = dirs[curDir];
        let [cX, cY] = path[path.length - 1];
        if (move === "F") {
          for (let i = 0; i < num; i++) {
            cX += xD;
            cY += yD;
            path.push([cX, cY]);
          }
        }
        if (move === "R") curDir = chDir(curDir + (num % 4));
        if (move === "L") curDir = chDir(curDir - num);
      }
    }
  }
  return curDir;
}

// Turn the raw text into an array of tokens of types: paren, cmd, num
const tokenize = (code) => {
  const tokens = [];
  let cursor = 0;
  while (cursor < code.length) {
    const char = code[cursor];

    if (isParen(char)) {
      tokens.push({
        type: "paren",
        value: char,
      });
      cursor++;
      continue;
    }
    if (isCmd(char)) {
      tokens.push({
        type: "cmd",
        value: char,
      });
      cursor++;
      continue;
    }
    if (isNum(char)) {
      let num = char;
      while (isNum(code[++cursor])) {
        num += code[cursor];
      }
      tokens.push({
        type: "num",
        value: +num,
      });
      continue;
    }
    cursor++;
  }
  return tokens;
};

// Convert the array of tokens into a simple AST consisting of
// expressions and commands. Each expression and command is repeated
// 'count' times.
const parenthesize = (tokens) => {
  const token = pop(tokens);
  if (isOpenParen(token.value)) {
    const obj = { type: "expression" };
    const exp = [];
    while (!isCloseParen(peek(tokens).value)) {
      exp.push(parenthesize(tokens));
    }
    pop(tokens);
    if (tokens.length && isNum(peek(tokens).value)) {
      obj.count = pop(tokens).value;
    } else obj.count = 1;
    obj.code = exp;
    return obj;
  }
  if (tokens.length && isNum(peek(tokens).value)) {
    token.count = pop(tokens).value;
  } else token.count = 1;
  return token;
};

// Helper functions
const isParen = (c) => /\(|\)/g.test(c);
const isOpenParen = (c) => /\(/g.test(c);
const isCloseParen = (c) => /\)/g.test(c);
const isCmd = (c) => /F|R|L/gi.test(c);
const isNum = (c) => /[\d]/g.test(c);
const peek = (array) => array[array.length - 1];
const pop = (array) => array.pop();
const chDir = (n) => ((n % 4) + 4) % 4;
const getMax = (a) => {
  let [maxX, maxY, minX, minY] = [-Infinity, -Infinity, Infinity, Infinity];
  for (const [x, y] of a) {
    maxX = Math.max(maxX, x);
    minX = Math.min(minX, x);
    maxY = Math.max(maxY, y);
    minY = Math.min(minY, y);
  }
  return [maxX, maxY, minX, minY];
};
