// 3 kyu Path Finder #3: the Alpinist
//
// You are at start location [0, 0] in mountain area of NxN and you can only move in one of the four
// cardinal directions (i.e. North, East, South, West).
// Return minimal number of climb rounds to target location [N-1, N-1].
// Number of climb rounds between adjacent locations is defined as difference of location altitudes (ascending or descending).
//
// Location altitude is defined as an integer number (0-9).
//
// Answer:
//
// Implemented with Dijkstras Shortest Path algo.
//
// This is currently using a fake min heap for brevity.
// An actual min heap would perform much better should it be needed.
// Just drop one in on the Heap class.
function pathFinder(area) {
  const maze = area.split("\n").map((e) => e.split(""));
  const n = maze.length;
  if (n < 2) return 0;
  let [dists, prev] = createDistsPrev(maze);
  let queue = new Heap();
  queue.enqueue({ coord: "0,0", x: 0, y: 0, weight: 0 });

  while (queue.length) {
    let curNode = queue.deque();
    let adjList = getAdjList(
      curNode.x,
      curNode.y,
      maze,
      maze[curNode.y][curNode.x]
    );
    for (let node of adjList) {
      let dist = node.weight + dists[curNode.coord].dist;
      if (dist < dists[node.coord].dist) {
        dists[node.coord].dist = dist;
        queue.enqueue(node, dist);
        prev[node.coord] = { coord: curNode.coord, dist: dist };
      }
    }
  }
  return prev[`${n - 1},${n - 1}`].dist;
}

function getAdjList(x, y, maze, curAltitude) {
  let list = [];
  const dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  for (let [dirX, dirY] of dirs) {
    let newX = x + dirX;
    let newY = y + dirY;
    if (newX >= 0 && newY >= 0 && newX < maze.length && newY < maze.length) {
      let weight = maze[newY][newX];
      if (weight !== curAltitude) weight = Math.abs(curAltitude - weight);
      else weight = 0;
      const obj = { coord: `${newX},${newY}`, x: newX, y: newY, weight };
      list.push(obj);
    }
  }
  return list;
}

function createDistsPrev(maze) {
  const dists = {};
  const prev = {};
  for (let x = 0; x < maze.length; x++) {
    for (let y = 0; y < maze.length; y++) {
      let coord = `${x},${y}`;
      dists[coord] = { coord, x, y, dist: x == 0 && y == 0 ? 0 : Infinity };
      prev[coord] = null;
    }
  }
  return [dists, prev];
}

class Heap {
  constructor() {
    this.queue = [];
  }
  enqueue(item, priority) {
    this.queue.push({ item, priority });
    this.queue = this.queue.sort((a, b) => b.priority - a.priority);
  }
  deque() {
    let val = this.queue.pop();
    return val.item;
  }
  get length() {
    return this.queue.length;
  }
}
