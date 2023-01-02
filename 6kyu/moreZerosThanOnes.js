// 6 kyuMore Zeros than Ones
//
// Create a moreZeros function which will receive a string for input, and return an array
// (or null terminated string in C) containing only the characters from that string whose binary
// representation of its ASCII value consists of more zeros than ones.
//
// You should remove any duplicate characters, keeping the first occurence of any such duplicates, so they are
// in the same order in the final array as they first appeared in the input string.
//
// Examples
//
// 'abcde' === ["1100001", "1100010", "1100011", "1100100", "1100101"]
//                True       True       False      True       False
//
//         --> ['a','b','d']
//
// 'DIGEST'--> ['D','I','E','T']
//
// All input will be valid strings of length > 0. Leading zeros in binary should not be counted.

// Answer:
function moreZeros(s) {
  let arr = s.split("").map((e) => (e = { ltr: e, bin: e.charCodeAt(0).toString(2) }));
  arr = arr
    .map((e) => {
      e.ones = e.bin.split("").filter((e) => e === "1").length;
      e.zeros = e.bin.split("").filter((e) => e === "0").length;
      return e;
    })
    .filter((e) => e.zeros > e.ones)
    .map((e) => e.ltr);
  return Array.from(new Set(arr));
}
