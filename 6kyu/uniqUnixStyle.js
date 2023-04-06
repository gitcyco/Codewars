// 6 kyu uniq (UNIX style)
//
// Implement a function which behaves like the uniq command in UNIX.
//
// It takes as input a sequence and returns a sequence in which all duplicate elements following each other have been reduced to one instance.
//
// Example:
//
// ["a", "a", "b", "b", "c", "a", "b", "c"]  =>  ["a", "b", "c", "a", "b", "c"]
//
// Answer:
const uniq = (arr) => arr.filter((e, i, a) => e !== a[i - 1]);
