// 5 kyu Land perimeter
//
// Given an array arr of strings, complete the function by calculating the total perimeter of all the islands.
// Each piece of land will be marked with 'X' while the water fields are represented as 'O'.
// Consider each tile being a perfect 1 x 1 piece of land. Some examples for better visualization:
//
// ['XOOXO',
//  'XOOXO',
//  'OOOXO',
//  'XXOXO',
//  'OXOOO']
//
// which represents:
//
// should return: "Total land perimeter: 24".
//
// Following input:
//
// ['XOOO',
//  'XOXO',
//  'XOXO',
//  'OOXX',
//  'OOOO']
//
// which represents:
//
// should return: "Total land perimeter: 18"
//
// Answer:
function landPerimeter(arr) {
  const dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const yLen = arr.length;
  const xLen = arr[0].length;
  let shore = 0;
  for (let y = 0; y < yLen; y++) {
    for (let x = 0; x < xLen; x++) {
      if (arr[y][x] === "X") {
        for (let [ydif, xdif] of dirs) {
          let newX = xdif + x;
          let newY = ydif + y;
          if (
            newX < 0 ||
            newY < 0 ||
            newX >= xLen ||
            newY >= yLen ||
            arr[newY][newX] === "O"
          )
            shore++;
        }
      }
    }
  }
  return `Total land perimeter: ${shore}`;
}
