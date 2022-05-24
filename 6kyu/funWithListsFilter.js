// 6 kyu Fun with lists: filter
//
// Implement the method filter, which accepts a linked list (head) and a predicate function, and returns a new 
// linked list (head) which only contains the elements which apply to the given predicate.
// 
// For example: Given the list: 1 -> 2 -> 3, and the predicate x => x >= 2, filter should return 2 -> 3, since x >= 2 applies to both 2 and 3.
// 
// The linked list is defined as follows:
// 
// function Node(data, next = null) {
//   this.data = data;
//   this.next = next;
// }
// 
// Note: the list may be null and can hold any type of value.
// 
// Good luck!
//
// Answer:
function filter(head, p) {
    let newHead = null;
    let current = head;
    let prev = head;
    if(!head) return null;
    while(current) {
      if(p(current.data)) {
        if(!newHead) newHead = current;
        prev = current;
        current = current.next;
      } else {
        prev.next = current.next;
        current = current.next;
      }
    }
    return newHead;
}