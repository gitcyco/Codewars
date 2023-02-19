// 6 kyu Linked Lists - Recursive Reverse
//
// Linked Lists - Recursive Reverse
//
// Write a Recursive Reverse() function that recursively reverses a linked list. You may want to use a nested function for the recursive calls.
//
// var list = 2 -> 1 -> 3 -> 6 -> 5 -> null
// reverse(list) === 5 -> 6 -> 3 -> 1 -> 2 -> null
//
// Answer:
function Node(data) {
  this.data = data === undefined ? null : data;
  this.next = null;
}

function reverse(head) {
  if (!head || !head.next) return head;

  const recurse = (cur, prev, next = null) => {
    if (cur.next) next = cur.next;
    cur.next = prev;
    if (!next) return cur;
    return recurse(next, cur);
  };
  return recurse(head, null);
}
