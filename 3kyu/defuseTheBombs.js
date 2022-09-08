// 3 kyu Defuse the bombs!
//
// There are a series of 10 bombs about to go off! Defuse them all! Simple, right?
//
// Note: This is not an ordinary Kata, but more of a series of puzzles.
// The point is to figure out what you are supposed to do, then how to do it. Instructions are intentionally left vague.
//
// Answer:
Bomb.diffuse(42);
Bomb.diffuse();
Bomb.diffuse();
Bomb.diffuse();
Bomb.diffuse();
Bomb.diffuse();
Bomb.diffuse(global.BombKey);
const diffuseTheBomb = () => true;
Bomb.diffuse();
Bomb.diffuse(3.14159);
let startDate = new Date();
startDate.setFullYear(startDate.getFullYear() - 4);
Bomb.diffuse(startDate);

const code4 = {
  set key(val) {
    this.num = val;
  },
  num: 0,
  get key() {
    return this.num + 1;
  },
};
Bomb.diffuse(code4);

let code3 = { val: true };
code3.toString = function () {
  if (this.val) {
    this.val = false;
    return 9;
  } else return 11;
};
Bomb.diffuse(code3);

let nt = 0;
Math.random = function () {
  switch (nt) {
    case 0:
      nt++;
      return 1;
    case 1:
      nt++;
      return 1;
    case 2:
      nt++;
      return 0.5;
    default:
      return 0.5;
  }
};
Bomb.diffuse(42);

nt = 0;
Array.prototype.toString = function () {
  switch (nt) {
    case 0:
      nt++;
      return "0";
    case 1:
      nt++;
      return "4";
    case 2:
      nt++;
      return "2";
    default:
      return 0.5;
  }
};

Bomb.diffuse("eWVz");
