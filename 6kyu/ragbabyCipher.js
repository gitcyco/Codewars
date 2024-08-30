// 6 kyu Ragbaby cipher
//
// The ragbaby cipher is a substitution cipher that encodes/decodes a text using a keyed
// alphabet and their position in the plaintext word they are a part of.
//
// To encrypt the text This is an example. with the key cipher, first construct a keyed alphabet:
//
// c    i    p    h    e    r    a    b    d    f    g    j    k    l    m    n    o    q    s    t    u    v    w    x    y    z
//
// Then, number the letters in the text as follows:
//
// T    h    i    s         i    s         a    n         e    x    a    m    p    l    e    .
// 1    2    3    4         1    2         1    2         1    2    3    4    5    6    7
//
// To obtain the encoded text, replace each character of the word with the letter in the keyed
// alphabet the corresponding number of places to the right of it (wrapping if necessary).
// Non-alphabetic characters are preserved to mark word boundaries.
//
// Our ciphertext is then Urew pu bq rzfsbtj.
// Task
//
// Wirate functions encode and decode which accept 2 parameters:
//
//     text - string - a text to encode/decode
//     key - string - a key
//
// Notes
//
//     handle lower and upper case in text string
//     key consists of only lowercase characters
//
// Answer:
function encode(text, key) {
  return rotate(text, getAlpha(key), true);
}

function decode(text, key) {
  return rotate(text, getAlpha(key), false);
}

function isUp(char) {
  return char !== char.toLowerCase();
}
function getAlpha(key) {
  return (
    [...new Set(key)].join("") +
    "abcdefghijklmnopqrstuvwxyz".replace(new RegExp(`[${key}]`, "gi"), "")
  );
}
function rotate(text, alpha, enc = true) {
  return text.replace(/\w+/gi, (word) => {
    let str = "";
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      let tmp = -1;
      if (/[a-z]/i.test(char)) {
        if (enc) {
          tmp = (alpha.indexOf(char.toLowerCase()) + i + 1) % 26;
        } else {
          tmp = alpha.indexOf(char.toLowerCase()) - (i % 26) - 1;
          if (tmp < 0) tmp = 26 + tmp;
        }
        str += isUp(char) ? alpha[tmp].toUpperCase() : alpha[tmp];
      } else str += char;
    }
    return str;
  });
}
