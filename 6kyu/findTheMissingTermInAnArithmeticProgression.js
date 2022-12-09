// 6 kyu Find the missing term in an Arithmetic Progression
//
// An Arithmetic Progression is defined as one in which there is a constant difference
// between the consecutive terms of a given series of numbers.
// You are provided with consecutive elements of an Arithmetic Progression.
// There is however one hitch: exactly one term from the original series is missing from the set of numbers which have been given to you.
// The rest of the given series is the same as the original AP. Find the missing term.
//
// You have to write a function that receives a list, list size will always be at least 3 numbers. The missing term will never be the first or last one.
// Example
//
// findMissing([1, 3, 5, 9, 11]) == 7
//
// PS: This is a sample question of the facebook engineer challenge on interviewstreet.
// I found it quite fun to solve on paper using math, derive the algo that way. Have fun!
//
// Answer:
const findMissing = function (list) {
  let offset = 0;
  for (let i = 0; i < list.length - 1; i++) {
    let val = list[i + 1] - list[i];
    if (val < 0) {
      if (val < offset) offset = val;
    } else {
      if (val > offset) offset = val;
    }
  }
  offset = offset / 2;
  for (let i = 0; i < list.length - 1; i++) {
    if (list[i + 1] - list[i] === offset) continue;
    else return list[i + 1] - offset;
  }
};
