// 5 kyu isInt32(int, byteLength)
//
// Write a function that returns true if a given value is a true Int32 integer. It should accept two arguments:
//
//     int this value is the basis for any testing done. It should be a primitive 32-bit integer number value.
//     (Be careful: JavaScript can have 64-bit floats that happen to have no decimal place, and so may look like integers. These are not valid Int32 values.)
//     byteLength is an optional value (may be omitted or be a null or undefined value). If provided, it will be a primitive integer from 0 to 32.
//     For the int to be valid, it should have no data (1s) beyond (byteLength) bits, counting from right to left.
//
// Example:
//
// int = 5, byteLength = 5
// int == 00000000000000000000000000000101 // binary
// //                                ^^^^^ // 5 bits from the end
// // so the "byte" looks like: 00101
// // there are no 1s outside the "byte," so...
// isInt32(/* int: */ 5, /* byteLength: */ 5) == true
//
// int = 16, byteLength = 3
// int == 00000000000000000000000000010000 // binary
// //                                  ^^^ // 3 bits from the end
// // so the "byte" looks like: 000
// // there is one 1 outside the "byte," so...
// isInt32(/* int: */ 16, /* byteLength: */ 3) == false
//
// int = -1, byteLength = 28
// int == 11111111111111111111111111111111 // binary
// //         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ // 28 bits from the end
// // so the "byte" looks like: 1111111111111111111111111111
// // there are four 1s outside the "byte," so...
// isInt32(/* int: */ -1, /* byteLength: */ 28) == false
//
// Answer:
function isInt32(int, bitLen = 32) {
  if (bitLen === null) bitLen = 32;
  if (!Number.isInteger(int) || !/^-?[0-9]+$/.test(int)) return false;
  const bits = (int >>> 0).toString(2).padStart(32, 0);
  return bitLen < 32 ? !bits.split("").reverse().slice(bitLen).includes("1") : true;
}
