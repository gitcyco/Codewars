// 5 kyu Binary Tree Traversal
//
// Given the root node of a binary tree (but not necessarily a binary search tree,) write three functions that will print the tree in pre-order, in-order, and post-order.
//
// A Node has the following properties:
//
// var data; // A number or string.
// Node left; // Undefined if there is no left child.
// Node right; // Undefined if there is no right child.
//
// The structure of a tree looks like:
//
// data Tree a = Nil | Node (Tree a) a (Tree a)
//
// Pre-order means that we
// 1.) Visit the root.
// 2.) Traverse the left subtree (left node.)
// 3.) Traverse the right subtree (right node.)
//
// In-order means that we
// 1.) Traverse the left subtree (left node.)
// 2.) Visit the root.
// 3.) Traverse the right subtree (right node.)
//
// Post-order means that we
// 1.) Traverse the left subtree (left node.)
// 2.) Traverse the right subtree (right node.)
// 3.) Visit the root.
//
// Let's say we have three Nodes.
//
// var a = new Node("A");
// var b = new Node("B");
// var c = new Node("C");
//
// a.left = b;
// a.right = c;
//
// Then, preOrder(a) should return ["A", "B", C"]
// inOrder(a) should return ["B", "A", "C"]
// postOrder(a) should return ["B", "C", A"]
//
// What would happen if we did this?
//
// var d = new Node("D");
// c.left = d;
//
// preOrder(a) should return ["A", "B", "C", "D"]
// inOrder(a) should return ["B", "A", "D", "C"]
// postOrder(a) should return ["B", "D", "C", "A"]
//
// Answer:
/*
A Node has the following properties:
var data; // A number or string.
Node left; // Undefined if there is no left child.
Node right; // Undefined if there is no right child.
*/
// 1.) Root node, 2.) traverse left subtree, 3.) traverse right subtree.
function preOrder(node) {
  result = [];
  function preO(node) {
    if (!node) return;
    result.push(node.data);
    preO(node.left);
    preO(node.right);
  }
  preO(node);
  return result;
}

// 1.) Traverse left subtree, 2.) root node, 3.) traverse right subtree.
function inOrder(node) {
  result = [];
  function inO(node) {
    if (!node) return;
    inO(node.left);
    result.push(node.data);
    inO(node.right);
  }
  inO(node);
  return result;
}

// 1.) Traverse left subtree, 2.) traverse right subtree, 3.) root node.
function postOrder(node) {
  result = [];
  function postO(node) {
    if (!node) return;
    postO(node.left);
    postO(node.right);
    result.push(node.data);
  }
  postO(node);
  return result;
}
