// 6 kyu Adding Binary Numbers
//
// ##Task: You have to write a function add which takes two binary numbers as strings and returns their sum as a string.
//
// ##Note:
//
//     You are not allowed to convert binary to decimal & vice versa.
//     The sum should contain No leading zeroes.
//
// ##Examples:
//
// add('111','10'); => '1001'
// add('1101','101'); => '10010'
// add('1101','10111') => '100100'
//
// Answer:
function add(a, b) {
  let carry = 0;
  let out = [];

  const aArr = a.split("").reverse();
  const bArr = b.split("").reverse();
  const len = Math.max(aArr.length, bArr.length);
  for (let i = 0; i < len; i++) {
    let aBit = i < aArr.length ? +aArr[i] : 0;
    let bBit = i < bArr.length ? +bArr[i] : 0;
    let sum = aBit + bBit + carry;
    if (sum < 2) {
      out.push(sum);
      carry = 0;
    } else {
      out.push(sum - 2);
      carry = 1;
    }
  }
  if (carry) out.push(1);
  let result = out.reverse().join("");
  if (result == 0) return "0";
  return result.replace(/^0+1/, "1");
}
