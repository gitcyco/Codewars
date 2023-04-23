// 5 kyu Elementary Arithmetic - Carries Count
//
// In elementary arithmetic a "carry" is a digit that is transferred from one column of digits to another column of more significant digits during a calculation algorithm.
//
// This Kata is about determining the number of carries performed during the addition of multi-digit numbers.
//
// You will receive an input string containing a set of pairs of numbers formatted as follows:
//
// 123 456
// 555 555
// 123 594
//
// And your output should be a string formatted as follows:
//
// No carry operation
// 3 carry operations
// 1 carry operations
//
// Some Assumptions
//
//     Assume that numbers can be of any length.
//     But both numbers in the pair will be of the same length.
//     Although not all the numbers in the set need to be of the same length.
//     If a number is shorter, it will be zero-padded.
//     The input may contain any arbitrary number of pairs.
//
// Answer:
function solve(input) {
  let arr = input.split("\n").map((e) => e.split(" "));
  arr = arr.map((e) => {
    let c = add(e[0], e[1]);
    return c ? `${c} carry operations` : "No carry operation";
  });
  return arr.join("\n");
}

function add(a, b) {
  let carry = 0;
  let carryCount = 0;
  a = a.split("");
  b = b.split("");
  while (a.length || b.length || carry) {
    carry += +a.pop() + +b.pop();
    carry = carry > 9 ? 1 : 0;
    if (carry) carryCount++;
  }
  return carryCount;
}
