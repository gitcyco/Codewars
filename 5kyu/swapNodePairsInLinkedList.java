// 5 kyu Swap Node Pairs In Linked List
// 
// You are given the head node of a singly-linked list.
// Write a method that swaps each pair of nodes in the list, then returns the head node of the list.
// You have to swap the nodes themselves, not their values.
// 
// Example:
// 
// (A --> B --> C --> D) => (B --> A --> D --> C)
// 
// The swapping should be done left to right, so if the list has an odd length, the last node stays in place:
// 
// (A --> B --> C) => (B --> A --> C)
// 
// The list will be composed of Nodes of the following specification:
// 
// class Node {
//     constructor(value, next = null) {
//         this.value = value;
//         this.next = next;
//     }
// }
// 
// Answer:
public class LinkedListPairs {
  public static Node swapPairs(Node head) {
      if(head == null || head.next == null) return head;
      Node next = head.next;
      head.next = swapPairs(next.next);
      next.next = head;
      return next;
  }
}