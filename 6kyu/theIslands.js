// 6 kyu The islands
//
// The goal of this Kata is to find the area of all the islands in the sea.
// Definition:
//
//     an island is the territory surrounded by 1s
//     the sea is all the 0s which are not surrounded by any 1s
//
// Input:
//
//     grid: a one-dimensional array consisting of only 1s and 0s
//     width: the width of the grid
//     height: the height of the grid
//
// Expected output:
//
// A newline separated string consisting of only these characters:
//
//     ' ': the whitespace represents the sea
//     '+': the 1s are now replaced by pluses
//     '*': the island area is now filled with stars
//
// Example
//
// Example:
//
//  solve([
//      0,0,1,0,0,
//      0,1,0,1,0,
//      0,1,0,1,0,
//      0,0,1,0,0,
//      0,0,0,0,0
//     ], 5, 5);
//
// Produces
//
//     '  +  \n'+
//     ' +*+ \n'+
//     ' +*+ \n'+
//     '  +  \n'+
//     '     ';
//
// Answer:
function solve(grid, width, height) {
  const arr = [];
  for (let i = 0; i < height; i++) {
    arr.push(grid.slice(i * width, i * width + width));
  }
  const dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let edge = false;
  const queue = [];
  const visited = [];
  const yLen = arr.length;
  const xLen = arr[0].length;
  for (let y = 0; y < yLen; y++) {
    for (let x = 0; x < xLen; x++) {
      if (arr[y][x] === 0) {
        queue.push([y, x]);
        while (queue.length > 0) {
          let [curY, curX] = queue.pop();
          arr[curY][curX] = "v";
          visited.push([curY, curX]);
          if (
            curY === 0 ||
            curX === 0 ||
            curY === yLen - 1 ||
            curX === xLen - 1
          )
            edge = true;
          for (let [yDir, xDir] of dirs) {
            let newX = curX + xDir;
            let newY = curY + yDir;
            if (
              newX >= 0 &&
              newY >= 0 &&
              newX < xLen &&
              newY < yLen &&
              arr[newY][newX] === 0
            )
              queue.push([newY, newX]);
          }
        }
        for (let [curY, curX] of visited) arr[curY][curX] = edge ? " " : "*";
        edge = false;
        visited.splice(0);
      } else if (arr[y][x] === 1) arr[y][x] = "+";
    }
  }
  return arr.map((e) => e.join("")).join("\n");
}
