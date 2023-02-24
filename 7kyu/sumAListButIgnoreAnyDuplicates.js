// 7 kyu Sum a list but ignore any duplicates
//
// Please write a function that sums a list, but ignores any duplicate items in the list.
//
// For instance, for the list [3, 4, 3, 6] , the function should return 10.
//
// Answer:
function sumNoDuplicates(numList) {
  const obj = numList.reduce((a, e) => (e in a ? a[e]++ : (a[e] = 1), a), {});
  return numList.reduce((a, e) => (a += obj[e] > 1 ? 0 : e), 0);
}
