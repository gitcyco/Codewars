// 6 kyu Island Count
//
// Given a string representation of a 2d map, return the number of islands in the map.
//
//     Land spaces are denoted by a zero.
//     Water is denoted by a dot.
//     Rows are denoted by newlines ('\n').
//     Two land spaces are considered connected if they are adjacent (horizontal or vertical, but not diagonal).
//
// Too easy? Try solving it without recursion..
//
// ##Example:
//
// You may be given the string ".0...\n.00..\n....0" as input.
//
// This correlates to a grid, like this:
//
// .0...
// .00..
// ....0
//
// This would be an example of a map that contains two islands; one with 3 pieces of land, one with 1 piece of land.
//
// ##More example:
//
// This is 5 islands:
//
// 0...0
// ..0..
// 0...0
//
// This is 3 islands:
//
// ..000.
// ..000.
// ..000.
// .0....
// ..000.
//
// Answer:
function countIslands(mapStr) {
  const arr = mapStr.split("\n").map((e) => e.split(""));
  const dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let count = 0;
  const queue = [];
  const yLen = arr.length;
  const xLen = arr[0].length;
  for (let y = 0; y < yLen; y++) {
    for (let x = 0; x < xLen; x++) {
      if (arr[y][x] === "0") {
        queue.push([y, x]);
        count++;
        while (queue.length > 0) {
          let [curY, curX] = queue.pop();
          arr[curY][curX] = 0;
          for (let [yDir, xDir] of dirs) {
            let newX = curX + xDir;
            let newY = curY + yDir;
            if (
              newX >= 0 &&
              newY >= 0 &&
              newX < xLen &&
              newY < yLen &&
              arr[newY][newX] === "0"
            ) {
              queue.push([newY, newX]);
            }
          }
        }
      }
    }
  }
  console.log("COUNT:", count);
  return count;
}
