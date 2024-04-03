// 7 kyu Game Hit the target
//
// Hit the target
//
// given a matrix n x n (2-7), determine if the arrow is directed to the target (x).
// There will be only 1 arrow '>' and 1 target 'x'
// An empty spot will be denoted by a space " ", the target with a cross "x", and the scope ">"
//
// Examples:
// given matrix 4x4:
// [
//   [' ', ' ', ' ', ' '],
//   [' ', ' ', ' ', ' '], --> return true
//   [' ', '>', ' ', 'x'],
//   [' ', ' ', ' ', ' ']
// ]
// given matrix 4x4:
// [
//   [' ', ' ', ' ', ' '],
//   [' ', '>', ' ', ' '], --> return false
//   [' ', ' ', ' ', 'x'],
//   [' ', ' ', ' ', ' ']
// ]
//
// given matrix 4x4:
// [
//   [' ', ' ', ' ', ' '],
//   [' ', 'x', '>', ' '], --> return false
//   [' ', '', ' ', ' '],
//   [' ', ' ', ' ', ' ']
// ]
//
// In this example, only a 4x4 matrix was used, the problem will have matrices of dimensions from 2 to 7
// Happy hacking as they say!
//
// Answer:
const solution = (mtrx) => {
  let arrow = 0;
  let target = 0;
  for (let row of mtrx) {
    for (let i = 0; i < row.length; i++) {
      if (row[i] === "x") target = i + 1;
      if (row[i] === ">") arrow = i + 1;
      if (arrow && target && arrow < target) return true;
    }
    arrow = 0;
    target = 0;
  }
  return false;
};
