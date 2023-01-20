// 7 kyu Sum ALL the arrays!
//
// You are given an array of values.
//
// Sum every number value in the array, and any nested arrays (to any depth).
//
// Ignore all other types of values.
//
// Answer:
function arraySum(arr) {
  let sum = 0;
  for (let item of arr) {
    if (typeof item === "number" || Array.isArray(item)) {
      sum += Array.isArray(item) ? arraySum(item) : item;
    }
  }
  return sum;
}
