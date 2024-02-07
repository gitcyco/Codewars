// 5 kyu Binary search tree validation
//
// A binary search tree is a binary tree that is ordered.
// This means that if you were to convert the tree to an array using an in-order traversal, the array would be in sorted order.
// The benefit gained by this ordering is that when the tree is balanced, searching
// is a logarithmic time operation, since each node you look at that isn't the one you're searching for lets you discard half of the tree.
//
// If you haven't worked with binary trees before or don't understand
// what a traversal is, you can learn more about that here: https://www.codewars.com/kata/binary-tree-traversal.
//
// In this kata, you will write a function that will validate that a given binary tree is a binary search tree.
// The sort order is not predefined so it should work with either.
//
// These are valid binary search trees:
//
//     5
//    / \
//   2   7
//  / \   \
// 1   3   9
//
//
//   7
//  / \
// 9   2
//
// while these are not:
//
//   1
//  / \
// 2   3
//
//
//   5
//  / \
// 2   9
//  \
//   7
//
// There are several different approaches you can take to solve this kata.
// If you're not as comfortable with recursion I'd recommend practicing that.
//
// Note: no test case tree will contain duplicate numbers.
//
// Answer:
// This is here as documentation. The nodes in the tree are instances of
// this class. You don't need to change this implementation.
class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// Testing if array is sorted: (note tree can be ascending or descending)
const isBST = (root) => {
  const arr = [];
  if (!root || (!root.left && !root.right)) return true;
  const walk = (node) => {
    if (!node) return;
    walk(node.left);
    arr.push(node.value);
    walk(node.right);
  };
  walk(root);
  let asc = arr[0] < arr[1];
  for (let i = 1; i < arr.length; i++) {
    if (asc && arr[i] < arr[i - 1]) return false;
    if (!asc && arr[i] > arr[i - 1]) return false;
  }
  return true;
};
