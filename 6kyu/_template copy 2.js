// DESCRIPTION
//
//
// Answer:
function solution(input) {
    return input;
}


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


function removeDuplicates(head)
    {
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


