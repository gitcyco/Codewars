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
function toBrainfuck(str) {
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
