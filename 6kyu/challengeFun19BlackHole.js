// 6 kyu Challenge Fun #19: Black Hole
//
// Let's define a hole of size n as a matrix which is built as follows.
//
//     Its elements are in range [1..n^2].
//     The matrix is filled by rings, from the outwards the innermost.
//     Each ring is filled with numbers in the following way:
//     the first number is written in the top left corner;
//     the second number is written in the top right corner;
//     the third number is written in the bottom right corner;
//     the fourth number is written in the bottom left corner;
//     each next number is written next to the number written 4 steps before it, until the ring is filled.
//
// The matrix is constructed when all numbers are written. Given the size of the hole, return the number written at (a, b).
// Example
//
// For n = 4, a = 1, b = 1, the output should be 13.
//
// The hole looks like this:
//
// [
// [ 1,  5,  9,  2],
// [12, 13, 14,  6],
// [ 8, 16, 15, 10],
// [ 4, 11,  7,  3],
// ]
// The element at (1, 1) is 13.
//
// For n = 5, a = 3, b = 2, the output should be 23.
//
// The hole looks like this:
//
// [
// [ 1,  5,  9, 13,  2],
// [16, 17, 21, 18,  6],
// [12, 24, 25, 22, 10],
// [ 8, 20, 23, 19, 14],
// [ 4, 15, 11,  7,  3],
// ]
// The element at (3, 2) is 23.
//
// Input/Output
//
//     [input] integer n
//
// Matrix size, 1 ≤ n ≤ 100.
//
//     [input] integer a
//
// Row number, 0 ≤ a ≤ n - 1.
//
//     [input] integer b
//
// Column number, 0 ≤ b ≤ n - 1.
//
//     [output] an integer
//
// The hole[a][b]
//
// Answer:
function blackHole(n, a, b) {
  if ((n - 1) / 2 === a && (n - 1) / 2 === b) return n * n;
  const dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let num = 1;
  let len = n - 1;
  const lines = [
    [0, 0],
    [0, len],
    [len, len],
    [len, 0],
  ];
  let temp = structuredClone(lines);
  while (len > 0) {
    for (let j = 0; j < len; j++) {
      for (let i = 0; i < 4; i++) {
        const [y, x] = temp[i];
        if (a === y && b === x) return num;
        let [yMod, xMod] = dirs[i];
        temp[i][0] = temp[i][0] + yMod;
        temp[i][1] = temp[i][1] + xMod;
        num++;
      }
    }
    temp = adjust(lines);
    len -= 2;
  }
}

const adjust = (arr) => {
  const dirs = [
    [1, 1],
    [1, -1],
    [-1, -1],
    [-1, 1],
  ];
  for (let i = 0; i < dirs.length; i++) {
    let [yDir, xDir] = dirs[i];
    arr[i][0] = arr[i][0] + yDir;
    arr[i][1] = arr[i][1] + xDir;
  }
  return structuredClone(arr);
};
