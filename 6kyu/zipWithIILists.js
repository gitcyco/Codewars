// 6 kyu zipWith II: Lists :]
//
// Implement zipWith in JavaScript II: Lists :]
//
// This zipWith takes a function and two lists and zips the lists together, applying the function to every pair of values.
// The function value is one new list.
// (For this kata's list implementation, see below.)
//
// If the lists are of unequal length, the output shall be as long as the shorter one.
// Superfluous values of the longer list are to be ignored (completely).
// There will be no tests where both list inputs are infinite.
//
// Inputs shall not be modified.
// Examples
//
// zipWith( (a,b) => a+b,
//          new Node(0, new Node(1, new Node(2))),
//          new Node(0, new Node(1, new Node(2)))
// )  =>    new Node(0, new Node(2, new Node(4)))
//
// And, in short:
//
// zipWith( Math.pow, ( 10 10 10 10 ), ( 0 1 2 3 ) )  =>  ( 1e0 1e1 1e2 1e3 )
// zipWith( Math.max, ( 1 4 7 1 4 7 ), ( 4 7 1 4 7 1 ) )  =>  ( 4 7 7 4 7 7 )
//
// (No, JS sadly does not accept this representation of lists. But it reads more easily, and - much more
// important to your friendly kata author - it writes more shortly.)
// Lists
//
// Lists are built from nodes. The Node() definition is Preloaded. A list is represented by its head. Null represents an empty list.
// For testing and debugging purposes, test.arrayToList(), test.listToArray() and test.listToString() have also been Preloaded.
//
// function Node(value, next=null) {
//   this.value = value;
//   this.next = next;
// }
//
// const test = {
//   arrayToList: function(array) { return head; },
//   listToArray: function(head) { return array; },
//   listToString: function(head) { return string; },
// };
//
// Input validation
//
// All test case input is valid. ( Yes, really. )
//
// Answer:
function zipWith(fn, head0, head1) {
  if (!head0 || !head1) return null;
  let newHead = new Node();
  let cur = newHead;
  while (head0 && head1) {
    cur.value = fn(head0.value, head1.value);
    head0 = head0.next;
    head1 = head1.next;
    if (head0 && head1) {
      cur.next = new Node();
      cur = cur.next;
    }
  }
  return newHead;
}
