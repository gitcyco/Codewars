// 6 kyu Grid Path x
//
// Given an n by n grid filled with lowercase x's and periods (.), return the minimum number of periods
// to be replaced with x's in order to form a continuous, straight, n-length
// path of x's, from either: side to side, top to bottom, or diagonally.
// Input and Output:
//
//     Input: a string formatted as an n by n grid filled with randomly placed lowercase x's and periods.
//     Each line of the grid is separated from the next by a linebreak.
//
//     Output: a number between 0 and n, inclusive. The return number represents
//     the minimum number of periods to be replaced with x's to obtain a straight n-length path of x's.
//
// Example:
//
//     Input:
//
//   ..x..
//   .....
//   .....
//   ..x..
//   xx..x
//
//     Output: 2
//
// As you can see, in the last row (xx..x) of the grid, you only need to replace two periods
// with x's to get a straight n-length path of x's in the grid.
// Any other row, column, or diagonal will require more replacements than 2.
// So 2 is the minimum number of periods to be replaced with x's.
//
// For more examples check out the Example Test Cases.
//
// Answer:
function minXPath(grid) {
  const matrix = grid.split("\n");
  const len = matrix.length;
  let dT = 0;
  let dB = 0;
  let min = Infinity;
  for (let i = 0; i < len; i++) {
    let dV = 0;
    let dH = 0;
    if (matrix[i][i] === ".") dT++;
    if (matrix[len - 1 - i][i] === ".") dB++;
    for (let j = 0; j < len; j++) {
      if (matrix[j][i] === ".") dV++;
      if (matrix[i][j] === ".") dH++;
    }
    min = Math.min(min, dH, dV);
    if (min === 0) return min;
  }
  min = Math.min(min, dB, dT);
  return min;
}
