// 4 kyu The Stack Arithmetic Machine
//
// This time we're going to be writing a stack arithmetic machine, and we're going to call it Sam.
// Essentially, Sam is a very small virtual machine, with a simple intruction set, four general registers, and a stack.
// We've already given a CPU class, which gives you read and write access to registers and the stack,
// through readReg() and writeReg(), and popStack() and writeStack() respectively.
// All instructions on Sam are 32-bit (Java int), and either interact with the stack, or one of the 4 registers; a, b, c, or d.
//
// The CPU API -----------
//
// The CPU instructions available through the CPU class, with a bit more detail:
//
// int readReg(String name): Returns the value of the named register.
// void writeReg(String name, int value): Stores the value into the given register.
//
// int popStack(): Pops the top element of the stack, returning the value.
// void writeStack(int value): Pushes an element onto the stack.
//
// Note that the registers have a default value of 0 and that the sStack is printable (if needed).
// The Instruction Set
//
// Instructions for same are done in assembly style, and are passed one by one into the Exec|exec|execute function (depending on your language).
// Each instruction begins with the name of the operation, and is optionally followed by either one or two operands.
// The operands are marked in the table below by either [reg], which accepts a register name, or [reg|int] which accepts either a register, or an immediate integer value.
//
// Stack Operations
//
// push [reg|int]: Pushes a register [reg] or an immediate value [int] to the stack.
//
// pop: Pops a value of the stack, discarding the value.
//
// pop [reg]: Pops a value of the stack, into the given register [reg].
//
// pushr: Pushes the general registers onto the stack, in order. (a, b, c, d)
//
// pushrr: Pushes the general registers onto the stack, in reverse order. (d, c, b, a)
//
// popr: Pops values off the stack, and loads them into the general registers, in order
//       so that the two executions `pushr()`  and `popr()` would leave the registers unchanged.
//
// poprr: Pops values off the stack, and loads them into the general registers, in order
//        so that the two executions `pushr()`  and `poprr()` would invert the values of the registers from left to right.
//
// Misc Operations
//
// mov [reg|int], [reg2]: Stores the value from [reg|int] into the register [reg2].
//
// Arithmetic Operations
//
// add [reg|int]: Pops [reg|int] arguments off the stack, storing the sum in register a.
//
// sub [reg|int]: Pops [reg|int] arguments off the stack, storing the difference in register a.
//
// mul [reg|int]: Pops [reg|int] arguments off the stack, storing the product in register a.
//
// div [reg|int]: Pops [reg|int] arguments off the stack, storing the quotient in register a.
//
// and [reg|int]: Pops [reg|int] arguments off the stack, performing a bit-and operation, and storing the result in register a.
//
// or [reg|int] : Pops [reg|int] arguments off the stack, performing a bit-or operation, and storing the result in register a.
//
// xor [reg|int]: Pops [reg|int] arguments off the stack, performing a bit-xor operation, and storing the result in register a.
//
// All arithmetic operations have 4 variants; they may be suffixed with the character 'a' (adda, xora), and they
// may take an additional register parameter, which is the destination register. Thus, using add as an example:
//
// add 5: Adds the top 5 values of the stack, storing the result in register a.
//
// add 5, b: Adds the top 5 values of the stack, storing the result in register b instead.
//
// adda 5: Pushes the value of register A onto the stack, then adds the top 5 values of the stack, and stores the result in register a.
//
// adda 5, b: Pushes the value of register A onto the stack, adds the top 5 values of the stack, and stores the result in register b.
//
// All arithmetic instructions may also take a register as their first argument, to perform a variable number of operation, as follows:
//
// mov 3, a: Stores the number 3 in register a.
// add a: Adds the top a values of the stack (in this case 3), storing the result in register a.
//
// Answer:
function Machine(cpu) {
  const regs = ["a", "b", "c", "d"];
  const rRegs = ["d", "c", "b", "a"];
  const all = (fn) => (list) => list.reduce(fn);
  const add = all((a, b) => a + b);
  const subtract = all((a, b) => a - b);
  const multiply = all((a, b) => a * b);
  const divide = all((a, b) => a / b);
  const and = all((a, b) => a & b);
  const or = all((a, b) => a | b);
  const xor = all((a, b) => a ^ b);
  const funcs = {
    stack: stack,
    arithmetic: arithmetic,
    misc: misc,
    add: add,
    sub: subtract,
    mul: multiply,
    div: divide,
    and: and,
    or: or,
    xor: xor,
  };
  function exec(ins) {
    const full = parts(ins);
    funcs[full.type](full);
  }
  function stack({ cmd, args, variant }) {
    const val = args[0];
    switch (cmd) {
      case "push":
        if (!variant) cpu.writeStack(getVal(val));
        else {
          if (variant === "r")
            for (let r of regs) cpu.writeStack(cpu.readReg(r));
          else for (let r of rRegs) cpu.writeStack(cpu.readReg(r));
        }
        break;
      case "pop":
        if (!variant && args.length === 0) cpu.popStack();
        else if (!variant) cpu.writeReg(val, cpu.popStack());
        else if (variant === "r")
          for (let r of rRegs) cpu.writeReg(r, cpu.popStack());
        else for (let r of regs) cpu.writeReg(r, cpu.popStack());
        break;
    }
  }
  function arithmetic({ cmd, args, variant }) {
    doMath(funcs[cmd], args, variant);
  }
  function misc({ cmd, args }) {
    if (cmd === "mov") {
      cpu.writeReg(args[1], getVal(args[0]));
    }
  }
  const getVal = (c) => {
    if (/[abcd]/.test(c)) return +cpu.readReg(c);
    return +c;
  };
  const doMath = (fn, args, variant) => {
    if (variant === "a") cpu.writeStack(getVal(cpu.readReg("a")));
    const [n, dest = "a"] = args;
    const vals = popN(getVal(n));
    const result = fn(vals);
    cpu.writeReg(dest, result);
  };
  const popN = (n) => {
    const arr = [];
    for (let i = 0; i < n; i++) arr.push(cpu.popStack());
    return arr;
  };

  return { exec };
}

const parts = (s) => {
  const obj = { cmd: "", args: "", variant: "", type: "" };
  let cmd = "";
  let args = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      obj.args = s
        .slice(i)
        .split(",")
        .map((e) => e.trim());
      break;
    }
    obj.cmd += s[i];
  }
  if (/a$|rr$|r$/.test(obj.cmd)) {
    obj.cmd = obj.cmd.replace(/a$|rr$|r$/, (c) => {
      obj.variant = c;
      return "";
    });
  }
  if (/push|pop/.test(obj.cmd)) obj.type = "stack";
  else if (/mov/.test(obj.cmd)) obj.type = "misc";
  else if (/add|sub|mul|div|and|or|xor/.test(obj.cmd)) obj.type = "arithmetic";
  else obj.type = "none";
  return obj;
};
