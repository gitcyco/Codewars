// 4 kyu Catching Car Mileage Numbers
//
//     "7777...8?!??!", exclaimed Bob, "I missed it again! Argh!"
//     Every time there's an interesting number coming up, he notices and then promptly forgets.
//     Who doesn't like catching those one-off interesting mileage numbers?
//
// Let's make it so Bob never misses another interesting number.
// We've hacked into his car's computer, and we have a box hooked up that reads mileage numbers.
// We've got a box glued to his dash that lights up yellow or green depending on whether it receives a 1 or a 2 (respectively).
//
// It's up to you, intrepid warrior, to glue the parts together.
// rite the function that parses the mileage number input, and returns a 2 if the number
// is "interesting" (see below), a 1 if an interesting number occurs within the next two miles, or a 0 if the number is not interesting.
//
// Note: In Haskell, we use No, Almost and Yes instead of 0, 1 and 2.
// "Interesting" Numbers
//
// Interesting numbers are 3-or-more digit numbers that meet one or more of the following criteria:
//
//     Any digit followed by all zeros: 100, 90000
//     Every digit is the same number: 1111
//     The digits are sequential, incementing†: 1234
//     The digits are sequential, decrementing‡: 4321
//     The digits are a palindrome: 1221 or 73837
//     The digits match one of the values in the awesomePhrases array
//
//     † For incrementing sequences, 0 should come after 9, and not before 1, as in 7890.
//     ‡ For decrementing sequences, 0 should come after 1, and not before 9, as in 3210.
//
// So, you should expect these inputs and outputs:
//
// // "boring" numbers
// isInteresting(3, [1337, 256]);    // 0
// isInteresting(3236, [1337, 256]); // 0
//
// // progress as we near an "interesting" number
// isInteresting(11207, []); // 0
// isInteresting(11208, []); // 0
// isInteresting(11209, []); // 1
// isInteresting(11210, []); // 1
// isInteresting(11211, []); // 2
//
// // nearing a provided "awesome phrase"
// isInteresting(1335, [1337, 256]); // 1
// isInteresting(1336, [1337, 256]); // 1
// isInteresting(1337, [1337, 256]); // 2
//
// Error Checking
//
//     A number is only interesting if it is greater than 99!
//     Input will always be an integer greater than 0, and less than 1,000,000,000.
//     The awesomePhrases array will always be provided, and will always be an array, but may be empty.
//     (Not everyone thinks numbers spell funny words...)
//     You should only ever output 0, 1, or 2.
//
// Answer:
function isInteresting(num, phrases) {
  if (num < 98) return 0;
  for (let p of phrases) {
    if (num === p - 2 || num === p - 1) return 1;
    if (num === p) return 2;
  }
  let result = 0;
  result = Math.max(isPal(num), result);
  result = Math.max(isZeros(num), result);
  result = Math.max(isSame(num), result);
  result = Math.max(isInc(num), result);
  result = Math.max(isDec(num), result);
  return result;
}

const isPal = (num) => {
  if (num < 100) return 0;
  if (num.toString() === revNum(num)) return 2;
  if ((num + 1).toString() === revNum(num + 1)) return 1;
  if ((num + 2).toString() === revNum(num + 2)) return 1;
  return 0;
};
const isZeros = (num) => {
  if (/^[1-9]0+$/.test((num + 1).toString())) return 1;
  if (/^[1-9]0+$/.test((num + 2).toString())) return 1;
  if (/^[1-9]0+$/.test(num.toString())) return 2;
  return 0;
};
const isSame = (num) => {
  if (num < 100) return 0;
  if (/^(\d)\1+$/.test(num.toString())) return 2;
  if (/^(\d)\1+$/.test((num + 1).toString())) return 1;
  if (/^(\d)\1+$/.test((num + 2).toString())) return 1;
  return 0;
};
const isInc = (num) => {
  const digs = [];
  digs.push([2, num.toString().split("")]);
  digs.push([1, (num + 1).toString().split("")]);
  digs.push([1, (num + 2).toString().split("")]);
  for (let [res, val] of digs) {
    if (val[val.length - 1] === "0") val[val.length - 1] = "10";
    let seq = true;
    let start = +val[0];
    for (let i = 1; i < val.length; i++) {
      if (+val[i] !== start + i) {
        seq = false;
        break;
      }
    }
    if (seq) return res;
  }
  return 0;
};
const isDec = (num) => {
  if (num < 100) return 0;
  const digs = [];
  digs.push([2, num.toString().split("")]);
  digs.push([1, (num + 1).toString().split("")]);
  digs.push([1, (num + 2).toString().split("")]);
  for (let [res, val] of digs) {
    let seq = true;
    let start = +val[0];
    for (let i = 1; i < val.length; i++) {
      if (+val[i] !== start - i) {
        seq = false;
        break;
      }
    }
    if (seq) return res;
  }
  return 0;
};
const revNum = (num) => {
  return num.toString().split("").reverse().join("");
};
