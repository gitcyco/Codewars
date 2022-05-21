// 6 kyu Linked Lists - Length & Count
//
// Linked Lists - Length & Count
// 
// Implement Length() to count the number of nodes in a linked list.
// 
// length(null) => 0
// length(1 -> 2 -> 3 -> null) => 3
// 
// Implement Count() to count the occurrences of an integer in a linked list.
// 
// count(null, 1) => 0
// count(1 -> 2 -> 3 -> null, 1) => 1
// count(1 -> 1 -> 1 -> 2 -> 2 -> 2 -> 2 -> 3 -> 3 -> null, 2) => 4
// 
// I've decided to bundle these two functions within the same Kata since they are both very similar.
// 
// The push()/Push() and buildOneTwoThree()/BuildOneTwoThree() functions do not need to be redefined.
//
// Answer:
function Node(data) {
    this.data = data;
    this.next = null;
  }
  
  function length(head) {
    if(!head) return 0;
    let count = 0;
    do {
      count++;
      head = head.next;
    } while(head)
    return count;
  }
  
  function count(head, data) {
    if(!head) return 0;
    let count = 0;
    do {
      if(head.data === data) count++;
      head = head.next;
    } while(head)
    return count;
  }