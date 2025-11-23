// 5 kyu Connected blocks (second part)
//
// This is the second part of Connected bloks kata.
//
// We want to generalize the solution in such a way that the grid can have m dimensions and each dimension with n values (from 0 to n-1)
//
// Examples:
//
// solution({dimensions: [10, 10], cells: '18,00,95,40,36,26,57,48,54,65,76,87,97,47,00'}) === 3 // two dimensions (x from 0 to 9, and y from 0 to 9)
//
// solution({dimensions: [20, 10], cells: '018,000,095,040,036,026,057,048,054,065,076,087,097,047,000'}) === 3 // two dimensions (x from 0 to 19, and y from 0 to 9)
//
// solution({dimensions: [10, 10, 100], cells: '1800,0000,9500,4000,3600,2600,5700,4800,5400,6500,7600,8700,9700,4700,0000'}) === 3 // three dimensions (x from 0 to 9, y from 0 to 9 and z from 0 to 99)
//
// Notice that the format of a cell is calculated taking into account the number of digits needed for each dimension.
//
// For example, with [20, 10, 1000] dimension values, the 113012 cell value means:
//
//     x coord: 11
//     y coord: 3
//     z coord: 012
//
// In addition, two cells are connected if they have the same value in all the existing dimensions except in one and in this one they are different in a unit.
//
// For example, with [20, 10, 1000] dimension values:
//
//     113012 and 113013 cells are connected.
//     113012 and 113014 are not connected.
//     113012 and 123013 are not connected.
//
// Answer:
function solution({ dimensions, cells }) {
  let dims = dimensions.map((e) => {
    let tot = e - 1;
    let len = tot.toString().length;
    return [tot, len];
  });
  const map = validate(dims, cells);
  const keys = Object.keys(map);
  const visited = {};
  let maxCount = 0;

  for (let key of keys) {
    if (key in visited) continue;
    const queue = [key];
    let count = 0;
    while (queue.length) {
      count++;
      let key = queue.pop();
      let coords = map[key];
      visited[key] = true;
      for (let coord of coords) {
        let items = mutate(coord, coords);
        for (let item of items) {
          if (!visited[item] && map[item]) {
            queue.push(item);
            visited[item] = true;
          }
        }
      }
      maxCount = Math.max(maxCount, count);
    }
  }
  return maxCount;
}

const mutate = (coord, coords, mods = [1, -2]) => {
  const out = [];
  let orig = coord[1];
  for (let mod of mods) {
    coord[1] += mod;
    out.push(getStr(coords));
  }
  coord[1] = orig;
  return out;
};

const getStr = (items) =>
  items.reduce(
    (str, [_, val, len]) => (str += val.toString().padStart(len, "0")),
    ""
  );

const validate = (dims, cells) => {
  const coords = {};
  const items = [...new Set(cells.split(","))].forEach((e) => {
    if (!/^\d+$/.test(e)) return;
    let str = "";
    let coord = [];
    for (let [max, len] of dims) {
      let piece = e.slice(str.length, str.length + len);
      if (piece.length === len && +piece >= 0 && +piece <= max) {
        str += piece;
        coord.push([piece, +piece, len]);
      } else return;
    }
    if (str !== e) return;
    coords[str] = coord;
  });
  return coords;
};
