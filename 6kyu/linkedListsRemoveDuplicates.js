// 6 kyu Linked Lists - Remove Duplicates
//
// Linked Lists - Remove Duplicates
// 
// Write a RemoveDuplicates() function which takes a list sorted in increasing order and deletes any duplicate nodes from the list. 
// Ideally, the list should only be traversed once. The head of the resulting list should be returned.
// 
// var list = 1 -> 2 -> 3 -> 3 -> 4 -> 4 -> 5 -> null
// removeDuplicates(list) === 1 -> 2 -> 3 -> 4 -> 5 -> null
// 
// If the passed in list is null/None/nil, simply return null.
// 
// Note: Your solution is expected to work on long lists. Recursive solutions may fail due to stack size limitations.
// 
// The push() and buildOneTwoThree() functions need not be redefined.
//
// Answer:
function Node(data) {
    this.data = data;
    this.next = null;
  }
  
function removeDuplicates(head) {
    let current = head;
    while (current != null) {
        let next = current;
        while(next != null && next.data === current.data) {
            next = next.next;
        }
        current.next = next;
        current = current.next;
    }
    return head;
}


// Ignore these, just testing
function removeDuplicates(head) {
    let prev = current = head;

    while(current) {
        if(!current.next) break;
        if(prev.data === current.next.data) {
            current = current.next;
            continue;
        }
        prev.next = current.next;
        prev = current;
    }
    return head;
}


function removeDuplicates(head) {
    /*Another reference to head*/
    let curr = head;

    /* Traverse list till the last node */
    while (curr != null) {
            let temp = curr;
        /*Compare current node with the next node and
        keep on deleting them until it matches the current
        node data */
        while(temp!=null && temp.data==curr.data) {
            temp = temp.next;
        }
        /*Set current node next to the next different
        element denoted by temp*/
        curr.next = temp;
        curr = curr.next;
    }
    return head;
}



function removeDuplicates(head) {
    if(!head) return null;
    let current = prev = head;
    while(current) {
      console.log(current);
      if(current.next) {
        if(prev.data === current.next.data) {
          current = current.next;
          continue;
        }
        prev.next = current.next;
        prev = current.next;
        current = current.next;
      } else current = null;
    }
    return head;
  }





// latest
function Node(data) {
    this.data = data;
    this.next = null;
  }
  
function removeDuplicates(head) {
    let prev = current = head;

    while(current) {
        if(!current.next) break;
        if(prev.data === current.next.data) {
        console.log("prev: ", prev);
            //prev.next = current.next;
            current = current.next;
            console.log("current: ", current);
            continue;
        } else {
        console.log("current.next: ", current.next);
        prev.next = current.next;
        prev = current.next;
        current = current.next;
        continue;
        }
    current = null;
    }
    return head;
}