// 6 kyu Round Robin Sorting
//
// Santa believes in fairness and wants to give each giftee a present in turn rather than handing
// all of an individual's presents to them, then all to the next person, and so on.
//
// Santa would much rather give one to Sarah, one to Mo, one to Kai, one to Charlie, and cycle through until he's out of presents.
// But if Sarah is only given 10 presents and after the 10th cycle Santa has no more for her, Santa will continue
// the loop of gift-giving but excluding Sarah.
//
// Write a function which accepts a string[] and returns a string[], re-ordering the random input passed into Santa's defined order.
//
// The output array length will be the same as the input length.
// The sorted list should be alphabetical by name.
//
// Examples:
//
// input:        "Sarah", "Charlie", "Mo"
// santa sorted: "Charlie", "Mo", "Sarah"
//
// input:        "Sarah", "Sarah", "Charlie", "Charlie", "Charlie", "Mo", "Mo"
// santa sorted: "Charlie", "Mo", "Sarah", "Charlie", "Mo", "Sarah", "Charlie"
//
// Answer:
function santaSort(unsortedNames) {
  let key = [...new Set(unsortedNames)].sort((a, b) => a.localeCompare(b));
  const counts = unsortedNames.reduce(
    (a, e) => (e in a ? a[e]++ : (a[e] = 1), a),
    {}
  );
  const out = [];
  while (Object.keys(counts).length > 0) {
    for (let name of key) {
      if (name in counts) {
        out.push(name);
        counts[name]--;
        if (counts[name] === 0) delete counts[name];
      }
    }
  }
  return out;
}
