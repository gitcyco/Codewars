// 6 kyu Circularly Sorted Array
//
// An array is circularly sorted if the elements are sorted in ascending order, but displaced, or rotated, by any number of steps.
//
// Complete the function/method that determines if the given array of integers is circularly sorted.
// Examples
//
// These arrays are circularly sorted (true):
//
// [2, 3, 4, 5, 0, 1]       -->  [0, 1] + [2, 3, 4, 5]
// [4, 5, 6, 9, 1]          -->  [1] + [4, 5, 6, 9]
// [10, 11, 6, 7, 9]        -->  [6, 7, 9] + [10, 11]
// [1, 2, 3, 4, 5]          -->  [1, 2, 3, 4, 5]
// [5, 7, 43, 987, -9, 0]   -->  [-9, 0] + [5, 7, 43, 987]
// [1, 2, 3, 4, 1]          -->  [1] + [1, 2, 3, 4]
//
// While these are not (false):
//
// [4, 1, 2, 5]
// [8, 7, 6, 5, 4, 3]
// [6, 7, 4, 8]
// [7, 6, 5, 4, 3, 2, 1]
//
// Answer:
function isCircleSorted(arr) {
  let min = [Infinity, -1];
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    if (arr[i] < min[0]) min = [arr[i], i];
  }
  let prev = arr[min[1]];
  for (let i = 0; i < len; i++) {
    let idx = (min[1] + i) % len;
    if (idx === len - 1) if (arr[idx] === arr[min[1]]) continue;
    if (prev > arr[idx]) return false;
    prev = arr[idx];
  }
  return true;
}
