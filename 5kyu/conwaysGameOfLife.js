// 5 kyu Conway's Game of Life
//
// In this finite version of Conway's Game of Life (here is an excerpt of the rules) ...
//
// The universe of the Game of Life is an infinite two-dimensional orthogonal grid
// of square cells, each of which is in one of two possible states, alive or dead.
// Every cell interacts with its eight neighbours, which are the cells that are
// horizontally, vertically, or diagonally adjacent.
// At each step in time, the following transitions occur:
//
//     Any live cell with fewer than two live neighbours dies, as if caused by under-population.
//     Any live cell with two or three live neighbours lives on to the next generation.
//     Any live cell with more than three live neighbours dies, as if by overcrowding.
//     Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
//
// The initial pattern constitutes the seed of the system.
// The first generation is created by applying the above rules simultaneously
// to every cell in the seed—births and deaths occur simultaneously, and the discrete moment
// at which this happens is sometimes called a tick
// (in other words, each generation is a pure function of the preceding one)
//
// ...implement your own method which will take the initial state
// as an NxM array of 0's (dead cell) and 1's (living cell) and return
// an equally sized array representing the next generation.
// Cells outside the array must be considered dead.
// Cells that would born out of the array boundaries should be ignored
// (universe never grows beyond the initial NxM grid).
// N.B.: for illustration purposes, 0 and 1 will be represented as ░ and ▓ blocks
// (PHP: basic black and white squares) respectively.
// You can take advantage of the 'htmlize' function to get a text representation of the universe:
// eg:
//
// console.log(htmlize(cells));
//
// Answer:
function nextGen(input, generations = 1) {
  let cells = clone(input);
  let tick;
  for (let g = 0; g < generations; g++) {
    const xLen = cells[0].length;
    const yLen = cells.length;
    tick = new Array(yLen).fill(0).map((e) => new Array(xLen).fill(0));
    for (let x = 0; x < xLen; x++) {
      for (let y = 0; y < yLen; y++) {
        let cell = cells[y][x];
        let live = getLive(cells, x, y);
        if (cell === 1) {
          if (live < 2 || live > 3) cell = 0;
        } else {
          if (live === 3) cell = 1;
        }
        tick[y][x] = cell;
      }
    }
    cells = tick.slice();
  }
  return cells;
}
function clone(arr) {
  const newArr = [];
  for (let y = 0; y < arr.length; y++) {
    const newRow = [];
    for (let x = 0; x < arr[y].length; x++) {
      newRow.push(arr[y][x]);
    }
    newArr.push(newRow);
  }
  return newArr;
}

const getLive = (cells, xIndex, yIndex) => {
  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
    [1, 1],
    [-1, -1],
    [1, -1],
    [-1, 1],
  ];
  const xLen = cells[0].length;
  const yLen = cells.length;
  let count = 0;
  for (let [xDir, yDir] of dirs) {
    let newX = xIndex + xDir;
    let newY = yIndex + yDir;
    if (
      newY >= 0 &&
      newX >= 0 &&
      newY < yLen &&
      newX < xLen &&
      cells[newY][newX] === 1
    )
      count++;
  }
  return count;
};
