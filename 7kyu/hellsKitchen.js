// 7 kyu Hells Kitchen
//
// Gordon Ramsay shouts. He shouts and swears. There may be something wrong with him.
//
// Anyway, you will be given a string of four words. Your job is to turn them in to Gordon language.
//
// Rules:
//
// Obviously the words should be Caps, Every word should end with '!!!!', Any letter 'a' or 'A' should become '@', Any other vowel should become '*'.
//
// Answer:
// Prettier made this one kind of funky, leaving it lol
const gordon = (a) =>
  a
    .split(" ")
    .map((e) => e.replace(/a/gi, "@").replace(/[aeiou]/gi, "*") + "!!!!")
    .join(" ")
    .toUpperCase();
