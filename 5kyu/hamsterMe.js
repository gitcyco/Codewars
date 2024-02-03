// 5 kyu Hamster me
//
// Hamsters are rodents belonging to the subfamily Cricetinae.
// The subfamily contains about 25 species, classified in six or seven genera.
// They have become established as popular small house pets, and, partly because
// they are easy to breed in captivity, hamsters are often used as laboratory animals. Wikipedia Link
//
// hamster
//
// And you could have skipped the introduction as it is entirely unrelated to your task. xD
// Task
//
// Write a function that accepts two inputs: code and message and returns an encrypted string from message using the code.
// The code is a string that generates the key in the way shown below:
//
//  1  | h a m s t e r
//  2  | i b n   u f
//  3  | j c o   v g
//  4  | k d p   w
//  5  | l   q   x
//  6  |         y
//  7  |         z
//
// All letters from code get number 1. All letters which directly follow letters from code get number 2
// (unless they already have a smaller number assigned), etc.
// It's difficult to describe but it should be easy to understand from the example below:
//
//  1  | a e h m r s t
//  2  | b f i n     u
//  3  | c g j o     v
//  4  | d   k p     w
//  5  |     l q     x
//  6  |             y
//  7  |             z
//
// How does the encoding work using the hamster code?
//
// a => a1
// b => a2
// c => a3
// d => a4
// e => e1
// f => e2
// ...
//
// And applying it to strings :
//
// hamsterMe('hamster', 'hamster')   => h1a1m1s1t1e1r1
// hamsterMe('hamster', 'helpme')    => h1e1h5m4m1e1
//
// And you probably started wondering what will happen if there is no a in the code.
// Just add these letters after the last available letter (in alphabetic order) in the code.
//
// The key for code hmster is:
//
//  1  | e h m r s t
//  2  | f i n     u
//  3  | g j o     v
//  4  |   k p     w
//  5  |   l q     x
//  6  |           y
//  7  |           z
//  8  |           a
//  9  |           b
// 10  |           c
// 11  |           d
//
// Additional notes
//
// The code will have at least 1 letter.
// Duplication of letters in code is possible and should be handled.
// The code and message consist of only lowercase letters.
//
// Answer:
function hamsterMe(code, message) {
  let letters = [...new Set(code.split("").sort((a, b) => a.localeCompare(b)))];
  const key = {};
  for (let i = 1; i <= letters.length; i++) {
    let num = 1;
    let char = letters[i - 1];
    let cur = letters[i - 1].charCodeAt(0);
    let next = i < letters.length - 1 ? letters[i].charCodeAt(0) : 255;
    while (cur < next && cur < 123) {
      key[getc(cur++)] = `${char}${num++}`;
    }
    if (letters[0] !== "a" && i === letters.length) {
      cur = "a".charCodeAt(0);
      next = letters[0].charCodeAt(0);
      while (cur < next) {
        key[getc(cur++)] = `${char}${num++}`;
      }
    }
  }
  return [...message].map((e) => key[e]).join("");
}

const getc = (n) => String.fromCharCode(n);
