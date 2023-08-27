// 7 kyu Find the K-th last element of a singly linked list
//
// Write a function that given the head of singly linked list, and an index (0 based) counted from the end of the list, returns the element corresponding to that index.
//
// The function must return a falsy value for invalid input values, like an out of range index.
//
// So for the list 66 -> 42 -> 13 -> 666, getKthLastElement() with index 2 should return the Node (predefined object for list nodes) corresponding to 42.
//
// Other examples:
//
// getKthLastElement(1 -> 2 -> 3 -> null, 0).data === 3
// getKthLastElement(1 -> 2 -> 3 -> null, 1).data === 2
//
// Answer:
/* Predefined object for list nodes

function Node(data, next = null) {
  this.data = data;
  this.next = next;
}

*/

function getKthLastElement(head, k, cur = head, length = 0) {
  for (; cur; cur = cur.next) length++;
  if (k >= length) return null;
  cur = head;
  for (let idx = 0; idx < length - k - 1; idx++) cur = cur.next;
  return cur;
}
