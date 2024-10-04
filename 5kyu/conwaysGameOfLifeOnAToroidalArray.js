// 5 kyu Conways game of life on a toroidal array
//
// Conways game of life (https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life) is usually implemented
//   without considering neigbouring cells that would be outside of the arrays range, but another way
//   to do it is by considering the left and right edges of the array to be stitched
//   together, and the top and bottom edges also, yielding a toroidal array and thus all cells get 8 neighbours.
//
// Implement the function get_generation(cells, n) which takes a 2d-array cells an returns
// generation 'n' of game of life with the initial 'cells' and which considers the array as a toroidal array.
//
// you can use the function print2dArr(list) to print out your array in a more readable format.
// Example:
//
// The following pattern would be considered Still life (a pattern which does not change after a generation)
// on a toroidal array because each live element have exactly 3 neighbours at the toroids stiched edges.
//
// [   1,   0,   0,   1]
// [   0,   0,   0,   0]
// [   0,   0,   0,   0]
// [   1,   0,   0,   1]
//
// Answer:
function getGeneration(cells, generations) {
  const xLen = cells[0].length;
  const yLen = cells.length;
  let tick;
  for (let g = 0; g < generations; g++) {
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
    let newX = getIndex(xIndex, xDir, xLen);
    let newY = getIndex(yIndex, yDir, yLen);
    if (cells[newY][newX] === 1) count++;
  }
  return count;
};

const getIndex = (i, offset, len) => (i + offset + len) % len;
