// 6 kyu X marks the spot!
//
// Write a function x(n) that takes in a number n and returns an nxn array with an X in the middle.
// The X will be represented by 1's and the rest will be 0's.
// E.g.
//
// x(5) === [[1, 0, 0, 0, 1],
//           [0, 1, 0, 1, 0],
//           [0, 0, 1, 0, 0],
//           [0, 1, 0, 1, 0],
//           [1, 0, 0, 0, 1]];
//
// x(6) === [[1, 0, 0, 0, 0, 1],
//           [0, 1, 0, 0, 1, 0],
//           [0, 0, 1, 1, 0, 0],
//           [0, 0, 1, 1, 0, 0],
//           [0, 1, 0, 0, 1, 0],
//           [1, 0, 0, 0, 0, 1]];
//
// Answer:
function x(n) {
  let arr = new Array(n).fill(0).map((e) => new Array(n).fill(0));
  let min = 0;
  let max = n - 1;
  let mid = Math.floor(n / 2);
  for (let i = 0; i <= mid; i++) {
    arr[min][min] = 1;
    arr[min][max] = 1;
    arr[max][min] = 1;
    arr[max][max] = 1;
    min++;
    max--;
  }
  return arr;
}
