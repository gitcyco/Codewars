// 6 kyu Linked Lists - Iterative Reverse
//
// Linked Lists - Iterative Reverse
//
// Write an iterative Reverse() function that reverses a linked list. Ideally, Reverse() should only need to make one pass of the list.
//
// var list = 2 -> 1 -> 3 -> 6 -> 5 -> null
// reverse(list)
// list === 5 -> 6 -> 3 -> 1 -> 2 -> null
//
// The push() and buildOneTwoThree() functions need not be redefined.
//
// Answer:
function Node(data) {
  this.data = data === undefined ? null : data;
  this.next = null;
}

function reverse(list) {
  if (!list) return list;
  if (!list.next) return list;
  let vals = [];
  let cur = list;
  while (cur) {
    vals.push(cur.data);
    cur = cur.next;
  }
  cur = list;
  while (cur) {
    cur.data = vals.pop();
    cur = cur.next;
  }
  return;
}
