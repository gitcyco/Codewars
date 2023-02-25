// 5 kyu Scytale encoder/decoder (ancient Spartans cipher)
//
// In ancient times, Spartans and Greeks invented interesting way of encryption called Scytale.
//
// A scytale
//
// For encrypting their messages, they made two wooden cylinders of the same thickness and length (one for each general usually).
// The encryption was produced by winding a strap around a wooden cylinder (from left to right) and writting the text horizontally, across the strap.
// Unwinded strap contained shifted letters.
//
// ##Example: CodeWars Scytale Kata text on the cylinder with 6 sides/rows, would be written like this:
//
// | C | o | d | e |
// | W | a | r | s |
// |   | S | c | y |
// | t | a | l | e |
// |   | K | a | t |
// | a |   |   |   |
//
// and unwound text would than read: **CW t aoaSaK drcla esyet ** on a strap.
//
// ##Task: Create encode and decode functions, with two partameters text and cylinder sides:
//
// Encode(message, cylinderSides) and
// Decode(message, cylinderSides)
//
// both returning string.
//
// ##Notes:
//
//     Try to imagine a strap, winded around a wooden stick (pay attention on spaces ;) )
//     Be careful: try to encode your message, than decode encoded text back and see if it is the same as original message
//     Expect original message to be without leading or trailing spaces
//
// Answer:
class Scytale {
  static Decode(msg, sides) {
    let rowLen = Math.ceil(msg.length / sides);
    let arr = new Array(sides).fill(0).map((e) => (e = new Array(rowLen).fill(" ")));
    let x = 0;
    let y = 0;
    for (let i = 0; i < rowLen * sides; i++) {
      if (y >= sides) {
        x++;
        y = 0;
      }
      if (i < msg.length) arr[y][x] = msg[i];
      y++;
    }
    let dec = "";
    for (let row of arr) {
      dec += row.join("");
    }
    return dec.trim();
  }

  static Encode(msg, sides) {
    let rowLen = Math.ceil(msg.length / sides);
    let arr = new Array(sides).fill(0).map((e) => (e = new Array(rowLen).fill(" ")));
    let x = 0;
    let y = 0;
    for (let c of msg) {
      if (x >= rowLen) {
        y++;
        x = 0;
      }
      arr[y][x] = c;
      x++;
    }
    let enc = "";
    x = y = 0;
    for (let i = 0; i < rowLen * sides; i++) {
      if (y >= sides) {
        x++;
        y = 0;
      }
      enc += arr[y][x];
      y++;
    }
    return enc.trim();
  }
}
