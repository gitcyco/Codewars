// 5 kyu Simple Fun #266: K Bits Digits
//
// Return a list of all numbers that have no more than n bits, such that exactly k of them are set to 1.
// Input/Output
//
// [input] integer n
//
// The maximum number of bits the number can have.
//
// 1 ≤ n ≤ 20.
//
// [input] integer k
//
// The number of bits equal to 1.
//
// 0 ≤ k ≤ 20.
//
// [output] an integer array
//
// The numbers with at most n bits k of which are set to 1 sorted in ascending order.
// Example
//
// For n = 4 and k = 1, the output should be [1,2,4,8].
//
// 110 = 12, which obviously has 1 number of bits, and the only bit is 1.
//
// 210 = 102, which has 2 number of bits, with the first one equal to 1.
//
// 410 = 1002, which has 3 number of bits, with the first one equal to 1.
//
// 810 = 10002, which has 4 number of bits, with the first one equal to 1.
//
// For n = 5 and k = 5, the output should be [31].
//
// 3110 = 111112, which exactly has 5 bits qualt to 1.
//
// For n = 3 and k = 20, the output should be [].
//
// No such a number that has not greater 3 bits and exactly has 20 bits qualt to 1.
//
// For n = 20 and k = 0, the output should be [0].
//
// 010 = 02, which exactly has 0 bits qualt to 1.
//
// Answer:
function kBitsDigits(n, k) {
  let max = parseInt("1".repeat(k > n ? n : k).padEnd(n, "0"), 2);
  let out = [];
  for (let i = 0; i <= max; i++) {
    let oneBits = (i.toString(2).match(/1/gi) || []).length;
    if (oneBits === k) out.push(i);
  }
  return out;
}
