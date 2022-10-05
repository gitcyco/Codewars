// 6 kyu Group Anagrams
//
// Your job is to group the words in anagrams.
// What is an anagram ?
//
// star and tsar are anagram of each other because you can rearrange the letters for star to obtain tsar.
// Example
//
// A typical test could be :
//
// // input
// groupAnagrams(["tsar", "rat", "tar", "star", "tars", "cheese"]);
//
// // output
// [
//   ["tsar", "star", "tars"],
//   ["rat", "tar"],
//   ["cheese"]
// ]
//
// Helpers
//
// The method assertSimilarUnsorted has been preloaded for you in the Solution Sandbox only to compare to arrays without relying on the sorting of the elements.
//
// assertSimilarUnsorted([[1,2], [3]], [[3], [1,2]]); // returns true
//
// Hvae unf !
//
// Answer:
function groupAnagrams(words) {
  return Object.values(words.reduce((a, e) => (a[srt(e)] ? a[srt(e)].push(e) : (a[srt(e)] = [e]), a), {}));
}
const srt = (s) => s.split("").sort().join("");
