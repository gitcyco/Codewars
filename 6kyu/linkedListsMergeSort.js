// 6 kyu Linked Lists - Merge Sort
//
// Write a MergeSort() function which recursively sorts a list in ascending order.
// Note that this problem requires recursion. Given FrontBackSplit() and SortedMerge(), you can write a classic recursive MergeSort().
// Split the list into two smaller lists, recursively sort those lists, and finally merge
// the two sorted lists together into a single sorted list. Return the list.
//
// var list = 4 -> 2 -> 1 -> 3 -> 8 -> 9 -> null
// mergeSort(list) === 1 -> 2 -> 3 -> 4 -> 8 -> 9 -> null
//
// FrontBackSplit() and SortedMerge() need not be redefined. You may call these functions in your solution.
//
// Answer:
function Node(data) {
  this.data = data === undefined ? null : data;
  this.next = null;
}

function mergeSort(list) {
  if (!list) return null;
  if (!list.next) return list;
  let left = new Node();
  let right = new Node();
  frontBackSplit(list, left, right);
  return sortedMerge(mergeSort(left), mergeSort(right));
}
