// 6 kyu Data compression using run-length encoding
//
// Run-length encoding (RLE) is a very simple form of lossless data compression in which
// runs of data are stored as a single data value and count.
//
// A simple form of RLE would encode the string "AAABBBCCCD" as "3A3B3C1D" meaning, first there
// are 3 A, then 3 B, then 3 C and last there is 1 D.
//
// Your task is to write a RLE encoder and decoder using this technique.
// The texts to encode will always consist of only uppercase characters, no numbers.
//
// Answer:
function encode(input) {
  return input.replace(/((.)\2*)/g, (group) => {
    return `${group.length}${group[0]}`;
  });
}

function decode(input) {
  return input.replace(/[0-9]+[A-Z]/g, (group) => {
    let numPart = group.match(/[0-9]+/)[0];
    let charPart = group.match(/[A-Z]/)[0];
    return `${charPart.repeat(numPart)}`;
  });
}
