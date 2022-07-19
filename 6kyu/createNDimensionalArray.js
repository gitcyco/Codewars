// 6 kyu Create N-dimensional array
//
// Little boy Vasya was coding and was playing with arrays. He thought: "Is there any way to generate N-dimensional array"?
// Let us help little boy Vasya. Target of this Kata is to create a function, which will generate N-dimensional array.
// For simplicity all arrays will have the same length.
// Input:
// N: number -> depth of outter array, N > 0
// size: number -> length of all arrays, size > 0
// All inputs will be valid.
//
// On the last (deepest) level we should put a string wich will describe the depth of our array. Example: 'level 2'
// Example:
// for createNDimensionalArray(2,3) output should be:
//
// [
//   ['level 2', 'level 2', 'level 2'],
//   ['level 2', 'level 2', 'level 2'],
//   ['level 2', 'level 2', 'level 2'],
// ]
//
//
// for createNDimensionalArray(3,2) output should be:
//
// [
//   [
//     ['level 3', 'level 3'],
//     ['level 3', 'level 3'],
//   ],
//   [
//     ['level 3', 'level 3'],
//     ['level 3', 'level 3'],
//   ],
// ]
//
// Answer:
const createNDimensionalArray = (n, s) => {
  let arr = Array(s).fill("level " + n--);
  while (n-- > 0) {
    arr = Array(s).fill(arr);
  }
  return arr;
};
