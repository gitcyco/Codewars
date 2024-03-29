// 5 kyu Numbers that are a power of their sum of digits
//
// The number 81 has a special property, a certain power of the sum of its digits is equal to 81 (nine squared).
// Eighty one (81), is the first number in having this property (not considering numbers of one digit).
// The next one, is 512. Let's see both cases with the details
//
// 8 + 1 = 9 and 92 = 81
//
// 512 = 5 + 1 + 2 = 8 and 83 = 512
//
// We need to make a function that receives a number as argument n and returns the n-th term of this sequence of numbers.
// Examples (input --> output)
//
// 1 --> 81
//
// 2 --> 512
//
// Answer:
function powerSumDigTerm(n) {
  let arr = [];
  for (let i = 2; i <= 143; i++) {
    let j = 2;
    let val = i ** j;
    while (val <= Number.MAX_SAFE_INTEGER) {
      let sum = val
        .toString()
        .split("")
        .map(Number)
        .reduce((a, e) => a + e, 0);
      if (sum === i) arr.push(val);
      j++;
      val = i ** j;
    }
  }
  arr.sort((a, b) => a - b);
  return arr[n - 1];
}
