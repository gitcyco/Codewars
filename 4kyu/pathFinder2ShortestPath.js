// 4 kyu Path Finder #2: shortest path
//
// You are at position [0, 0] in maze NxN and you can only move in one of the four cardinal directions (i.e. North, East, South, West).
// Return the minimal number of steps to exit position [N-1, N-1] if it is possible to reach the exit from the starting position. Otherwise, return false.
//
// Empty positions are marked .. Walls are marked W. Start and exit positions are guaranteed to be empty in all test cases.
//
// Answer:
function pathFinder(strMaze) {
  let maze = strMaze.split("\n");
  let queue = [[0, 0, 0]];
  let qIdx = 0;
  let len = maze.length;
  if (len == 1) return 0;
  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  let seen = {};
  while (qIdx < queue.length) {
    let [ytmp, xtmp, steps] = queue[qIdx++];
    for (let [dirY, dirX] of dirs) {
      let x = xtmp + dirX;
      let y = ytmp + dirY;
      if (
        y >= 0 &&
        y < len &&
        x >= 0 &&
        x < len &&
        maze[y][x] === "." &&
        !seen[[y, x]]
      ) {
        if (x === len - 1 && y === len - 1) return steps + 1;
        queue.push([y, x, steps + 1]);
        seen[[y, x]] = true;
      }
    }
  }
  return false;
}
