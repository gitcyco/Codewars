// 6 kyu Game Hit the target - 2nd part
//
// Hit the target
// This is the second part of the kata :3 🎈🎆🎇🎆🎈
// given a matrix n x n (2-7), determine if the arrow is directed to the target (x).
// Now there are one of 4 types of arrows ( '^', '>', 'v', '<' ) and only one target (x)
// An empty spot will be denoted by a space " ", the target with a cross "x", and the scope ">"
// Examples:
// given matrix 4x4:
// [
//   [' ', 'x', ' ', ' '],
//   [' ', ' ', ' ', ' '], --> return true
//   [' ', '^', ' ', ' '],
//   [' ', ' ', ' ', ' ']
// ]
// given matrix 4x4:
// [
//   [' ', ' ', ' ', ' '],
//   [' ', 'v', ' ', ' '], --> return false
//   [' ', ' ', ' ', 'x'],
//   [' ', ' ', ' ', ' ']
// ]
//
// given matrix 4x4:
// [
//   [' ', ' ', ' ', ' '],
//   ['>', ' ', ' ', 'x'], --> return true
//   [' ', '', ' ', ' '],
//   [' ', ' ', ' ', ' ']
// ]
//
// In this example, only a 4x4 matrix was used, the problem will have matrices of dimensions from 2 to 7
// And here is the first part of this kata - click me ●v●
// Happy hacking as they say! 💻
//
// Answer:
const solution = (mtrx) => {
  let arrow = 0;
  let target = 0;
  for (let y = 0; y < mtrx.length; y++) {
    let row = mtrx[y];
    for (let x = 0; x < row.length; x++) {
      if (row[x] === "x") target = [y + 1, x + 1];
      if (/[<>^v]/.test(row[x])) arrow = [row[x], y + 1, x + 1];
    }
  }
  if (arrow && target) {
    if (arrow[0] === ">" && arrow[2] < target[1] && arrow[1] === target[0])
      return true;
    if (arrow[0] === "<" && arrow[2] > target[1] && arrow[1] === target[0])
      return true;
    if (arrow[0] === "v" && arrow[2] === target[1] && arrow[1] < target[0])
      return true;
    if (arrow[0] === "^" && arrow[2] === target[1] && arrow[1] > target[0])
      return true;
  }
  return false;
};
