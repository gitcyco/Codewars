// 6 kyu Brainfuck generator
//
// Convert text to BF
//
// You are tasked with writing a function that converts a given string to BF that would print the given string.
//
// For example, if we were to call the function with the string "Hello World!" it might
// give us a result that is something like:
// "-[------->+<]>-.-[->+++++<]>++.+++++++..+++.[--->+<]>-----.---[->+++<]>.-[--->+<]>---.+++.------.--------.-[--->+<]>.".
//
// If we execute that code, we would get "Hello World!" as the output.
//
// Answer:
function toBrainfuck_basic(str) {
  let chunk = 10;
  let out = "";

  for (let c of str) {
    let code = c.charCodeAt(0);
    out += ">";
    let chunks = Math.floor(code / chunk);
    let rem = code % chunk;
    if (chunks > 0) {
      out += "+".repeat(chunk);
      out += "[>" + "+".repeat(chunks) + "<-]";
    }
    out += ">" + "+".repeat(rem) + ".";
  }
  return out;
}

// Using relative addition/subtraction from previous value:
function toBrainfuck_alt(str) {
  let out = "";
  let prev = 0;

  for (let c of str) {
    let code = c.charCodeAt(0);
    if (code >= prev) {
      out = add(out, code - prev);
    } else if (code < prev) {
      out = sub(out, prev - code);
    }
    prev = code;
    out += ".<";
  }
  return out;
}

function add(tape, num) {
  let chunk = 15;
  let chunks = Math.floor(num / chunk);
  let rem = num % chunk;
  if (chunks > 0) {
    tape += "+".repeat(chunk);
    tape += "[>" + "+".repeat(chunks) + "<-]";
  }
  tape += ">" + "+".repeat(rem);
  return tape;
}

function sub(tape, num) {
  let chunk = 15;
  let chunks = Math.floor(num / chunk);
  let rem = num % chunk;
  if (chunks > 0) {
    tape += "+".repeat(chunk);
    tape += "[>" + "-".repeat(chunks) + "<-]";
  }
  tape += ">" + "-".repeat(rem);
  return tape;
}
