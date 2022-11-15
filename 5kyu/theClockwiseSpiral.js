// 5 kyu The Clockwise Spiral
//
// Do you know how to make a spiral? Let's test it!
//
// Classic definition: A spiral is a curve which emanates from a central point, getting progressively farther away as it revolves around the point.
//
// Your objective is to complete a function createSpiral(N) that receives an integer N and returns
// an NxN two-dimensional array with numbers 1 through NxN represented as a clockwise spiral.
//
// Return an empty array if N < 1 or N is not int / number
//
// Examples:
//
// N = 3 Output: [[1,2,3],[8,9,4],[7,6,5]]
//
// 1    2    3
// 8    9    4
// 7    6    5
//
// N = 4 Output: [[1,2,3,4],[12,13,14,5],[11,16,15,6],[10,9,8,7]]
//
// 1   2   3   4
// 12  13  14  5
// 11  16  15  6
// 10  9   8   7
//
// N = 5 Output: [[1,2,3,4,5],[16,17,18,19,6],[15,24,25,20,7],[14,23,22,21,8],[13,12,11,10,9]]
//
// 1   2   3   4   5
// 16  17  18  19  6
// 15  24  25  20  7
// 14  23  22  21  8
// 13  12  11  10  9
//
// Answer:
function createSpiral(n) {
  if (n !== parseInt(n) || n < 1) return [];
  let arr = Array(n)
    .fill(0)
    .map((e) => (e = Array(n).fill(0)));
  let x = (y = mincol = minrow = 0);
  let maxcol = arr[0].length - 1;
  let maxrow = arr.length - 1;
  let num = 1;
  if (!maxrow && !maxcol) return [[1]];

  while (true) {
    for (x = mincol; x < maxcol; x++) arr[y][x] = num++;
    for (y = minrow; y < maxrow; y++) arr[y][x] = num++;
    for (x = maxcol; x > mincol; x--) arr[y][x] = num++;
    for (y = maxrow; y > minrow; y--) arr[y][x] = num++;

    minrow++;
    mincol++;
    maxrow--;
    maxcol--;
    x = minrow;
    y = mincol;
    if (x > maxcol || y > maxrow) break;
    if (minrow === maxrow && mincol === maxcol) {
      arr[y][x] = num;
      break;
    }
    if (num > n * n) break;
  }

  return arr;
}
