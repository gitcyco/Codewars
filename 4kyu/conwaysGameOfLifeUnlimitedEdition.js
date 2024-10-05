// 4 kyu Conway's Game of Life - Unlimited Edition
//
// Given a 2D array and a number of generations, compute n timesteps of Conway's Game of Life.
//
// The rules of the game are:
//
//     Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
//     Any live cell with more than three live neighbours dies, as if by overcrowding.
//     Any live cell with two or three live neighbours lives on to the next generation.
//     Any dead cell with exactly three live neighbours becomes a live cell.
//
// Each cell's neighborhood is the 8 cells immediately around it (i.e. Moore Neighborhood).
// The universe is infinite in both the x and y dimensions and all cells are initially dead - except for those
// specified in the arguments.
// The return value should be a 2d array cropped around all of the living cells.
// (If there are no living cells, then return [[]].)
//
// For illustration purposes, 0 and 1 will be represented as ░░ and ▓▓ blocks respectively
// (PHP: plain black and white squares).
// You can take advantage of the htmlize function to get a text representation of the universe, e.g.:
//
// console.log(htmlize(cells));
//
// Answer:
function getGeneration(input, generations) {
  let cells = clone(input);
  let tick;
  for (let g = 0; g < generations; g++) {
    expandArray(cells);
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
  return crop(cells);
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

function crop(arr) {
  let lenY = arr.length;
  let lenX = arr[0].length;
  let firstXY = [Infinity, Infinity];
  let lastXY = [-Infinity, -Infinity];
  for (let y = 0; y < lenY; y++) {
    for (let x = 0; x < lenX; x++) {
      if (arr[y][x] === 1) {
        firstXY[0] = Math.min(firstXY[0], x);
        firstXY[1] = Math.min(firstXY[1], y);
        lastXY[0] = Math.max(lastXY[0], x);
        lastXY[1] = Math.max(lastXY[1], y);
      }
    }
  }
  let width = lastXY[0] - firstXY[0] + 1;
  let height = lastXY[1] - firstXY[1] + 1;
  let newArr = new Array(height).fill(0).map((e) => new Array(width).fill(0));
  for (let y = firstXY[1]; y <= lastXY[1]; y++) {
    for (let x = firstXY[0]; x <= lastXY[0]; x++) {
      newArr[y - firstXY[1]][x - firstXY[0]] = arr[y][x];
    }
  }
  return newArr;
}

function expandArray(arr) {
  arr.unshift(new Array(arr[0].length).fill(0));
  arr.push(new Array(arr[0].length).fill(0));
  for (let row of arr) {
    row.push(0);
    row.unshift(0);
  }
  return arr;
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
