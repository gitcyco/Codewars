// 5 kyu Maze Solver
//
// You will be given a maze in this format:
//
// [ [ 1, 1, 1, 1, 1, 1 ],
//   [ 1, 0, 0, 0, 0, 1 ],
//   [ 1, 0, 1, 0, 1, 1 ],
//   [ 0, 0, 1, 0, 0, 0 ],
//   [ 1, 0, 1, 1, 0, 1 ],
//   [ 1, 1, 1, 1, 1, 1 ] ]
//
// 1 signifies a wall piece while 0 is an open path.
// There is only 1 start and 1 end point on opposite sides, but they can be anywhere along their edges.
// he maze will differ in size and may not be square.
// There will always be a solution to the maze. There will only ever be one path through the maze.
//
// Your task is to solve the maze and return it in the following format.
//
// [ [ 1, 1, 1, 1, 1, 1 ],
//   [ 1, 2, 2, 2, 0, 1 ],
//   [ 1, 2, 1, 2, 1, 1 ],
//   [ 2, 2, 1, 2, 2, 2 ],
//   [ 1, 0, 1, 1, 0, 1 ],
//   [ 1, 1, 1, 1, 1, 1 ] ]
//
// Where 2 is the marked path from one side to the other.
//
// There is an asciiMaze which can format the maze in a pretty to log format, and an arrayClone method which deep clones the map to cut refrences.
//
// Answer:
function solveMaze(map) {
  let [yLen, xLen] = [map.length, map[0].length];
  const visited = new Array(yLen)
    .fill(0)
    .map((e) => new Array(xLen).fill(false));
  const path = [];
  let start = [];
  let end = [];
  for (let y = 0; y < yLen; y++) {
    if (map[y][0] === 0) {
      if (start.length > 0) end = [y, 0];
      else start = [y, 0];
    }
    if (map[y][xLen - 1] === 0) {
      if (start.length > 0) end = [y, xLen - 1];
      else start = [y, xLen - 1];
    }
  }
  for (let x = 0; x < xLen; x++) {
    if (map[0][x] === 0) {
      if (start.length > 0) end = [0, x];
      else start = [0, x];
    }
    if (map[yLen - 1][x] === 0) {
      if (start.length > 0) end = [yLen - 1, x];
      else start = [yLen - 1, x];
    }
  }

  const walk = (y, x, map, visited, end) => {
    if (y === end[0] && x === end[1]) return true;
    let [yLen, xLen] = [map.length, map[0].length];
    if (
      y >= 0 &&
      y < yLen &&
      x >= 0 &&
      x < xLen &&
      map[y][x] !== 1 &&
      !visited[y][x]
    ) {
      visited[y][x] = true;
      if (
        walk(y + 1, x, map, visited, end) ||
        walk(y - 1, x, map, visited, end) ||
        walk(y, x + 1, map, visited, end) ||
        walk(y, x - 1, map, visited, end)
      ) {
        path.push([y, x]);
        return true;
      }
      path.pop();
    }
    return false;
  };
  walk(start[0], start[1], map, visited, end);
  map[start[0]][start[1]] = 2;
  map[end[0]][end[1]] = 2;
  for (let [y, x] of path) {
    map[y][x] = 2;
  }
  return map;
}
