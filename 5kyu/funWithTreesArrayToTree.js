// 5 kyu Fun with trees: array to tree
//
// You are given a non-null array of integers.
// Implement the method arrayToTree which creates a binary tree
// from its values in accordance to their order, while creating nodes by depth from left to right.
//
// For example, given the array [17, 0, -4, 3, 15] you should create the following tree:
//
//     17
//    /  \
//   0   -4
//  / \
// 3   15
//
// The class TreeNode is available for you:
//
// var TreeNode = function(value, left, right) {
//   this.value = value;
//   this.left = left;
//   this.right = right;
// };
//
// Answer:
function arrayToTree(arr) {
  if (arr.length === 0) return;
  const head = new TreeNode(arr[0]);
  const queue = [head];
  let idx = 0;

  while (queue.length > 0) {
    const lIdx = idx * 2 + 1;
    const rIdx = idx * 2 + 2;
    const node = queue.shift();
    if (lIdx < arr.length) {
      node.left = new TreeNode(arr[lIdx]);
      queue.push(node.left);
    }
    if (rIdx < arr.length) {
      node.right = new TreeNode(arr[rIdx]);
      queue.push(node.right);
    }
    idx++;
  }
  return head;
}
