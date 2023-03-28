// 6 kyu Linked Lists - Sorted Intersect
//
// Linked Lists - Sorted Intersect
//
// Write a SortedIntersect() function which creates and returns a list representing the intersection of two lists that are sorted in increasing order.
// Ideally, each list should only be traversed once. The resulting list should not contain duplicates.
//
// var first = 1 -> 2 -> 2 -> 3 -> 3 -> 6 -> null
// var second = 1 -> 3 -> 4 -> 5 -> -> 6 -> null
// sortedIntersect(first, second) === 1 -> 3 -> 6 -> null
//
// Answer:
function Node(data) {
  this.data = data === undefined ? null : data;
  this.next = null;
}

function sortedIntersect(first, second) {
  if (!first || !second) return null;
  let head = new Node(null);
  let cur = head;
  let prev = null;
  let tail = null;
  while (first || second) {
    if (first && second) {
      if (first.data === second.data) {
        if (first.data !== prev) {
          prev = first.data;
          cur.data = first.data;
          cur.next = new Node(null);
          tail = cur;
          cur = cur.next;
        }
        first = first.next;
        second = second.next;
      } else if (first.data < second.data) {
        first = first.next;
      } else if (first.data > second.data) {
        second = second.next;
      }
    } else break;
  }
  if (cur.data === null && tail) tail.next = null;
  return head.data !== null ? head : null;
}
