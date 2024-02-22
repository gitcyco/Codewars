// 4 kyu Boggle Word Checker
//
// Write a function that determines whether a string is a valid guess in a Boggle board, as per the rules of Boggle.
// A Boggle board is a 2D array of individual characters, e.g.:
//
// [ ["I","L","A","W"],
//   ["B","N","G","E"],
//   ["I","U","A","O"],
//   ["A","S","R","L"] ]
//
// Valid guesses are strings which can be formed by connecting adjacent cells
// (horizontally, vertically, or diagonally) without re-using any previously used cells.
//
// For example, in the above board "BINGO", "LINGO", and "ILNBIA" would all be valid guesses, while "BUNGIE", "BINS", and "SINUS" would not.
//
// Your function should take two arguments (a 2D array and a string) and return true or false depending
// on whether the string is found in the array as per Boggle rules.
//
// Test cases will provide various array and string sizes (squared arrays up to 150x150 and strings up to 150 uppercase letters).
// You do not have to check whether the string is a real word or not, only if it's a valid guess.
//
// Answer:
function checkWord(board, word) {
  if (!word || !board) return false;
  let start = word[0];
  for (let x = 0; x < board[0].length; x++) {
    for (let y = 0; y < board.length; y++) {
      if (board[y][x] === start) {
        if (processBoard(board, word, 0, x, y)) return true;
      }
    }
  }
  return false;
}

function processBoard(board, word, index, x, y) {
  let xLen = board[0].length;
  let yLen = board.length;
  const dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1],
  ];
  if (index === word.length - 1) return true;

  for (let [xDir, yDir] of dirs) {
    let [newX, newY] = [x + xDir, y + yDir];
    let save = board[y][x];
    if (
      newX >= 0 &&
      newX < xLen &&
      newY >= 0 &&
      newY < yLen &&
      board[newY][newX] === word[index + 1]
    ) {
      board[y][x] = false;
      let result = processBoard(board, word, index + 1, newX, newY);
      board[y][x] = save;
      if (result) return true;
    }
  }
  return false;
}
