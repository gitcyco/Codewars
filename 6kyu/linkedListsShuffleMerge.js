// 6 kyu Linked Lists - Shuffle Merge
//
// Linked Lists - Shuffle Merge
//
// Write a ShuffleMerge() function that takes two lists and merges their nodes together to make one list, taking nodes alternately between the two lists.
// So ShuffleMerge() with 1 -> 2 -> 3 -> null and 7 -> 13 -> 1 -> null should yield 1 -> 7 -> 2 -> 13 -> 3 -> 1 -> null.
// If either list runs out, all the nodes should be taken from the other list. ShuffleMerge() should return the new list.
// The solution depends on being able to move nodes to the end of a list.
//
// var first = 3 -> 2 -> 8 -> null
// var second = 5 -> 6 -> 1 -> 9 -> 11 -> null
// shuffleMerge(first, second) === 3 -> 5 -> 2 -> 6 -> 8 -> 1 -> 9 -> 11 -> null
//
// If one of the argument lists is null, the returned list should be the other linked list (even if it is also null).
// No errors need to be thrown in ShuffleMerge().
//
// Answer:
function Node(data) {
  this.data = data === undefined ? null : data;
  this.next = null;
}

function shuffleMerge(first, second) {
  if (!first) return second;
  if (!second) return first;
  let head = new Node(first.data);
  first = first.next;
  let cur = head;
  let flag = false;
  let tmp;
  while (first || second) {
    if (flag && first) {
      cur.next = new Node(first.data);
      first = first.next;
    } else if (!flag && second) {
      cur.next = new Node(second.data);
      second = second.next;
    } else {
      if (!first && second) {
        cur.next = new Node(second.data);
        second = second.next;
      } else if (!second && first) {
        cur.next = new Node(first.data);
        first = first.next;
      }
    }
    cur = cur.next;
    flag = !flag;
  }
  return head;
}
