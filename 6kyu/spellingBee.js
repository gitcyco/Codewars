// 6 kyu Spelling Bee
//
// How many bees are in the beehive?
//
//     bees can be facing UP, DOWN, LEFT, or RIGHT
//     bees can share parts of other bees
//
// Examples
//
// Ex1
//
// bee.bee
// .e..e..
// .b..eeb
//
// Answer: 5
//
// Ex2
//
// bee.bee
// e.e.e.e
// eeb.eeb
//
// Answer: 8
//
// Answer:
howManyBees = function (hive) {
  if (!hive || hive.length === 0) return 0;
  let rows = getRows(hive);
  let cols = getCols(hive);
  let count = 0;
  for (let row of rows) {
    count += (row.match(/bee/g) || []).length;
    count += (row.split("").reverse().join("").match(/bee/g) || []).length;
  }
  for (let col of cols) {
    count += (col.match(/bee/g) || []).length;
    count += (col.split("").reverse().join("").match(/bee/g) || []).length;
  }
  return count;
};

const getCols = (hive) => {
  let cols = [];
  for (let c = 0; c < hive[0].length; c++) {
    let str = "";
    for (let r = 0; r < hive.length; r++) {
      str += hive[r][c];
    }
    cols.push(str);
  }
  return cols;
};

const getRows = (hive) => {
  let rows = [];
  for (let r = 0; r < hive.length; r++) {
    let str = "";
    for (let c = 0; c < hive[0].length; c++) {
      str += hive[r][c];
    }
    rows.push(str);
  }
  return rows;
};
