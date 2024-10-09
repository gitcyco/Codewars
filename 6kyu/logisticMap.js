// 6 kyu Logistic Map
//
// Our AAA company is in need of some software to help with logistics: you will be given the width and height
// of a map, a list of x coordinates and a list of y coordinates of the supply points, starting
// to count from the top left corner of the map as 0.
//
// Your goal is to return a two dimensional array/list with every item having the value of the distance
// of the square itself from the closest supply point expressed as a simple integer.
//
// Quick examples:
//
// logisticMap(3,3,[0],[0])
// //returns
// //[[0,1,2],
// // [1,2,3],
// // [2,3,4]]
// logisticMap(5,2,[0,4],[0,0])
// //returns
// //[[0,1,2,1,0],
// // [1,2,3,2,1]]
//
// Remember that our company is operating with trucks, not drones, so you can simply use Manhattan distance.
// If supply points are present, they are going to be within the boundaries of the map; if no supply point
// is present on the map, just return None/nil/null in every cell.
//
// logisticMap(2,2,[],[])
// //returns
// //[[None,None],
// // [None,None]]
//
// Note: this one is taken (and a bit complicated) from a problem a real world AAA company [whose name I won't tell here]
//   used in their interview. It was done by a friend of mine.
//   It is nothing that difficult and I assume it is their own version of the FizzBuzz problem, but consider
//   candidates were given about 30 mins to solve it.
//
// Answer:

// This just walks the graph, rather than calc the Manhattan distance, a little more fun but way more complicated ;-)
function logisticMap(width, height, xs, ys) {
  const map = new Array(height).fill(0).map((e) => new Array(width).fill(null));
  const result = new Array(height)
    .fill(0)
    .map((e) => new Array(width).fill(-1));
  if (!xs.length && !ys.length) return map;
  for (let i = 0; i < xs.length; i++) {
    map[ys[i]][xs[i]] = 1;
  }
  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const queue = new Queue();
      queue.enqueue([y, x, 0]);
      const visited = new Map();
      while (queue.length) {
        let [coordY, coordX, count] = queue.dequeue();
        visited.set(`${coordY},${coordX}`, true);
        if (map[coordY][coordX] === 1) {
          result[y][x] = count;
          break;
        }
        for (let [yDir, xDir] of dirs) {
          let [newY, newX] = [coordY + yDir, coordX + xDir];
          if (
            newY >= 0 &&
            newY < height &&
            newX >= 0 &&
            newX < width &&
            !visited.get(`${newY},${newX}`)
          ) {
            queue.enqueue([newY, newX, count + 1]);
          }
        }
      }
    }
  }
  return result;
}

class Queue {
  constructor() {
    this.length = 0;
    this.queue = {};
    this.head = 0;
    this.tail = 0;
  }
  get size() {
    return this.length;
  }
  enqueue(item) {
    this.queue[this.tail] = item;
    this.tail++;
    this.length++;
  }
  dequeue() {
    if (this.length > 0) {
      this.length--;
      let val = this.queue[this.head];
      delete this.queue[this.head];
      this.head++;
      return val;
    }
  }
}
