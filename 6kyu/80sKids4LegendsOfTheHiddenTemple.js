// 6 kyu 80's Kids #4: Legends of the Hidden Temple
//
// You've made it through the moat and up the steps of knowledge. You've won the temples games and now you're hunting for treasure in the final temple run. There's good news and bad news. You've found the treasure but you've triggered a nasty trap. You'll surely perish in the temple chamber.
//
// With your last movements, you've decided to draw an "X" marks the spot for the next archaeologist.
//
// Given an odd number, n, draw an X for the next crew. Follow the example below.
//
// markSpot(5) ->
//
// X       X
//   X   X
//     X
//   X   X
// X       X
//
// For a clearer understanding of the output, let '.' represent a space and \n the newline.
// X.......X\n
// ..X...X\n
// ....X\n
// ..X...X\n
// X.......X\n
//
// markSpot(3) ->
//
// X   X
//   X
// X   X
//
// If n = 1 return 'X\n' and if you're given an even number or invalid input, return '?'.
//
// The output should be a string with no spaces after the final X on each line, but a \n to indicate a new line.
//
// Answer:

// Using an array of strings:
function markSpot(n) {
  if (n < 0 || n % 2 === 0 || typeof n !== "number") return "?";
  let arr = [];
  let lIdx = 0;
  let rIdx = n * 2 - 1;
  for (let i = 0; i < Math.ceil(n / 2); i++) {
    let str = " ".repeat(lIdx) + "X";
    if (rIdx - lIdx - 2 > 0) str += " ".repeat(rIdx - lIdx - 2) + "X";
    arr.push(str);
    lIdx += 2;
    rIdx -= 2;
  }
  return arr.concat(arr.slice(0, arr.length - 1).reverse()).join("\n") + "\n";
}

// Long form, just fully constructing the string as we go:
function markSpot_str(n) {
  if (n < 0 || n % 2 === 0 || typeof n !== "number") return "?";
  let str = "";
  let lIdx = 0;
  let rIdx = n * 2 - 1;
  for (let i = 0; i < Math.ceil(n / 2); i++) {
    str += " ".repeat(lIdx) + "X";
    if (rIdx - lIdx - 2 > 0) str += " ".repeat(rIdx - lIdx - 2) + "X";
    str += "\n";
    lIdx += 2;
    rIdx -= 2;
  }
  lIdx -= 4;
  rIdx += 4;
  for (let i = 0; i < Math.floor(n / 2); i++) {
    str += " ".repeat(lIdx) + "X";
    if (rIdx - lIdx - 2 > 0) str += " ".repeat(rIdx - lIdx - 2) + "X";
    str += "\n";
    lIdx -= 2;
    rIdx += 2;
  }
  return str;
}
