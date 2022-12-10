// 2 kyu Assembler interpreter (part II)
//
// This is the second part of this kata series. First part is here.
//
// We want to create an interpreter of assembler which will support the following instructions:
//
//     mov x, y - copy y (either an integer or the value of a register) into register x.
//     inc x - increase the content of register x by one.
//     dec x - decrease the content of register x by one.
//     add x, y - add the content of the register x with y (either an integer or the value of a register) and stores the result in x (i.e. register[x] += y).
//     sub x, y - subtract y (either an integer or the value of a register) from the register x and stores the result in x (i.e. register[x] -= y).
//     mul x, y - same with multiply (i.e. register[x] *= y).
//     div x, y - same with integer division (i.e. register[x] /= y).
//     label: - define a label position (label = identifier + ":", an identifier being a string that does not match any other command).
//              Jump commands and call are aimed to these labels positions in the program.
//     jmp lbl - jumps to the label lbl.
//     cmp x, y - compares x (either an integer or the value of a register) and y (either an integer or the value of a register).
//                The result is used in the conditional jumps (jne, je, jge, jg, jle and jl)
//     jne lbl - jump to the label lbl if the values of the previous cmp command were not equal.
//     je lbl - jump to the label lbl if the values of the previous cmp command were equal.
//     jge lbl - jump to the label lbl if x was greater or equal than y in the previous cmp command.
//     jg lbl - jump to the label lbl if x was greater than y in the previous cmp command.
//     jle lbl - jump to the label lbl if x was less or equal than y in the previous cmp command.
//     jl lbl - jump to the label lbl if x was less than y in the previous cmp command.
//     call lbl - call to the subroutine identified by lbl. When a ret is found in a subroutine, the instruction pointer
//                should return to the instruction next to this call command.
//     ret - when a ret is found in a subroutine, the instruction pointer should return to the instruction that called the current function.
//     msg 'Register: ', x - this instruction stores the output of the program.
//                           It may contain text strings (delimited by single quotes) and registers.
//                           The number of arguments isn't limited and will vary, depending on the program.
//     end - this instruction indicates that the program ends correctly, so the stored output is returned
//           (if the program terminates without this instruction it should return the default output: see below).
//     ; comment - comments should not be taken in consideration during the execution of the program.
//
//
// Output format:
//
// The normal output format is a string (returned with the end command). For Scala and Rust programming languages it should be incapsulated into Option.
//
// If the program does finish itself without using an end instruction, the default return value is:
//
// -1 (as an integer)
//
//
// Input format:
//
// The function/method will take as input a multiline string of instructions, delimited with EOL characters.
// Please, note that the instructions may also have indentation for readability purposes.
//
// For example:
//
// program = """
// ; My first program
// mov  a, 5
// inc  a
// call function
// msg  '(5+1)/2 = ', a    ; output message
// end
//
// function:
//     div  a, 2
//     ret
// """
// assembler_interpreter(program)
//
// The above code would set register a to 5, increase its value by 1, calls the subroutine function,
// divide its value by 2, returns to the first call instruction, prepares the output of the program and then
// returns it with the end instruction. In this case, the output would be (5+1)/2 = 3.
//
// Answer:
function assemblerInterpreter(prg) {
  const reg = {};
  const stack = [];
  let ptr = 0;
  let out = "";
  const cmdKey = [
    "mov",
    "inc",
    "dec",
    "add",
    "sub",
    "mul",
    "div",
    "jmp",
    "cmp",
    "jne",
    "je",
    "jge",
    "jg",
    "jle",
    "jl",
    "call",
    "ret",
    "msg",
    "end",
  ];

  const [code, fns] = parseInput(prg, cmdKey);
  let arg;
  let comp;

  // Main program loop:
  while (ptr < code.length) {
    let curIns = code[ptr][0];
    if (curIns !== "label" && curIns !== "msg") {
      arg = code[ptr][1].split(",");
      arg = arg.map((e) => e.trim());
    } else arg = code[ptr][1];

    switch (curIns) {
      case "label":
        break;
      case "mov":
        reg[arg[0]] = +get(arg[1], reg);
        break;
      case "inc":
        reg[arg[0]]++;
        break;
      case "dec":
        reg[arg[0]]--;
        break;
      case "add":
        reg[arg[0]] += +get(arg[1], reg);
        break;
      case "sub":
        reg[arg[0]] -= +get(arg[1], reg);
        break;
      case "mul":
        reg[arg[0]] *= +get(arg[1], reg);
        break;
      case "div":
        reg[arg[0]] = Math.floor(reg[arg[0]] / +get(arg[1], reg));
        break;
      case "cmp":
        comp = [+get(arg[0], reg), +get(arg[1], reg)];
        break;

      // Jumps
      case "jmp":
        ptr = fns[arg[0]];
        break;
      case "jne":
        if (comp[0] !== comp[1]) ptr = fns[arg[0]];
        break;
      case "je":
        if (comp[0] === comp[1]) ptr = fns[arg[0]];
        break;
      case "jge":
        if (comp[0] >= comp[1]) ptr = fns[arg[0]];
        break;
      case "jg":
        if (comp[0] > comp[1]) ptr = fns[arg[0]];
        break;
      case "jle":
        if (comp[0] <= comp[1]) ptr = fns[arg[0]];
        break;
      case "jl":
        if (comp[0] < comp[1]) ptr = fns[arg[0]];
        break;
      case "call":
        let lab = fns[arg[0]];
        stack.push(ptr);
        ptr = fns[arg[0]];
        break;
      case "ret":
        ptr = stack.pop();
        break;

      // msg and end
      case "msg":
        arg.forEach((e) => {
          console.log("arg in msg:", e);
          if (e.trim() in reg) out += +get(e, reg);
          else out += e;
        });
        break;
      case "end":
        return out;
        break;
    }
    if (++ptr > code.length - 1) break;
  }
  return -1;
}

function parseInput(inp, key) {
  let code = inp.split("\n");

  // strip out comments:
  code = code
    .map((e) => {
      if (e.includes(";")) {
        return e.slice(0, e.indexOf(";")).trim();
      } else return e.trim();
    })
    .filter((e) => e.length > 0);

  // process labels and get their indices:
  const fns = code.reduce((a, e, i) => {
    if (e.includes(":")) {
      if (e[e.length - 1] === ":" && !key.includes(e.slice(0, e.indexOf(":")))) {
        // definitely a label:
        a[e.slice(0, e.indexOf(":"))] = i;
      }
    }
    return a;
  }, {});

  // break each line into [cmd, args]
  code = code.map((e) => {
    // is it a command, or a label?
    if (key.some((v) => e.toLowerCase().startsWith(v))) {
      let cmd = e.split(" ")[0];
      if (cmd.trim() === "msg") {
        // the ugly regex match is to not split the arguments on any commas embedded in single quotes
        // otherwise, split on commas
        let arr = e
          .replace(`${cmd}`, "")
          .trimLeft()
          .match(/('.*?'|[^',\s]+)(?=\s*,|\s*$)/g);
        arr = arr.map((e) => (e = e.includes("'") ? e.trim().replace(/\'/g, "") : e.trim()));
        return [cmd, arr];
      }
      return [cmd, e.replace(`${cmd}`, "").trimLeft()];
    } else return ["label", e.trim()];
  });

  return [code, fns];
}

const get = (a, r) => (isNaN(a) ? +r[a] : +a);
