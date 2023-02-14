// 5 kyu Sierpinski's Gasket
//
// Write a function that takes an integer n and returns the nth iteration of the fractal known as Sierpinski's Gasket.
//
// Here are the first few iterations. The fractal is composed entirely of L and white-space characters;
// each character has one space between it and the next (or a newline).
// 0
//
// L
//
// 1
//
// L
// L L
//
// 2
//
// L
// L L
// L   L
// L L L L
//
// 3
//
// L
// L L
// L   L
// L L L L
// L       L
// L L     L L
// L   L   L   L
// L L L L L L L L
//
// Answer:

// Unoptimized
function sierpinski(n) {
  let max = 2 ** n;
  let arr = new Array(max).fill(0).map((e, i) => new Array(i + 1).fill(0).map((x) => " "));
  coords(0, 0, max, arr);
  arr = arr.map((e) => e.join(" ")).join("\n");
  return arr;
}

const coords = function (x, y, size, arr) {
  if (size <= 1) arr[y][x] = "L";
  else {
    let halved = size / 2;
    coords(x, y, halved, arr);
    coords(x, y + halved, halved, arr);
    coords(x + halved, y + halved, halved, arr);
  }
};
