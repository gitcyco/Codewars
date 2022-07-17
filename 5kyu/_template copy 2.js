// 5 kyu sliceBits(int, from, count)
//
// JavaScript numbers are stored as bits (ones and zeros) in the memory of the computer. JavaScript has a number of "bitwise" operators (operators that do things to the bits themselves rather than the number). If you use integers, you can easily move bits around... even set and read them individually.
//
// Your task is to write a function that will take and integer, slice up its bits as required, and a new integer returned containing only those bits. It should take three arguments:
//
//     int, an integer value to work on.
//     from, an integer value for the index to begin slicing from (zero-based, like arrays). If this value is negative, it should go that number from the end of the bits*. So if -3 is used, the first bit will be three from the end, at index 29. If from is less than -32* (which would point to a non-existent bit off the left side of the int), it should default to 0.
//     count, an optional integer value for how many bits to include in the slice. If this argument was omitted (or is set to null or undefined), all bits after from should be extracted.
//
// Bear in mind that the bit in position 0 will be the "sign" bit, either a 1 for a negative number, or a 0 for a positive number.
//
// * : All JavaScript numbers are 64-bit, unless they are "cast" into an Int32, a 32-bit integer, which obviously has 32 bits. All integers referred to in this kata are these 32-bit Int32s. Any bitwise operation will "cast" any number into its Int32 form, and bitwise operators assume they are working with an Int32.
//
// Any values passed in that are not integers should be coerced into integers (n | 0).
//
// The extracted bits should make up a new integer, pushed all the way to the right. Let's have a look at some examples to make things a little clearer:
//
// sliceBits(1934281621, -15, 5) == 18
// // 01110011010010101100101110010101 == 1934281621
// //       from (-15) ^-------------- 15 from the right
// //                   ---- count (5)
// // 00000000000000000000000000010010 == 18
//
// sliceBits(1934281621, 17, 5) == 18
// // 01110011010010101100101110010101 == 1934281621
// // -----------------^ from (17)
// //                  ---- count (5)
// // 00000000000000000000000000010010 == 18
//
// Answer:
function solution(input) {
  return input;
}

// The test cases are broken, there are strange floats for the from and count and
// no indication of how to handle them. Tried ceil, round, floor, none of them work
// for all test cases. Gonna shelve this for now.

function sliceBits(int, from, count) {
  if (!count) count = 32;
  console.log(int, from, count);
  if (from < -32) from = 0;
  if (from < 0) from = 32 - -from;
  from = Math.ceil(from);
  count = Math.ceil(count);
  console.log("2nd: ", int, from, count);
  console.log(
    (int >>> 0)
      .toString(2)
      .padStart(32, 0)
      .split("")
      .slice(from, from + count)
  );
  let str = (int >>> 0)
    .toString(2)
    .padStart(32, 0)
    .split("")
    .slice(from, from + count);
  console.log("out: ", str, str.join(""));

  return ~~parseInt(str.join(""), 2);
  console.log((int >>> 0).toString(2));
  console.log(int, from, count);
  int = int >>> 0;

  if (from < -32) from = 0;
  if (from < 0) from = 32 - -from;
  if (count + from > 32) count = 0;
  let out = parseInt((((((int << from) >>> 0) >>> from) >> (32 - from - count)) >>> 0).toString(2));
  console.log(int, from, count, out);
  return out;
}
