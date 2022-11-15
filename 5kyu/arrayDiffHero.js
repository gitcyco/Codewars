// 5 kyu Array.diff hero
//
// You know about simple Array.diff task. Now try to solve enhanced version!
//
// Your goal in this kata is to implement a difference function, which subtracts one list from another.
//
// It should remove all values from list a, which are present in list b.
// Each element x in both arrays is integer and 0 ≤ x ≤ 25. And lengths of arrays can reach 5 000 000 elements.
//
// arrayDiffVeryFast([1,2],[1]) == [2]
//
// If a value is present in b, all of its occurrences must be removed from another:
//
// arrayDiffVeryFast([1,2,2,2,3],[2]) == [1,3]
//
// Answer:
function arrayDiffVeryFast(a, b) {
  let fil = Array.from(new Set(b));
  return a.filter((e) => !fil.includes(e));
}

// using a hash map:
function arrayDiffVeryFast_map(a, b) {
  let s = Array.from(new Set(b));
  let obj = {};
  for (let e of s) obj[e] = true;
  return a.filter((e) => !obj[e]);
}
