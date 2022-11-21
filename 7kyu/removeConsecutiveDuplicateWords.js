// 7 kyu Remove consecutive duplicate words
//
// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:
//
// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
//
// --> "alpha beta gamma delta alpha beta gamma delta"
//
// Answer:
const removeConsecutiveDuplicates = (s) =>
  s
    .split(" ")
    .filter((e, i, a) => e !== a[i + 1])
    .join(" ");
