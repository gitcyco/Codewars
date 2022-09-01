// 5 kyu Luck check
//
// In some countries of former Soviet Union there was a belief about lucky tickets.
// A transport ticket of any sort was believed to posess luck if sum of digits on the left half of its number was equal
// to the sum of digits on the right half. Here are examples of such numbers:
//
// 003111    #             3 = 1 + 1 + 1
// 813372    #     8 + 1 + 3 = 3 + 7 + 2
// 17935     #         1 + 7 = 3 + 5  // if the length is odd, you should ignore the middle number when adding the halves.
// 56328116  # 5 + 6 + 3 + 2 = 8 + 1 + 1 + 6
//
// Such tickets were either eaten after being used or collected for bragging rights.
//
// Your task is to write a funtion luck_check(str), which returns true/True if argument is string decimal
// representation of a lucky ticket number, or false/False for all other numbers.
// It should throw errors for empty strings or strings which don't represent a decimal number.
//
// Answer:
function luckCheck(tk) {
  if (!tk || /[^\d]/gi.test(tk)) throw new Error("invalid");
  let arr = tk.split("").map(Number);
  if (arr.length % 2 !== 0) arr.splice(Math.floor(arr.length / 2), 1);
  const [a, b] = [arr.slice(0, arr.length / 2), arr.slice(arr.length / 2)];
  return a.reduce((ac, e) => ac + e, 0) === b.reduce((ac, e) => ac + e, 0);
}
