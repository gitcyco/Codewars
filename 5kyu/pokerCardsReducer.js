// 5 kyu Poker cards reducer
//
// In this kata your task is to reduce values in input array which are poker cards symbols or its codes.
// Reduction is about getting card symbols or card codes witouth offset which is added by card color ( symbols: ['c','d','h','s'] -> club, diamond, heart, spade ).
//
// This kind of transformation (getting root value of a card) is very helpfull for evaluating poker hand which is subject of next future kata 'Calculating poker hand'.
//
// Base (reducted) cards codes and symbols are (index: code, value: human readable symbol): ['A','2','3','4','5','6','7','8','9','T','J','Q','K']
// Requirements:
//
// You can get three types of input:
//
//     non array argument - you must return null
//     empty array - you must return an empty array
//     array of symbols (strings) - you must return reducted symbols sorted by symbol code
//      with ascending order of the symbols: reduceCards(['Td','Qd', '8c','Ac', 'Ks','Qs']) returns ["A", "8", "T", "Q", "Q", "K"]
//     array of codes(integers) - you must return reducted codes sorted by its value with ascending order reduceCards([51, 7, 24, 22, 50, 0]) returns [0, 7, 9, 11, 11, 12]
//
// Additional info:
//
// You may find usefull to solve my previous kata about encoding/decoding poker hands: Poker cards encoder/decoder
// To ilustrate how card codes are propagated over colors this table is very handfull:
//
//   c    |     d     |    h     |    s
// ---------------------------------------
//  0: A      13: A      26: A      39: A
//  1: 2      14: 2      27: 2      40: 2
//  2: 3      15: 3      28: 3      41: 3
//  3: 4      16: 4      29: 4      42: 4
//  4: 5      17: 5      30: 5      43: 5
//  5: 6      18: 6      31: 6      44: 6
//  6: 7      19: 7      32: 7      45: 7
//  7: 8      20: 8      33: 8      46: 8
//  8: 9      21: 9      34: 9      47: 9
//  9: T      22: T      35: T      48: T
// 10: J      23: J      36: J      49: J
// 11: Q      24: Q      37: Q      50: Q
// 12: K      25: K      38: K      51: K
//
// Answer:
const suit = ["c", "d", "h", "s"];
const key = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K"];

function reduceCards(input) {
  if (!Array.isArray(input)) return null;
  if (input.length === 0) return [];
  if (typeof input[0] === "string") {
    return decode(encode(input)).map((e) => key[e]);
  } else {
    return decode(input);
  }
}

function encode(input) {
  const hand = [];
  for (let card of input) {
    const [val, type] = card.split("");
    hand.push(key.indexOf(val) + suit.indexOf(type) * 13);
  }
  return hand.sort((a, b) => a - b);
}

function decode(input) {
  const hand = [];
  for (let code of input) {
    hand.push(code % 13);
  }
  return hand.sort((a, b) => a - b);
}
