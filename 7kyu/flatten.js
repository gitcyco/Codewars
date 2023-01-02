// 7 kyu Flatten
//
// Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.
//
// flatten([1,2,3]) // => [1,2,3]
// flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
// flatten([[[1,2,3]]]) // => [[1,2,3]]
//
// Answer:
const flatten = (arr) => {
  let out = [];
  arr.forEach((e) => (Array.isArray(e) ? e.forEach((a) => out.push(a)) : out.push(e)));
  return out;
};
