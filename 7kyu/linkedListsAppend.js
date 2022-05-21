// 7 kyu Linked Lists - Append
//
// Linked Lists - Append
// 
// Write an Append() function which appends one linked list to another. The head of the resulting list should be returned.
// 
// var listA = 1 -> 2 -> 3 -> null
// var listB = 4 -> 5 -> 6 -> null
// append(listA, listB) === 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null
// 
// If both listA and listB are null/NULL/None/nil, return null/NULL/None/nil. 
// If one list is null/NULL/None/nil and the other is not, simply return the non-null/NULL/None/nil list.
// 
// The push() and buildOneTwoThree() (build_one_two_three() in PHP and ruby) functions need not be redefined. The Node class is also predefined for you in PHP.
//
// Answer:
function Node(data) {
    this.data = data;
    this.next = null;
}

function append(listA, listB) {
    if(!listA) return listB;
    if(!listB) return listA;
    let head = listA;
    while(listA) {
        if(!listA.next) break;
        listA = listA.next;
    }
    listA.next = listB;
    return head;
}