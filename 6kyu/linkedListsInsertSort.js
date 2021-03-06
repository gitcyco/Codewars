// 6 kyu Linked Lists - Insert Sort
//
// Linked Lists - Insert Sort
// 
// Write an InsertSort() function which rearranges nodes in a linked list so they are sorted in increasing order. 
// You can use the SortedInsert() function that you created in the "Linked Lists - Sorted Insert" kata below. 
// The InsertSort() function takes the head of a linked list as an argument and must return the head of the linked list.
// 
// var list = 4 -> 3 -> 1 -> 2 -> null
// insertSort(list) === 1 -> 2 -> 3 -> 4 -> null
// 
// If the passed in head node is null or a single node, return null or the single node, respectively. 
// You can assume that the head node will always be either null, a single node, or a linked list consisting of multiple nodes.
// 
// The push(), buildOneTwoThree(), and sortedInsert() functions need not be redefined.
//
// Answer:
function Node(data) {
    this.data = data;
    this.next = null;
}
  
function insertSort(head) {
    let list = null;
    while(head) {
      list = sortedInsert(list, head.data);
      head = head.next ? head.next : null;
    }
    return list;
}
  
function sortedInsert(head, data) {
    let node = new Node(data);
    let current = prev = head;
    if(!head || data < head.data) {
        node.next = head;
        return node;
    }
    while(current) {
        if(current.data < data) {
        prev = current;
        current = current.next ? current.next : null;
        } else {
        prev.next = node;
        node.next = current;
        return head;
        }
    }
    prev.next = node;
    return head;
}