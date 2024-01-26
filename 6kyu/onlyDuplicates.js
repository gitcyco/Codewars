// 6 kyu Only Duplicates
//
// Given a string, remove any characters that are unique from the string.
//
// Example:
//
// input: "abccdefee"
//
// output: "cceee"
//
// Answer:
function onlyDuplicates(str) {
  const counts = [...str].reduce(
    (a, e) => (e in a ? a[e]++ : (a[e] = 1), a),
    {}
  );
  return [...str].filter((e) => counts[e] > 1).join("");
}
