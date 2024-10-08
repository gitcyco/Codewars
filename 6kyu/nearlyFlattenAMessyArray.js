// 6 kyu Nearly Flatten a Messy Array
//
// You are given an array that of arbitrary depth that needs to be nearly flattened into a 2 dimensional array.
// The given array's depth is also non-uniform, so some parts may be deeper than others.
//
// All of lowest level arrays (most deeply nested) will contain only integers and none of the higher level arrays
// will contain anything but other arrays.
// All arrays given will be at least 2 dimensional.
// All lowest level arrays will contain at least one element.
//
// Your solution should be an array containing all of the lowest level arrays and only these.
// The sub-arrays should be ordered by the smallest element within each, so [1,2] should preceed [3,4,5]. Note: integers will not be repeated.
//
// For example:
//
// If you receive [[[1,2,3],[4,5]],[6,7]], your answer should be [[1,2,3],[4,5],[6,7]].
//
// Answer:
function nearFlatten(nested, out = []) {
  for (let item of nested) {
    if (Array.isArray(item[0])) {
      nearFlatten(item, out);
    } else {
      out.push(item);
    }
  }
  return out.sort((a, b) => Math.min(...a) - Math.min(...b));
}
