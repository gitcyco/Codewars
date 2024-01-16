// 6 kyu Most Consecutive Zeros of a Binary Number
//
// Given a string (str) containing a base-10 integer between 0 and 10000, convert the integer to its binary representation.
// At that point, obtain a count of the maximum amount of consecutive 0s.
// From there, return the count in written form with a capital letter.
//
// max_consec_zeros("9") => "Two"
// max_consec_zeros("13") => "One"
// max_consec_zeros("15") => "Zero"
// max_consec_zeros("42") => "One"
// max_consec_zeros("550") => "Three"
//
// In the very first example, we have an argument of "9" which is being passed to the method.
// The binary representation of 9 is 1001 which can be read as: one, zero, zero, one.
// There are, at most, two consecutive 0s, resulting in the integer 2 as the value of the count.
// The output in the block of code above reflects the final step of taking 2 from standard form to the written form "Two" as prompted.
//
// In the very last example, we have an argument of "550" which is being passed to the method.
// The binary representation of 550 is 1000100110 which can be read as: one, zero, zero, zero, one, zero, zero, one, one, zero.
// There are, at most, three consecutive 0s, resulting in the integer 3 as the value of the count.
// The output in the block of code above reflects the final step of taking 3 from standard form to the written form of "Three" as prompted.
//
// One way, among many, to visualize the end of each step might look like:
//
// max_consec_zeros("777")
// 1: "777"
// 2: 777
// 3: 1100001001
// 4: 4
// 5: "Four"
// max_consec_zeros("777") => "Four"
//
// Answer:

// Shifting to the right bitwise and counting 0's
function maxConsecZeros(n) {
  const key = [
    "Zero",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
  ];
  let max = 0;
  let curCount = 0;
  let num = +n;
  while (num > 0) {
    if (num & 1) {
      max = Math.max(max, curCount);
      curCount = 0;
    } else {
      curCount++;
    }
    num >>= 1;
  }
  return key[max];
}

// Using strings:
function maxConsecZeros_str(n) {
  const key = [
    "Zero",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
  ];
  const bin = parseInt(n).toString(2);
  let zeros = (bin.match(/0+/g) || []).sort((a, b) => b.length - a.length);
  let len = zeros.length > 0 ? zeros[0].length : 0;
  return key[len];
}
