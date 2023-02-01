// 6 kyu Simple Fun #52: Pair Of Shoes
//
// Yesterday you found some shoes in your room. Each shoe is described by two values:
//
// type indicates if it's a left or a right shoe;
// size is the size of the shoe.
//
// Your task is to check whether it is possible to pair the shoes you found in such a way that each pair consists of a right and a left shoe of an equal size.
// Example
//
// For:
//
// shoes = [[0, 21],
//          [1, 23],
//          [1, 21],
//          [0, 23]]
//
// the output should be true;
//
// For:
//
// shoes = [[0, 21],
//          [1, 23],
//          [1, 21],
//          [1, 23]]
//
// the output should be false.
// Input/Output
//
//     [input] 2D integer array shoes
//     Array of shoes. Each shoe is given in the format [type, size], where type is either 0 or 1 for left and right respectively, and size is a positive integer.
//
//     Constraints:
//     2 ≤ length of the array of shoes ≤ 50
//     1 ≤ size of shoe ≤ 100
//
//     [output] a boolean value
//
//     true if it is possible to pair the shoes, false otherwise.
//
// Answer:
function pairOfShoes(shoes) {
  const obj = {};
  for (let shoe of shoes) {
    if (shoe[1] in obj) {
      obj[shoe[1]][shoe[0]]++;
    } else {
      obj[shoe[1]] = { 0: 0, 1: 0 };
      obj[shoe[1]][shoe[0]] = 1;
    }
  }
  return Object.values(obj).every((e) => e[0] === e[1]);
}
