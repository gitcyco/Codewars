// 7 kyu Cubes in the box
//
// Your job is to write a function f(x,y,z) to count how many cubes of any size can fit inside a x*y*z box.
// For example, a 2*2*3 box has 12 1*1*1 cubes, 2 2*2*2 cubes, so a total of 14 cubes in the end.
// See the animation below for a visual description of the task!
// Notes:
//
//     x,y,z are strictly positive and will not be too big.
//
// Answer:
function f(...coords) {
  let max = 0;
  while (true) {
    max += coords.reduce((a, e) => a * e);
    coords = coords.map((e) => e - 1);
    if (coords.some((e) => e === 0)) return max;
  }
}
