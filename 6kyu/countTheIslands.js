// 6 kyu Count the Islands
//
// Implement an algorithm which analyzes a two-color image and determines how many isolated areas of a single color the image contains.
// Islands
//
// An "island" is a set of adjacent pixels of one color (1) which is surrounded by pixels of a different color (0).
// Pixels are considered adjacent if their coordinates differ by no more than 1 on the X or Y axis.
//
// Below you can see an example with 2 islands:
//
//     on the left in the form of a matrix of 1's and 0's
//     on the right in an equivalent stringified form using "X" and "~" characters for better readability
//
// [
//   [0,0,0,0,0,0,0,0,0,0],          "~~~~~~~~~~"
//   [0,0,1,1,0,0,0,0,0,0],          "~~XX~~~~~~"
//   [0,0,1,1,0,0,0,0,0,0],          "~~XX~~~~~~"
//   [0,0,0,0,0,0,0,0,1,0],          "~~~~~~~~X~"
//   [0,0,0,0,0,1,1,1,0,0],          "~~~~~XXX~~"
//   [0,0,0,0,0,0,0,0,0,0],          "~~~~~~~~~~"
// ]
//
// Specification
//
// Your task is to implement a function which accepts a matrix containing the numbers 0 and 1. It should return the number of islands as an integer.
//
// Answer:
function countIslands(image) {
  const dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
    [1, 1],
    [-1, 1],
    [1, -1],
    [-1, -1],
  ];
  let count = 0;
  const queue = [];
  const yLen = image.length;
  const xLen = image[0].length;
  for (let y = 0; y < yLen; y++) {
    for (let x = 0; x < xLen; x++) {
      if (image[y][x] === 1) {
        queue.push([y, x]);
        count++;
        while (queue.length > 0) {
          let [curY, curX] = queue.pop();
          image[curY][curX] = 0;
          for (let [yDir, xDir] of dirs) {
            let newX = curX + xDir;
            let newY = curY + yDir;
            if (
              newX >= 0 &&
              newY >= 0 &&
              newX < xLen &&
              newY < yLen &&
              image[newY][newX] === 1
            ) {
              queue.push([newY, newX]);
            }
          }
        }
      }
    }
  }
  return count;
}
