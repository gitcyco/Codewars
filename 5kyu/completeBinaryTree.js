// 5 kyu Complete Binary Tree
//
// Definition: According to Wikipedia, a complete binary tree is a binary tree "where every level, except possibly
// the last, is completely filled, and all nodes in the last level are as far left as possible."
//
// The Wikipedia page referenced above also mentions that "Binary trees can also be stored in breadth-first order
// as an implicit data structure in arrays, and if the tree is a complete binary tree, this method wastes no space."
//
// Your task is to write a method (or function) that takes an array (or list, depending on language) of integers and, assuming
// that the array is ordered according to an in-order traversal of a complete binary tree, returns an array that contains the values of the tree in breadth-first order.
//
// Example 1: Let the input array be [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].
// This array contains the values of the following complete binary tree.
//
//           _ 7_
//         /      \
//        4        9
//      /   \     / \
//    2      6   8   10
//   / \     /
//  1   3   5
//
// In this example, the input array happens to be sorted, but that is not a requirement.
//
// Output 1: The output of the function shall be an array containing the values of the nodes of the binary tree read top-to-bottom, left-to-right.
// In this example, the returned array should be:
//
// [7, 4, 9, 2, 6, 8, 10, 1, 3, 5]
//
// Example 2: Let the input array be [1, 2, 2, 6, 7, 5]. This array contains the values of the following complete binary tree.
//
//         6
//       /   \
//     2       5
//    / \     /
//   1   2   7
//
//
// Note that an in-order traversal of this tree produces the input array.
//
// Output 2: The output of the function shall be an array containing the values of the nodes of the binary tree read top-to-bottom, left-to-right.
// In this example, the returned array should be:
//
// [6, 2, 5, 1, 2, 7]
//
// Answer:
function completeBinaryTree(a) {
  const len = a.reverse().length;
  const bfo = new Array(len).fill(null);
  walk(0, a, bfo, len);
  return bfo;
}

function walk(idx, arr, bfo, len) {
  if (idx >= len) return;
  walk(getLChild(idx), arr, bfo, len);
  bfo[idx] = arr.pop();
  walk(getRChild(idx), arr, bfo, len);
}

const getLChild = (idx) => idx * 2 + 1;
const getRChild = (idx) => idx * 2 + 2;
