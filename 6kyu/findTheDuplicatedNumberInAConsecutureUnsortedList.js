// 6 kyu Find The Duplicated Number in a Consecutive Unsorted List - Tougher Version
//
// Spin-off of this kata, here you will have to figure out an efficient strategy to solve the problem
// of finding the sole duplicate number among an unsorted array/list of numbers starting from 1 up to n.
//
// Hints: a solution in linear time can be found; using the most intuitive ones to search for duplicates that can run in O(n²) time won't work.
//
// Answer:
const findDup = (arr) => {
  let obj = {};
  for (let v of arr) {
    if (v in obj) return v;
    obj[v] = true;
  }
};
