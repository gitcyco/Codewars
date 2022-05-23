// 6 kyu Reverse linked list
//
// Let's say we have a singly linked list.
// Empty list is represented by null or equivalent (nil in Ruby).
// Non-empty list is represented by 2-element array [value, tail].
// 
// So for example list with values 1, 2, 3 would be represented as [1, [2, [3, null]]].
// 
// Your job is to develop function reverseList which returns elements of given list in reverse order without modification of the original list.
// 
// P.S. Make sure your solution works on huge lists.
//
// Answer:
function reverseList(list) {
    if(!list || (!list[0] && !list[1])) return list;
    let flat = flatten(list);
    let temp = [];
    for(let i = 0; i < flat.length; i++) {
        if(i==0) {
          temp = [flat[i], null];
          continue;
        }
        if(!flat[i]) break;
        temp = [flat[i], temp];
    }
    return temp;
}
  
function flatten(array) {
    let nodes = array.slice();
    let flat = [];
    for (let node = nodes.shift(); node !== undefined; node = nodes.shift()) {
        if (Array.isArray(node)) nodes.unshift.apply(nodes, node);
        else flat.push(node);
    }
    return flat;
}

// much shorter solution
function reverseList(list) {
    node = null;
    while (list)
    {
      node = [list[0], node];
      list = list[1];
    }
    return node;
}