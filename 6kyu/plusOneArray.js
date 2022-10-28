// 6 kyu +1 Array
//
// Given an array of integers of any length, return an array that has 1 added to the value represented by the array.
//
//     the array can't be empty
//     only non-negative, single digit integers are allowed
//
// Return nil (or your language's equivalent) for invalid inputs.
// Examples
//
// For example the array [2, 3, 9] equals 239, adding one would return the array [2, 4, 0].
//
// [4, 3, 2, 5] would return [4, 3, 2, 6]
//
// Answer:
function upArray(arr) {
  if (arr.some((e) => e < 0 || e > 9 || e == undefined) || !Array.isArray(arr) || arr.length < 1) return null;
  let ptr = 0;
  const rev = arr.reverse();
  rev[ptr] += 1;
  do {
    if (rev[ptr] > 9) {
      rev[ptr++] = 0;
      if (ptr > rev.length - 1) rev.push(1);
      else rev[ptr]++;
    } else break;
  } while (true);
  arr = rev.reverse();
  return arr;
}

// Now for the simple version:
function upArray(arr) {
  if (!arr || arr.length === 0 || arr.some((e) => e < 0 || e > 9)) return null;
  let a = (BigInt(arr.join("")) + 1n).toString().padStart(arr.length, 0);
  return a.split("").map(Number);
}
