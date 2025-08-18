// 4 kyu Elementary conveyor
//
// The conveyor can move parts in four directions: right(r), left(l), up(u) and down(d), wrapping around the border of the grid.
// There is also one element that is the output of the conveyor(f).
//
// The conveyor is represented by a rectangular list of strings, as shown below:
//
// ["rdfrd",
//  "uluul"]
//
// During the step, the part moves along the conveyor to an adjacent cell according to the specified direction.
// For each conveyor cell, it is necessary to calculate the number of steps for which the element will reach
// the output tile f (-1 if this is not possible).
// The result is returned as a 2D array of integers.
//
// Example:
//
// ["rfl"]   =>  [[1, 0, 1]]
//
// ["rdfrd", =>  [[-1, -1, 0, -1, -1],
//  "uluul"]      [-1, -1, 1, -1, -1]]
//
// ["lfl"]   =>  [[2, 0, 1]]
//
// Random test parameters:
//
// 102 small tests where   5 <= width, height < 12
// 125 large tests where 200 <= width, height < 220
//
// Answer:
function pathCounter(belt) {
  const dirMap = { r: [0, 1], l: [0, -1], u: [-1, 0], d: [1, 0] };
  const dirs = [
    [0, -1],
    [0, 1],
    [-1, 0],
    [1, 0],
  ];
  const [yLen, xLen] = [belt.length, belt[0].length];
  const start = findStart(belt);
  const dists = new Array(belt.length)
    .fill(0)
    .map((e) => new Array(belt[0].length).fill(-1));
  const queue = [[0, ...start]];

  while (queue.length) {
    const [dist, curY, curX] = queue.pop();
    dists[curY][curX] = dist;
    for (const [dirY, dirX] of dirs) {
      const [newY, newX] = addCoords(curY, curX, dirY, dirX, yLen, xLen);
      if (dists[newY][newX] < 0) {
        const [itemDirY, itemDirX] = dirMap[belt[newY][newX]];
        const [checkY, checkX] = addCoords(
          newY,
          newX,
          itemDirY,
          itemDirX,
          yLen,
          xLen
        );
        if (checkY === curY && checkX === curX) {
          queue.push([dist + 1, newY, newX]);
        }
      }
    }
  }
  return dists;
}

const findStart = (grid) => {
  let start = [-1, -1];
  for (let y = 0; y < grid.length && start[0] < 0; y++) {
    for (let x = 0; x < grid[y].length && start[0] < 0; x++) {
      if (grid[y][x] === "f") {
        start = [y, x];
      }
    }
  }
  return start;
};

const addCoords = (y, x, dy, dx, yLen, xLen) => {
  let newY = (y + dy) % yLen;
  let newX = (x + dx) % xLen;
  if (newY < 0) newY = yLen - 1;
  if (newX < 0) newX = xLen - 1;
  return [newY, newX];
};
