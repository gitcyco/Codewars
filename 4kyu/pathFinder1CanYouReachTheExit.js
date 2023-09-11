// 4 kyu Path Finder #1: can you reach the exit?
//
// You are at position [0, 0] in maze NxN and you can only move in one of the four cardinal directions (i.e. North, East, South, West).
// Return true if you can reach position [N-1, N-1] or false otherwise.
//
//     Empty positions are marked ..
//     Walls are marked W.
//     Start and exit positions are empty in all test cases.

// Answer:
function pathFinder(strMaze) {
  let maze = strMaze.split("\n");
  let [targetX, targetY] = [maze[0].length - 1, maze.length - 1];
  const dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const walk = (x, y, seen = {}) => {
    if (x == targetX && y == targetY) return true;
    if (
      x >= 0 &&
      y >= 0 &&
      x <= targetX &&
      y <= targetY &&
      !seen[[y, x]] &&
      maze[y][x] == "."
    ) {
      seen[[y, x]] = true;
      for ([xDir, yDir] of dirs) {
        if (walk(x + xDir, y + yDir, seen)) return true;
      }
    }
    return false;
  };
  return walk(0, 0);
}
