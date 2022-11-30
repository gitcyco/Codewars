// 7 kyu Binary Tree Search (not BST)
//
// Given a number and a binary tree ( not a Binary Search Tree! ):
//
//     return True/true if the given number is in the tree
//     return False/false if it isn't
//
// Each node in the binary tree is either of this Node class or null:
//
// class Node {
//   constructor(value, left = null, right = null) {
//     this.value = value;
//     this.left = left;
//     this.right = right;
//   }
// }
//
// Answer:
function search(n, root, found = false) {
  if (found) return true;
  if (!root) return found;
  if (root.value === n) found = true;
  found = search(n, root.left, found);
  found = search(n, root.right, found);
  return found;
}
