// 5 kyu Mr. right & Mr. Wrong #1: Guess a number
//
// Correctly guess a number according to the descriptions given from Mr. Right and Mr. Wrong.
//
// Mr. Right always tell the truth, Mr. Wrong always tell the lies.
// Input
//
// Two arrays of strings named 'right' and 'wrong'
//
// String Options are 'The number is {description}' where the possible descriptions are
//
//     odd
//     even
//     divisible by {number}
//     more than {number}
//     less than {number}
//     starting with {number}
//     ending with {number}
//
// Special reminder:
//
// If the Mr. Wrong states that the number is less than.../more than..., the real situation
// should be more than.../less than...and not more than or equals to.../less than or equals to...
//
// Output
//
//     Return either:
//         The number guessed from the descriptions
//         None, if:
//             no number meets the conditions
//             more than one number meet the conditions
//
// Constraints
//
//     Numbers will never be above 2000
//
// Examples
// Example 1
// Input
//
// right=[
// 'The number is an even number',
// 'The number is divisible by 4',
// 'The number is more than 10'
// ]
// wrong=[
// 'The number is more than 20',
// 'The number is divisible by 3',
// 'The number is ending with 0'
// ]
//
// Output
//
// 16
//
// Example 2
// Input
//
// right=[
// "The number is more than 492",
// "The number is less than 1374",
// "The number is divisible by 11",
// "The number is divisible by 13",
// "The number is starting with 1",
// "The number is divisible by 7"]
// wrong=[]
//
// Output
//
// 1001
//
// Example 3
// Input
//
// right=[
// 'The number is an even number',
// 'The number is divisible by 4'
// ]
// wrong=[
// 'The number is an even number',
// 'The number is divisible by 3'
// ]
//
// Output
//
// None
//
// Example 4
// Input
//
// right=[
// 'The number is an even number',
// 'The number is divisible by 4'
// ]
// wrong=[
// 'The number is divisible by 3'
// ]
//
// Output
//
// None
//
// Answer:
function guessNumber(right, wrong) {
  const rFuncs = [];
  const wFuncs = [];

  right.forEach((e) => getFunc(e, rFuncs));
  wrong.forEach((e) => getFunc(e, wFuncs, true));
  const ans = [];
  for (let i = 1; i < 2001; i++) {
    let found = true;
    if (rFuncs.length) {
      if (!rFuncs.every((e) => e(i))) found = false;
    }
    if (wFuncs.length) {
      if (wFuncs.some((e) => e(i))) found = false;
    }
    if (found) ans.push(i);
  }
  if (ans.length !== 1) return null;
  return ans[0];
}

const isEven = (n) => n % 2 === 0;
const isOdd = (n) => n % 2 !== 0;

const divBy = (n) => (x) => x % n === 0;
const mT = (n) => (x) => x > n;
const lT = (n) => (x) => x < n;
const sW = (n) => (x) => +x.toString().startsWith(n);
const eW = (n) => (x) => +x.toString().endsWith(n);

const getFunc = (e, arr, wrong = false) => {
  if (e.includes("even")) arr.push(isEven);
  if (e.includes("odd")) arr.push(isOdd);
  if (e.includes("divisible")) {
    let num = +e.match(/[0-9]+/g);
    arr.push(divBy(num));
  }
  if (e.includes("more than")) {
    let num = +e.match(/[0-9]+/g);
    if (wrong) arr.push(mT(num - 1));
    else arr.push(mT(num));
  }
  if (e.includes("less than")) {
    let num = +e.match(/[0-9]+/g);
    if (wrong) arr.push(lT(num + 1));
    else arr.push(lT(num));
  }
  if (e.includes("starting")) {
    let num = +e.match(/[0-9]+/g);
    arr.push(sW(num));
  }
  if (e.includes("ending")) {
    let num = +e.match(/[0-9]+/g);
    arr.push(eW(num));
  }
};
