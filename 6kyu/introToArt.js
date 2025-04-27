// 6 kyu IntroToArt
//
// Help prepare for the entrance exams to art school.
//
// It is known in advance that this year, the school chose the symmetric letter “W” as the object
// for the image, and the only condition for its image is only the size that is not known
// in advance, so as training, you need to come up with a way that accurately depicts the object.
//
// Write a function that takes an integer as height and returns a list of strings with a line-by-line image of the object.
//
// Below is an example function:
//
// # height = 3 should return:
// [
//   "*   *   *",
//   " * * * * ",
//   "  *   *  "
// ]
//
// # height = 5 should return:
// [
//   "*       *       *",
//   " *     * *     * ",
//   "  *   *   *   *  ",
//   "   * *     * *   ",
//   "    *       *    "
// ]
//
// Return an empty list for height < 2.
//
// Answer:
function getW(height) {
  if (height < 2) return [];
  let width = height + (height - 1) * 3;
  const w = new Array(height).fill(0).map((e) => new Array(width).fill(" "));
  let y = 0;
  let dir = -1;
  for (let x = 0; x < width; x++) {
    w[y][x] = "*";
    if (y === height - 1 || y === 0) dir = -dir;
    y += dir;
  }
  return w.map((e) => e.join(""));
}
