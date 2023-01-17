// 7 kyu Sum of odd numbers
//
// Given the triangle of consecutive odd numbers:
//
//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
//
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)
//
// 1 -->  1
// 2 --> 3 + 5 = 8
//
// Answer:
// Super simple:
const rowSumOddNumbers = (n) => n ** 3;

// Long and nested loops, terrible
function rowSumOddNumbers(n) {
  let odd = 0;
  let cur = 1;
  for (let i = 1; i <= n; i++) {
    for (let k = 1; k <= i; k++) {
      if (i === n) odd += cur;
      cur += 2;
    }
  }
  return odd;
}
