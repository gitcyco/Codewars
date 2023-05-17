// 6 kyu intToBits(int, length)
//
// Computers don't think in strings, numbers and objects. They think in binary. Ones and zeros.
//
// In JavaScript, the only way of working with the bits is with numbers.
// There are a number of operators that allow you to manipulate number representations at the bit level.
// But it's not that easy to visualise what's going on under the hood.
// Floats are a little tricky, so don't worry about those; we'll just be working with integers, here.
//
// Your task is to write a function that takes an integer int and returns a string of ones and zeros that represents the binary of that integer.
// If the provided int value is not a primitive integer, null should be returned.
//
// The function should also accept an optional argument length, which should be a primitive number integer between 1 and 32 (inclusive).
// The bits should be reduced down to length characters if able by removing zeros from the left.
// The number of bits should be a minimum of length, with padding zeros added to the left as needed.
// If the number of bits cannot be reduced to length, then just return the bits as they are.
// If no valid length was provided, the length should default to 32 (the number of bits in a real JavaScript number).
//
// Examples:
//
// intToBits(5) // no length specified; defaults to 32
//  == "00000000000000000000000000000101";
//
// intToBits(-1) // no length specified; defaults to 32
//  == "11111111111111111111111111111111";
//
// intToBits(1, 1) // (minimum) length specified
//  == "1";
// intToBits(5, 8) // (minimum) length specified; result padded with zeros before value
//  == "00000101";
//
// Answer:
function intToBits(int, length = 32) {
  if (
    length < 1 ||
    length > 32 ||
    int < 0 ||
    typeof length === "string" ||
    isNaN(length)
  )
    length = 32;
  return parseInt(int) === int
    ? (int >>> 0).toString(2).padStart(length, 0)
    : null;
}
