// 5 kyu Interleaving Arrays
//
// Create a function, that accepts an arbitrary number of arrays and returns a single array generated
// by alternately appending elements from the passed in arguments.
// If one of them is shorter than the others, the result should be padded with empty elements.
//
// Examples:
//
// interleave([1, 2, 3], ["c", "d", "e"]) === [1, "c", 2, "d", 3, "e"]
// interleave([1, 2, 3], [4, 5]) === [1, 4, 2, 5, 3, null]
// interleave([1, 2, 3], [4, 5, 6], [7, 8, 9]) === [1, 4, 7, 2, 5, 8, 3, 6, 9]
// interleave([]) === []
//
// Answer:
function interleave(...args) {
  const len = args.reduce((a, e) => (e.length > a ? e.length : a), 0);
  const out = [];
  for (let i = 0; i < len; i++) {
    for (const arr of args) {
      if (i < arr.length) out.push(arr[i]);
      else out.push(null);
    }
  }
  return out;
}
