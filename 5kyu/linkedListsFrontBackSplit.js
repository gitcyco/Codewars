// 5 kyu Linked Lists - Front Back Split
//
// Linked Lists - Front Back Split
//
// Write a FrontBackSplit() function that takes one list and splits it into two sublists — one for the front half, and one for the back half.
// If the number of elements is odd, the extra element should go in the front list.
// For example, FrontBackSplit() on the list 2 -> 3 -> 5 -> 7 -> 11 -> null should yield the two lists 2 -> 3 -> 5 -> null and 7 -> 11 -> null.
// Getting this right for all the cases is harder than it looks. You will probably need special case code to deal with lists of length < 2 cases.
//
// var source = 1 -> 3 -> 7 -> 8 -> 11 -> 12 -> 14 -> null
// var front = new Node()
// var back = new Node()
// frontBackSplit(source, front, back)
// front === 1 -> 3 -> 7 -> 8 -> null
// back === 11 -> 12 -> 14 -> null
//
// You should throw an error if any of the arguments to FrontBackSplit are null or if the source list has < 2 nodes.
//
// Answer:
function Node(data) {
  this.data = data === undefined ? null : data;
  this.next = null;
}

function frontBackSplit(source, front, back) {
  if (!source || !source.next || !front || !back) throw new Error("error");
  let len = 1;
  let cur = source;
  while (cur.next) {
    len++;
    cur = cur.next;
  }
  let frontEnd = Math.ceil(len / 2);
  let index = 0;
  cur = front;
  while (source) {
    let node = new Node(source.data);
    if (index === 0) front.data = source.data;
    else if (index === frontEnd) back.data = source.data;
    else {
      if (index === frontEnd + 1) cur = back;
      cur.next = node;
      cur = cur.next;
    }
    index++;
    source = source.next;
  }
}
