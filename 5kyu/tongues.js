// 5 kyu Tongues
//
// Gandalf's writings have long been available for study, but no one has yet figured out what language they are written in.
// Recently, due to programming work by a hacker known only by the code name ROT13, it has been
// discovered that Gandalf used nothing but a simple letter substitution scheme, and further, that it
// is its own inverse|the same operation scrambles the message as unscrambles it.
//
// This operation is performed by replacing vowels in the sequence 'a' 'i' 'y' 'e' 'o' 'u' with the vowel
// three advanced, cyclicly, while preserving case (i.e., lower or upper).
//
// Similarly, consonants are replaced from the sequence 'b' 'k' 'x' 'z' 'n' 'h' 'd' 'c' 'w' 'g' 'p' 'v' 'j' 'q' 't' 's' 'r' 'l' 'm' 'f'
// by advancing ten letters.
//
// So for instance the phrase 'One ring to rule them all.' translates to 'Ita dotf ni dyca nsaw ecc.'
//
// The fascinating thing about this transformation is that the resulting language yields pronounceable words.
// For this problem, you will write code to translate Gandalf's manuscripts into plain text.
//
// Your job is to write a function that decodes Gandalf's writings.
// Input
//
// The function will be passed a string for the function to decode. Each string will
// contain up to 100 characters, representing some text written by Gandalf.
// All characters will be plain ASCII, in the range space (32) to tilde (126).
// Output
//
// For each string passed to the decode function return its translation.
//
// Answer:
function tongues(code) {
  const vowels = ["a", "i", "y", "e", "o", "u"];
  const vKey = vowels.reduce((a, e, i) => ((a[e] = i), a), {});
  const cons = [
    "b",
    "k",
    "x",
    "z",
    "n",
    "h",
    "d",
    "c",
    "w",
    "g",
    "p",
    "v",
    "j",
    "q",
    "t",
    "s",
    "r",
    "l",
    "m",
    "f",
  ];
  const cKey = cons.reduce((a, e, i) => ((a[e] = i), a), {});

  let msg = "";
  for (let char of code) {
    if (char.toLowerCase() in vKey) {
      let idx = vKey[char.toLowerCase()];
      let dec = vowels[rotate(vowels, idx, -3)];
      if (isUpper(char)) msg += dec.toUpperCase();
      else msg += dec;
    } else if (char.toLowerCase() in cKey) {
      let idx = cKey[char.toLowerCase()];
      let dec = cons[rotate(cons, idx, -10)];
      if (isUpper(char)) msg += dec.toUpperCase();
      else msg += dec;
    } else msg += char;
  }
  return msg;
}
function isUpper(char) {
  return char.toUpperCase() === char;
}
function rotate(arr, index, n) {
  return (((index + n) % arr.length) + arr.length) % arr.length;
}
