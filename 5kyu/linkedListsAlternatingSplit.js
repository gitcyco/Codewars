// 5 kyu Linked Lists - Alternating Split
//
// Linked Lists - Alternating Split
//
// Write an AlternatingSplit() function that takes one list and divides up its nodes to make two smaller lists.
// The sublists should be made from alternating elements in the original list.
// So if the original list is a -> b -> a -> b -> a -> null then one sublist should be a -> a -> a -> null and the other should be b -> b -> null.
//
// var list = 1 -> 2 -> 3 -> 4 -> 5 -> null
// alternatingSplit(list).first === 1 -> 3 -> 5 -> null
// alternatingSplit(list).second === 2 -> 4 -> null
//
// For simplicity, we use a Context object to store and return the state of the two linked lists.
// A Context object containing the two mutated lists should be returned by AlternatingSplit().
//
// If the passed in head node is null/None/nil or a single node, throw an error.
//
// Answer:
function Node(data) {
  this.data = data;
  this.next = null;
}

function Context(first, second) {
  this.first = first;
  this.second = second;
}

function alternatingSplit(head) {
  if (!head || !head.next) throw new Error("error");
  let listA = new Node(head.data);
  let listB = new Node(head.next.data);
  head = head.next;
  let flip = true;
  let curA = listA;
  let curB = listB;
  while (head.next) {
    if (flip) {
      curA.next = new Node(head.next.data);
      curA = curA.next;
    } else {
      curB.next = new Node(head.next.data);
      curB = curB.next;
    }
    head = head.next;
    flip = !flip;
  }
  return new Context(listA, listB);
}
