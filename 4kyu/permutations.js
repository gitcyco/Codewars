// 4 kyu Permutations
//
// In this kata you have to create all permutations of a non empty input string and remove duplicates, if present.
// This means, you have to shuffle all letters from the input in all possible orders.
//
// Examples:
//
// * With input 'a'
// * Your function should return: ['a']
// * With input 'ab'
// * Your function should return ['ab', 'ba']
// * With input 'aabb'
// * Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
//
// The order of the permutations doesn't matter.
//
// Answer:
function permutations(str) {
  let arr = perm(str.split("")).map((e) => e.join(""));
  return Array.from(new Set(arr));
}

function perm(arr) {
  if (!arr.length) return [[]];
  return arr.flatMap((e, i) => perm(arr.filter((_, j) => i !== j)).map((va) => [e, ...va]));
}
