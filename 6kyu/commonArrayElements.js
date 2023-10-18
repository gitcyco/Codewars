// 6 kyu Common array elements
//
// Given three arrays of integers, return the sum of elements that are common in all three arrays.
//
// For example:
//
// common([1,2,3],[5,3,2],[7,3,2]) = 5 because 2 & 3 are common in all 3 arrays
// common([1,2,2,3],[5,3,2,2],[7,3,2,2]) = 7 because 2,2 & 3 are common in the 3 arrays
//
// Answer:
function common(a, b, c) {
  const aMap = a.reduce(
    (ac, e) => (ac.has(e) ? ac.set(e, ac.get(e) + 1) : ac.set(e, 1), ac),
    new Map()
  );
  const bMap = b.reduce(
    (ac, e) => (ac.has(e) ? ac.set(e, ac.get(e) + 1) : ac.set(e, 1), ac),
    new Map()
  );
  const cMap = c.reduce(
    (ac, e) => (ac.has(e) ? ac.set(e, ac.get(e) + 1) : ac.set(e, 1), ac),
    new Map()
  );
  a = a.filter((e) => bMap.has(e) && cMap.has(e));
  return [...new Set(a)].reduce(
    (a, e) => a + e * Math.min(aMap.get(e), bMap.get(e), cMap.get(e)),
    0
  );
}
