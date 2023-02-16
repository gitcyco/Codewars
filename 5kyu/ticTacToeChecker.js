// 5 kyu Tic-Tac-Toe Checker
//
// If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? Our goal is to create a function that will check that for us!
//
// Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:
//
// [[0, 0, 1],
//  [0, 1, 2],
//  [2, 1, 0]]
//
// We want our function to return:
//
//     -1 if the board is not yet finished AND no one has won yet (there are empty spots),
//     1 if "X" won,
//     2 if "O" won,
//     0 if it's a cat's game (i.e. a draw).
//
// You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.
//
// Answer:
//
// Brute force solution:
function isSolved(board) {
  for (let i = 0; i < 3; i++) {
    if (checkRow(board, i, 1)) return 1;
    if (checkRow(board, i, 2)) return 2;
    if (checkCol(board, i, 1)) return 1;
    if (checkCol(board, i, 2)) return 2;
    if (checkDiag(board, 1)) return 1;
    if (checkDiag(board, 2)) return 2;
  }
  for (let i = 0; i < 3; i++) {
    if (board[i].includes(0)) return -1;
  }
  return 0;
}

const checkRow = (arr, row, type) => arr[row][0] === type && arr[row][1] === type && arr[row][2] === type;
const checkCol = (arr, col, type) => arr[0][col] === type && arr[1][col] === type && arr[2][col] === type;
const checkDiag = (arr, type) => {
  return (
    (arr[0][0] === type && arr[1][1] === type && arr[2][2] === type) ||
    (arr[2][0] === type && arr[1][1] === type && arr[0][2] === type)
  );
};
