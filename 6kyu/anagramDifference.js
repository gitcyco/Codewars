// 6 kyu Anagram difference
//
// Given two words, how many letters do you have to remove from them to make them anagrams?
// Example
//
//     First word : c od e w ar s (4 letters removed)
//     Second word : ha c k er r a nk (6 letters removed)
//     Result : 10
//
// Hints
//
//     A word is an anagram of another word if they have the same letters (usually in a different order).
//     Do not worry about case. All inputs will be lowercase.
//     When you're done with this kata, check out its big brother/sister : https://www.codewars.com/kata/hardcore-anagram-difference
//
// Answer:
function anagramDifference(w1, w2) {
  let count = 0;
  const w1Map = [...w1].reduce(
    (a, e) => (a.has(e) ? a.set(e, a.get(e) + 1) : a.set(e, 1), a),
    new Map()
  );
  const w2Map = [...w2].reduce(
    (a, e) => (a.has(e) ? a.set(e, a.get(e) + 1) : a.set(e, 1), a),
    new Map()
  );
  for (let [w1Item, num] of w1Map) {
    if (!w2Map.has(w1Item)) {
      count += num;
      w1Map.delete(w1Item);
    }
  }
  for (let [w2Item, num] of w2Map) {
    if (!w1Map.has(w2Item)) {
      count += num;
      w2Map.delete(w2Item);
    }
  }
  for (let [w1Item, num] of w1Map) {
    if (num !== w2Map.get(w1Item)) count += Math.abs(num - w2Map.get(w1Item));
  }
  return count;
}
