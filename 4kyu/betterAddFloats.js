// 4 kyu better Add Floats
//
// Write a function that returns the sum of the passed arguments.
// The input arguments may be Numbers and/or String representations of numbers.
// The function must return a String.
//
// Example
//
// add(123, "321") === "444";
// add("1234567890.0987654321", "8765432109.9012345678") === "9999999999.9999999999";
// add("1.2.3", 1.23); === NaN;
// add(0.1, 0.0001) === "0.1001";
//
// Notes
//
// The input numbers may be very very big and/or very very small.
// Addition must be exact - no floating point errors.
// The numbers are all positive and base 10.
// Some arguments may not be numbers. In these cases, return NaN.
// Remove trailing zeros and decimal point if possible.
//
// Answer:
function add(...nums) {
  if (nums.length === 0) return 0;
  if (nums.some((n) => n === undefined)) return NaN;
  nums = nums.map((n) => {
    let arr = n.toString().split(".");
    if (arr.length === 1) arr.push("0");
    return arr;
  });
  if (nums.some((n) => n.length > 2)) return NaN;
  if (nums.some((p) => !p.every((n) => /^[0-9].*$/.test(n)))) return NaN;
  let maxL = nums.reduce((a, p) => Math.max(a, p[0].length), 0);
  let maxR = nums.reduce((a, p) => Math.max(a, p[1].length), 0);
  nums = nums.map((p) => {
    p[0] = p[0].padStart(maxL, 0);
    if (p[1]) p[1] = p[1].padEnd(maxR, 0);
    return p;
  });
  let carry = 0;
  let resR = "";
  let resL = "";
  [resR, carry] = sum(nums, maxR, 1, carry);
  [resL, carry] = sum(nums, maxL, 0, carry);
  let out = `${resL}.${resR}`;
  out = out.replace(/0+$/, "").replace(/^0+/, "");
  out = out.replace(/^\./, "0.").replace(/\.$/, "");
  if (carry > 0) out = carry.toString() + out;
  return out;
}

function sum(nums, max, idx, carry = 0) {
  let res = "";
  for (let i = max - 1; i >= 0; i--) {
    let sum = carry + nums.reduce((a, p) => (a = +p[idx][i] + a), 0);
    carry = Math.floor(sum / 10);
    res = (sum % 10).toString() + res;
  }
  return [res || "0", carry];
}
