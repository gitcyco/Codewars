// 3 kyu RoboScript #4 - RS3 Patterns to the Rescue
//
// Disclaimer
//
// The story presented in this Kata Series is purely fictional; any resemblance to actual programming
// languages, products, organisations or people should be treated as purely coincidental.
//
// About this Kata Series
//
// This Kata Series is based on a fictional story about a computer scientist and engineer who owns a firm that sells
// a toy robot called MyRobot which can interpret its own (esoteric) programming language called RoboScript.
// Naturally, this Kata Series deals with the software side of things (I'm afraid Codewars cannot test your ability to build a physical robot!).
// Story
//
// Ever since you released RS2 to the market, there have been much fewer complaints from RoboScript developers
// about the inefficiency of the language and the popularity of your programming language has continuously soared.
// It has even gained so much attention that Zachary Mikowski, the CEO of the world-famous Doodle search engine, has contacted
// you to try out your product! Initially, when you explain the RoboScript (RS2) syntax to him, he looks
// satisfied, but then he soon finds a major loophole in the efficiency of the RS2 language and brings forth the following program:
//
// (F2LF2R)2FRF4L(F2LF2R)2(FRFL)4(F2LF2R)2
//
// As you can see from the program above, the movement sequence (F2LF2R)2 has to be rewritten every time and no amount
// of RS2 syntax can simplify it because the movement sequences in between are different each time (FRF4L and (FRFL)4).
// If only RoboScript had a movement sequence reuse feature that makes writing programs like these less repetitive ...
// Task
//
// Define and implement the RS3 specification whose syntax is a superset of RS2 (and RS1) syntax.
// Your interpreter should be named execute() and accept exactly 1 argument code, the RoboScript code to be executed.
//
// Patterns - The New Feature
//
// To solve the problem outlined in the Story above, you have decided to introduce a new syntax feature to RS3 called the "pattern".
// The "pattern" as defined in RS3 behaves rather like a primitive version of functions/methods
// in other programming languages - it allows the programmer to define and name (to a certain extent) a certain sequence
// of movements which can be easily referenced and reused later instead of rewriting the whole thing.
//
// The basic syntax for defining a pattern is as follows:
//
// p(n)<CODE_HERE>q
//
// Where:
//
//     p is a "keyword" that declares the beginning of a pattern definition (much like the function keyword in JavaScript or the def keyword in Python)
//     (n) is any non-negative integer (without the round brackets) which acts as a unique identifier for the pattern (much like a function/method name)
//     <CODE_HERE> is any valid RoboScript code (without the angled brackets)
//     q is a "keyword" that marks the end of a pattern definition (like the end keyword in Ruby)
//
// For example, if I want to define (F2LF2R)2 as a pattern and reuse it later in my code:
//
// p0(F2LF2R)2q
//
// It can also be rewritten as below since (n) only serves as an identifier and its value doesn't matter:
//
// p312(F2LF2R)2q
//
// Like function/method definitions in other languages, merely defining a pattern (or patterns) in RS3 should cause no side effects, so:
//
// execute("p0(F2LF2R)2q");   # => '*'
// execute("p312(F2LF2R)2q"); # => '*'
//
// To invoke a pattern (i.e. make the MyRobot move according to the movement sequences defined inside the pattern), a capital P followed by the pattern identifier (n) is used:
//
// P0
//
// (or P312, depending on which example you are using)
//
// So:
//
// execute("p0(F2LF2R)2qP0");     # => "    *\r\n    *\r\n  ***\r\n  *  \r\n***  "
// execute("p312(F2LF2R)2qP312"); # => "    *\r\n    *\r\n  ***\r\n  *  \r\n***  "
//
// Additional Rules for parsing RS3
//
// It doesn't matter whether the invocation of the pattern or the pattern definition comes first - pattern definitions should always be parsed first, so:
//
// execute("P0p0(F2LF2R)2q");     # => "    *\r\n    *\r\n  ***\r\n  *  \r\n***  "
// execute("P312p312(F2LF2R)2q"); # => "    *\r\n    *\r\n  ***\r\n  *  \r\n***  "
//
// Of course, RoboScript code can occur anywhere before and/or after a pattern definition/invocation, so:
//
// execute("F3P0Lp0(F2LF2R)2qF2"); # => "       *\r\n       *\r\n       *\r\n       *\r\n     ***\r\n     *  \r\n******  "
//
// Much like a function/definition can be invoked multiple times in other languages, a pattern should also be able to be invoked multiple times in RS3. So:
//
// execute("(P0)2p0F2LF2RqP0"); # => "      *\r\n      *\r\n    ***\r\n    *  \r\n  ***  \r\n  *    \r\n***    "
//
// If a pattern is invoked which does not exist, your interpreter should throw/raise
// an exception (depending on the language you are attempting this Kata in) of any kind.
// This could be anything and will not be tested, but ideally it should provide a useful message which describes the error in detail.
//
// execute("p0(F2LF2R)2qP1");   # throws
// execute("P0p312(F2LF2R)2q"); # throws
// execute("P312");             # throws
//
// Much like any good programming language will allow you to define an unlimited number of functions/methods, your RS3 interpreter
// should also allow the user to define a virtually unlimited number of patterns.
// A pattern definition should be able to invoke other patterns if required.
// If the same pattern (i.e. both containing the same identifier (n)) is defined more than once, your interpreter should
// throw/raise an exception (depending on the language you are attempting this Kata in) of any kind.
//
// execute("P1P2p1F2Lqp2F2RqP2P1");                      # => "  ***\r\n  * *\r\n*** *"
// execute("p1F2Lqp2F2Rqp3P1(P2)2P1q(P3)3");             # => "  *** *** ***\r\n  * * * * * *\r\n*** *** *** *"
// execute("p1F2Lqp1(F3LF4R)5qp2F2Rqp3P1(P2)2P1q(P3)3"); # throws exception
//
// Furthermore, your interpreter should be able to detect (potentially) infinite recursion, including mutual recursion.
// Instead of just getting stuck in an infinite loop and timing out, your interpreter should throw/raise
// an exception (depending on the language you are attempting this Kata in) of any kind when
// the "stack" (or just the total number of pattern invocations) exceeds a particular
// very high (but sensible) threshold, but only if said pattern with infinite recursion is invoked at least once.
//
// execute("p1F2RP1F2LqP1");      # throws
// execute("p1F2LP2qp2F2RP1qP1"); # throws
// execute("p1F2RP1F2Lq");        # does not throw
//
// For the sake of simplicity, you may assume that all programs passed into your interpreter contains valid syntax.
// Furthermore, nesting pattern definitions is not allowed either (it is considered a syntax error) so your interpreter will not need to account for these.
//
// Answer:
function execute(code) {
  try {
    if (code.length === 0) return "*";
    let curDir = 0;
    let path = [[0, 0]];
    const globalScope = {};
    const tokens = tokenize("(" + code + ")");
    const parsed = parseCode(tokens.reverse(), globalScope);
    evaluate(parsed, path, curDir, globalScope);

    // Construct the string output from the path array
    const [maxX, maxY, minX, minY] = getMax(path);
    const [xLen, yLen] = [
      Math.abs(maxX) + Math.abs(minX) + 1,
      Math.abs(maxY) + Math.abs(minY) + 1,
    ];
    path = path.map((e) => [e[0] + Math.abs(minX), e[1] + Math.abs(minY)]);
    const mapped = new Array(yLen)
      .fill(0)
      .map((e) => new Array(xLen).fill(" "));
    for (let [x, y] of path) mapped[y][x] = "*";
    return mapped.map((e) => e.join("")).join("\r\n");
  } catch (error) {
    //     console.log("ERROR:", error);
    throw new Error(error);
  }
}

// Evaluate the AST, processing expressions, nested expressions, and commands
function evaluate(ast, path, curDir, globalScope) {
  const dirs = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  if (ast.type === "expression") {
    for (let i = 0; i < ast.count; i++) {
      curDir = evaluate(ast.code, path, curDir, globalScope);
    }
  } else if (Array.isArray(ast)) {
    for (const item of ast) {
      if (item.type === "expression") {
        curDir = evaluate(item, path, curDir, globalScope);
      } else if (item.type === "functionCall") {
        if (!globalScope[item.call])
          throw new TypeError(`${item.call} is not defined`);
        globalScope[item.call].invoked++;
        if (globalScope[item.call].invoked > 255)
          throw new Error("Infinite recursion detected");
        curDir = evaluate(
          globalScope[item.call].code,
          path,
          curDir,
          globalScope
        );
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

    if (isFuncDef(char)) {
      tokens.push({ type: "funcDef", value: char });
      cursor++;
      continue;
    }
    if (isFuncCall(char)) {
      tokens.push({ type: "funcCall", value: char });
      cursor++;
      continue;
    }
    if (isParen(char)) {
      tokens.push({ type: "paren", value: char });
      cursor++;
      continue;
    }
    if (isCmd(char)) {
      tokens.push({ type: "cmd", value: char });
      cursor++;
      continue;
    }
    if (isNum(char)) {
      let num = char;
      while (isNum(code[++cursor])) {
        num += code[cursor];
      }
      tokens.push({ type: "num", value: +num });
      continue;
    }
    cursor++;
  }
  return tokens;
};

// Convert the array of tokens into a simple AST consisting of
// expressions and commands. Each expression and command is repeated
// 'count' times.
const parseCode = (tokens, globalScope) => {
  const token = pop(tokens);
  if (isFuncDefBeg(token.value)) {
    const obj = { type: "functionDef" };
    const exp = [];
    if (tokens.length && isNum(peek(tokens).value)) {
      obj.ident = "P" + pop(tokens).value;
    } else throw new TypeError("Invalid function definition");
    while (!isFuncDefEnd(peek(tokens).value)) {
      exp.push(parseCode(tokens, globalScope));
    }
    pop(tokens);
    obj.code = exp;
    obj.invoked = 0;
    if (globalScope[obj.ident])
      throw new TypeError(`${obj.ident} is already defined`);
    globalScope[obj.ident] = obj;
    return "";
    //     return obj;
  }
  if (isFuncCall(token.value)) {
    const obj = { type: "functionCall" };
    if (tokens.length && isNum(peek(tokens).value)) {
      const func = "P" + pop(tokens).value;
      obj.count = 1;
      obj.call = func;
      //       obj.code = globalScope[func].code;
    } else throw new TypeError("Invalid function call syntax");
    return obj;
  }
  if (isOpenParen(token.value)) {
    const obj = { type: "expression" };
    const exp = [];
    while (!isCloseParen(peek(tokens).value)) {
      const output = parseCode(tokens, globalScope);
      if (output) exp.push(output);
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
const isFuncDef = (c) => /p|q/g.test(c);
const isFuncCall = (c) => /P/g.test(c);
const isFuncDefBeg = (c) => /p/g.test(c);
const isFuncDefEnd = (c) => /q/g.test(c);
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
