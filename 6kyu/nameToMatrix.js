// 6 kyu Name to Matrix
//
// Given a name, turn that name into a perfect square matrix
// (nested array with the amount of arrays equivalent to the length of each array).
//
// You will need to add periods (.) to the end of the name if necessary, to turn it into a matrix.
//
// If the name has a length of 0, return "name must be at least one letter"
// Examples
//
// "Bill" ==> [ ["B", "i"],
//              ["l", "l"] ]
//
// "Frank" ==> [ ["F", "r", "a"],
//               ["n", "k", "."],
//               [".", ".", "."] ]
//
// Answer:
const matrixfy = (str) => {
  if (str.length === 0) return "name must be at least one letter";
  const cut = Math.ceil(Math.sqrt(str.length));
  let i = 0;
  return new Array(cut)
    .fill(0)
    .map((_) =>
      new Array(cut).fill(0).map((_) => (i < str.length ? str[i++] : "."))
    );
};
