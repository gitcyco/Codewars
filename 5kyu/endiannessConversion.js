// 5 kyu Endianness Conversion
//
// In computing, there are two primary byte order formats: big-endian and little-endian.
// Big-endian is used primarily for networking (e.g., IP addresses are transmitted in big-endian)
// whereas little-endian is used mainly by computers with microprocessors.
//
// Here is an example (using 32-bit integers in hex format):
//
// Little-Endian: 00 6D F4 C9 = 7,206,089
//
// Big-Endian: C9 F4 6D 00 = 3,388,239,104
//
// Your job is to write a function that switches the byte order of a given integer.
// The function should take an integer n for the first argument, and the bit-size of the integer for the second argument.
// The bit size must be a power of 2 greater than or equal to 8.
// Your function should return a None value if the integer is negative, if the specified
// bit size is not a power of 2 that is 8 or larger, or if the integer is larger than the specified bit size can handle.
// In this kata, assume that all integers are unsigned (non-negative)
// and that all input arguments are integers (no floats, strings, None/nil values, etc.).
// Remember that you will need to account for padding of null (00) bytes.
//
// Answer:

// Using strings:
function switchEndian(n, bits) {
  if (n <= 0 || !isPowerOf2(bits) || bits < 8 || n >= 2 ** bits) return null;
  let str = n.toString(16).padStart(bits / 4, 0);
  return parseInt(str.match(/../g).reverse().join(""), 16);
}

function isPowerOf2(n) {
  return Number.isInteger(Math.log(n) / Math.log(2));
}
