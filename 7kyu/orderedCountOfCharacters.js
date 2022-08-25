// 7 kyu Ordered Count of Characters
//
// Count the number of occurrences of each character and return it as a list of tuples in order of appearance. For empty output return an empty list.
//
// Example:
//
// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
//
// Answer:
const orderedCount = function (text) {
  return [...text.split("").reduce((m, e) => (m.has(e) ? m.set(e, m.get(e) + 1) : m.set(e, 1), m), new Map())];
};
