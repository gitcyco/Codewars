// 5 kyu Break the Caesar!
//
// The Caesar cipher is a notorious (and notoriously simple) algorithm for encrypting a message: each letter is shifted
// a certain constant number of places in the alphabet.
// For example, applying a shift of 5 to the string "Hello, world!" yields "Mjqqt, btwqi!", which is jibberish.
//
// In this kata, your task is to decrypt Caesar-encrypted messages using nothing but your wits, your computer, and a set
// of the 1000 (plus a few) most common words in English in lowercase
// (made available to you as a preloaded variable named WORDS, which you may use in your code as if you had defined it yourself).
// Given a message, your function must return the most likely shift value as an integer.
//
// A few hints:
//
//     Be wary of punctuation
//     Shift values may not be higher than 25
//
//
// Answer:
function breakCaesar(str) {
  let count = new Array(26).fill(0);
  let fixed = str
    .toLowerCase()
    .replace(/[^a-z\s]/g, "")
    .split(" ");
  for (let word of fixed) {
    for (let i = 0; i < 26; i++) {
      let val = rotateWord(word, i);
      if (WORDS.has(val)) count[i]++;
    }
  }
  return 26 - count.indexOf(Math.max(...count));
}

const rotateWord = (str, n) => [...str].reduce((a, e) => (a += rotX(e, n)), "");
const rotX = (str, x) =>
  str.replace(/[a-z]/gi, (e) =>
    String.fromCharCode(
      (((x < 0 ? 26 : 0) + e.charCodeAt(0) - offset(e) + (x < 0 ? x % 26 : x)) %
        26) +
        offset(e)
    )
  );
const offset = (s) => (s.toUpperCase() === s ? 65 : 97);
