// 6 kyu Matrix Multiplier
//
// In mathematics, a matrix (plural matrices) is a rectangular array of numbers.
// Matrices have many applications in programming, from performing transformations in 2D space to machine learning.
//
// One of the most useful operations to perform on matrices is matrix multiplication, which takes a pair
// of matrices and produces another matrix – known as the dot product.
// Multiplying matrices is very different to multiplying real numbers, and follows its own set of rules.
//
// Unlike multiplying real numbers, multiplying matrices is non-commutative:
//    in other words, multiplying matrix a by matrix b will not give the same result as multiplying matrix b by matrix a.
//
// Additionally, not all pairs of matrix can be multiplied. For two matrices to be multipliable, the number of columns in matrix a must match the number of rows in matrix b.
//
// There are many introductions to matrix multiplication online, including at Khan Academy, and in the classic MIT lecture series by Herbert Gross.
//
// To complete this kata, write a function that takes two matrices - a and b - and returns the dot product of those matrices.
// If the matrices cannot be multiplied, return null/None/Nothing or similar.
//
// Each matrix will be represented by a two-dimensional list (a list of lists).
// Each inner list will contain one or more numbers, representing a row in the matrix.
//
// For example, the following matrix:
//
// |1 2|
// |3 4|
//
// Would be represented as:
//
// [[1, 2], [3, 4]]
//
// It can be assumed that all lists will be valid matrices, composed of lists with equal numbers of elements, and which contain only numbers.
// The numbers may include integers and/or decimal points.
//
// Answer:
function getMatrixProduct(a, b) {
  if (!a || a[0].length !== b.length) return null;
  let out = new Array(a.length)
    .fill(0)
    .map((e) => new Array(b[0].length).fill(0));
  let oRow = 0;
  while (oRow < out.length) {
    for (let i = 0; i < a[0].length; i++) {
      for (let j = 0; j < b[0].length; j++) {
        out[oRow][j] += a[oRow][i] * b[i][j];
      }
    }
    oRow++;
  }
  return out;
}
