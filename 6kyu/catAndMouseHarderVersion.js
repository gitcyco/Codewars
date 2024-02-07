// 6 kyu Cat and Mouse - Harder Version
//
// You will be given a string (x) featuring a cat 'C', a dog 'D' and a mouse 'm'.
// The rest of the string will be made up of '.'.
//
// You need to find out if the cat can catch the mouse from its current position.
// The cat can jump at most (j) characters, and cannot jump over the dog.
//
// So:
//
//     if j = 5:
//
//     ..C.....m...D returns 'Caught!' <-- not more than j characters between the cat and the mouse
//
//     .....C............m......D returns 'Escaped!' <-- as there are more than j characters between the two, the cat cannot jump far enough
//
//     if j = 10:
//
//     ...m.........C...D returns 'Caught!' <-- Cat can jump far enough and jump is not over dog
//
//     ...m....D....C....... returns 'Protected!' <-- Cat can jump far enough, but dog is in the way, protecting the mouse
//
//     Finally, if not all three animals are present, return 'boring without all three'
//
// Answer:
function catMouse(x, j) {
  const locs = {
    dog: x.indexOf("D"),
    cat: x.indexOf("C"),
    mouse: x.indexOf("m"),
  };
  if (Object.values(locs).includes(-1)) return "boring without all three";
  if (Math.abs(locs.cat - locs.mouse) - 1 > j) return "Escaped!";
  let start = Math.min(locs.cat, locs.mouse);
  for (let i = start + 1; i < x.length; i++) {
    if (x[i] === "D") return "Protected!";
    if (/[Cm]/.test(x[i])) {
      if (Math.abs(start - i) - 1 <= j) return "Caught!";
    }
  }
}
