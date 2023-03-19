// 6 kyu Binary Coded Decimal
//
// Convert a number to a binary coded decimal (BCD).
//
// You can assume input will always be an integer. If it is a negative number then simply
// place a minus sign in front of the output string.
// Output will be a string with each digit of the input represented as 4 bits (0 padded) with a space between each set of 4 bits.
//
// Ex.
//
// n =  10 -> "0001 0000"
// n = -10 -> "-0001 0000"
//
// Answer:
function toBcd(num) {
  return num
    .toString()
    .replace(/\d/g, (e) => (+e).toString(2).padStart(4, "0") + " ")
    .trim();
}
