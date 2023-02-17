// 7 kyu Linked Lists - Move Node
//
// Linked Lists - Move Node
//
// Write a MoveNode() function which takes the node from the front of the source list and moves it to the front of the destintation list.
// You should throw an error when the source list is empty.
// For simplicity, we use a Context object to store and return the state of the two linked lists.
// A Context object containing the two mutated lists should be returned by moveNode.
//
// MoveNode() is a handy utility function to have for later problems.
// JavaScript
//
// var source = 1 -> 2 -> 3 -> null
// var dest = 4 -> 5 -> 6 -> null
// moveNode(source, dest).source === 2 -> 3 -> null
// moveNode(source, dest).dest === 1 -> 4 -> 5 -> 6 -> null
//
// Python
//
// source = 1 -> 2 -> 3 -> None
// dest = 4 -> 5 -> 6 -> None
// move_node(source, dest).source == 2 -> 3 -> None
// move_node(source, dest).dest == 1 -> 4 -> 5 -> 6 -> None
//
// Ruby
//
// source = 1 -> 2 -> 3 -> nil
// dest = 4 -> 5 -> 6 -> nil
// move_node(source, dest).source == 2 -> 3 -> nil
// move_node(source, dest).dest == 1 -> 4 -> 5 -> 6 -> nil
//
// The push() and buildOneTwoThree() functions need not be redefined.
//
// Answer:
function Node(data) {
  this.data = data;
  this.next = null;
}

function Context(source, dest) {
  this.source = source;
  this.dest = dest;
}

function moveNode(source, dest) {
  console.log(source, dest);
  if (!source) throw new Error("error");

  if (!dest) {
    dest = new Node(source.data);
  } else {
    let newNode = new Node(source.data);
    newNode.next = dest;
    dest = newNode;
  }
  source = source.next;
  return new Context(source, dest);
}
