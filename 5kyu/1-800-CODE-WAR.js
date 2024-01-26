// 5 kyu 1-800-CODE-WAR
//
// If your phone buttons have letters, then it is easy remember long phone numbers by making words from the substituted digits.
//
// https://en.wikipedia.org/wiki/Phoneword
// [source: imgur.com]
//
// This is common for 1-800 numbers
// 1-800 number format
//
// This format probably varies for different countries, but for the purpose of this Kata here are my rules:
//
// A 1-800 number is an 11 digit phone number which starts with a 1-800 prefix.
//
// The remaining 7 digits can be written as a combination of 3 or 4 letter words. e.g.
//
//     1-800-CODE-WAR
//     1-800-NEW-KATA
//     1-800-GOOD-JOB
//
// The - are included just to improve the readability.
// Story
//
// A local company has decided they want to reserve a 1-800 number to help with advertising.
//
// They have already chosen what words they want to use, but they are worried that maybe that
// same phone number could spell out other words as well. Maybe bad words. Maybe embarrassing words.
//
// They need somebody to check for them so they can avoid any accidental PR scandals!
//
// That's where you come in...
// Kata Task
//
// There is a preloaded array of lots of 3 and 4 letter (upper-case) words:
//
// Preloaded.WORDS
//
// Given the 1-800 (phone word) number that the company wants to use, you need to check against
// all known words and return the set of all possible 1-800 numbers which can be formed using those same digits.
// Notes
//
//     The desired phone-word number provided by the company is formatted properly. No need to check.
//     All the letters are upper-case. No need to check.
//     Only words in the list are allowed.
//
// Answer:
function check1800(str) {
  const wordMap = Preloaded.WORDS.map((word) => [word, getNum(word)]).reduce(
    (a, [word, num]) => {
      if (num in a) a[num].push(word);
      else a[num] = [word];
      return a;
    },
    {}
  );
  let [wordA, wordB] = str.replace("1-800-", "").split("-");
  let combined = getNum(wordA) + getNum(wordB);
  let wordAMap = [];
  let wordBMap = [];
  if (wordMap[combined.slice(0, 4)])
    wordAMap = wordAMap.concat(wordMap[combined.slice(0, 4)]);
  if (wordMap[combined.slice(0, 3)])
    wordAMap = wordAMap.concat(wordMap[combined.slice(0, 3)]);
  if (wordMap[combined.slice(3)])
    wordBMap = wordBMap.concat(wordMap[combined.slice(3)]);
  if (wordMap[combined.slice(4)])
    wordBMap = wordBMap.concat(wordMap[combined.slice(4)]);
  const set = new Set();
  for (let wA of wordAMap) {
    for (let wB of wordBMap) {
      let newStr = `1-800-${wA}-${wB}`;
      if (newStr.length === 14) set.add(newStr);
    }
  }
  return set;
}

function getNum(word) {
  const key = {
    A: 2,
    B: 2,
    C: 2,
    D: 3,
    E: 3,
    F: 3,
    G: 4,
    H: 4,
    I: 4,
    J: 5,
    K: 5,
    L: 5,
    M: 6,
    N: 6,
    O: 6,
    P: 7,
    Q: 7,
    R: 7,
    S: 7,
    T: 8,
    U: 8,
    V: 8,
    W: 9,
    X: 9,
    Y: 9,
    Z: 9,
  };
  let num = "";
  for (let c of word) {
    num += key[c];
  }
  return num;
}
