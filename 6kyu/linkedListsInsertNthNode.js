// 6 kyu Linked Lists - Insert Nth Node
//
// Implement an InsertNth() function (insert_nth() in PHP) which can insert a new node at any index within a list.
//
// InsertNth() is a more general version of the Push() function that we implemented in the first kata listed below.
// Given a list, an index 'n' in the range 0..length, and a data element, add a new node to the list so that it has the given index.
// InsertNth() should return the head of the list.
//
// insertNth(1 -> 2 -> 3 -> null, 0, 7) === 7 -> 1 -> 2 -> 3 -> null)
// insertNth(1 -> 2 -> 3 -> null, 1, 7) === 1 -> 7 -> 2 -> 3 -> null)
// insertNth(1 -> 2 -> 3 -> null, 3, 7) === 1 -> 2 -> 3 -> 7 -> null)
//
// You must throw/raise an exception (ArgumentOutOfRangeException in C#, InvalidArgumentException in PHP) if the index is too large.
//
// The push() and buildOneTwoThree() (build_one_two_three() in PHP) functions do not need to be redefined. The Node class is also preloaded for you in PHP.
//
// Answer:
// Iterative solution:
function Node(data) {
  this.data = data;
  this.next = null;
}

function insertNth(head, index, data) {
  let cur = head;
  let prev = null;
  let i = 0;
  for (; cur && i < index; i++) {
    prev = cur;
    cur = cur.next;
  }
  if (i !== index) throw Error("Error");
  let node = new Node(data);
  node.next = cur;
  if (index > 0) prev.next = node;
  else head = node;
  return head;
}
