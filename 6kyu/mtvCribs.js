// 6 kyu MTV Cribs
//
// Given n representing the number of floors build a beautiful multi-million dollar mansions like the ones in the example below:
//
//      /\
//     /  \
//    /    \
//   /______\  number of floors 3
//   |      |
//   |      |
//   |______|
//
//      /\
//     /  \
//    /____\
//    |    |   2 floors
//    |____|
//
//      /\
//     /__\    1 floor
//     |__|
//
// Note: whitespace should be preserved on both sides of the roof.
// Number of floors will go up to 30. There will be no tests with invalid input.
//
// Answer:
function myCrib(n, tmp = n) {
  let top = "";
  let bottom = "";
  let row = "";
  for (let i = 0; i < n + 1; i++) {
    row += " ".repeat(tmp) + "/" + " ".repeat(n - tmp);
    row += row.replace(/\//g, "\\").split("").reverse().join("") + "\n";
    if (tmp === 0) row = row.replace(/ /g, "_");
    top += row;
    row = "";
    tmp--;
    if (i < n) {
      row += "|" + " ".repeat(n * 2) + "|";
      if (i === n - 1) {
        row = row.replace(/ /g, "_");
      } else row += "\n";
      bottom += row;
      row = "";
    }
  }
  return top + bottom;
}
