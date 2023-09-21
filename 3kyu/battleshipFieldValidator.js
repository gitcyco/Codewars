// 3 kyu Battleship field validator
//
// Write a method that takes a field for well-known board game "Battleship" as an argument and returns true
// if it has a valid disposition of ships, false otherwise.
// Argument is guaranteed to be 10*10 two-dimension array.
// Elements in the array are numbers, 0 if the cell is free and 1 if occupied by ship.
//
// Battleship (also Battleships or Sea Battle) is a guessing game for two players.
// Each player has a 10x10 grid containing several "ships" and objective is to destroy enemy's forces by targetting individual cells on his field.
// The ship occupies one or more cells in the grid. Size and number of ships may differ from version to version.
// In this kata we will use Soviet/Russian version of the game.
//
// Before the game begins, players set up the board and place the ships accordingly to the following rules:
//
//     There must be single battleship (size of 4 cells), 2 cruisers (size 3), 3 destroyers (size 2) and 4 submarines (size 1). Any additional ships are not allowed, as well as missing ships.
//     Each ship must be a straight line, except for submarines, which are just single cell.
//     The ship cannot overlap or be in contact with any other ship, neither by edge nor by corner.
//
// This is all you need to solve this kata. If you're interested in more information about the game, visit this link.
//
// Answer:
function validateBattlefield(field) {
  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
    [1, 1],
    [-1, -1],
    [1, -1],
    [-1, 1],
  ];
  const seen = {};
  const ships = [];
  const xLen = (yLen = field.length);
  const walk = (node, ship) => {
    seen[node] = true;
    ship.push(node);
    for (let [dirX, dirY] of dirs) {
      const [xTmp, yTmp] = node;
      const [x, y] = [xTmp + dirX, yTmp + dirY];
      if (
        y >= 0 &&
        y < yLen &&
        x >= 0 &&
        x < xLen &&
        field[y][x] === 1 &&
        !seen[[x, y]]
      ) {
        walk([x, y], ship);
      }
    }
    return ship;
  };
  for (let y = 0; y < field.length; y++) {
    for (let x = 0; x < field.length; x++) {
      if (field[y][x] === 1 && !seen[[x, y]]) {
        const ship = walk([x, y], []);
        ships.push(ship);
      }
    }
  }
  return validateShips(ships);
}

function validateShips(ships) {
  if (ships.length !== 10) return false;
  const counts = { B: 0, C: 0, D: 0, S: 0 };
  for (const ship of ships) {
    if (ship.length === 4) counts.B++;
    if (ship.length === 3) counts.C++;
    if (ship.length === 2) counts.D++;
    if (ship.length === 1) counts.S++;
    if (ship.length > 4) return false;
    if (!isAligned(ship)) return false;
  }
  return counts.B === 1 && counts.C === 2 && counts.D === 3 && counts.S === 4;
}

function isAligned(ship) {
  if (ship.length === 1) return true;
  const [start] = ship;
  const [x, y] = start;
  return ship.every((e) => e[0] === x) || ship.every((e) => e[1] === y);
}
