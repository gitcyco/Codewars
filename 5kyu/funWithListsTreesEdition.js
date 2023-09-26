// 5 kyu Fun with lists: trees edition
//
// You are given a linked list (head), where every element points to the root of an integer binary tree.
// Implement the method flatten which returns a binary tree from the values of all the trees, without duplicates, sorted
// by levels (while creating nodes by depth, from left to right).
//
// For example, given the following list:
//
// 1 -> 4 -> 3 -> 6
//  \       / \    \
//   2     4   2    5
//
// The method should return the following tree:
//
//           1
//        /     \
//       2       3
//      / \     /
//     4   5   6
//
// (since after removing duplicates & sorting we get the following elements: 1,2,3,4,5,6 and then fill up the tree by depth from left to right)
//
// The classes ListNode & TreeNode are available for you:
//
// function ListNode(data, next = null) {
//   this.data = data;
//   this.next = next;
// };
//
// function TreeNode(value, left, right) {
//   this.value = value;
//   this.left = left;
//   this.right = right;
// };
//
// Answer:
function flatten(head) {
  let cur = head;
  let vals = new Set();
  while (cur) {
    walk(cur.data, vals);
    cur = cur.next;
  }
  const sorted = [...vals].sort((a, b) => a - b);
  const len = sorted.length;
  const queue = [];
  if (len === 0) return null;
  const newHead = new TreeNode(sorted[0]);
  queue.push([newHead, 0]);
  while (queue.length) {
    let [cur, idx] = queue.pop();
    if (getLChild(idx) < len) {
      cur.left = new TreeNode(sorted[getLChild(idx)]);
      queue.push([cur.left, getLChild(idx)]);
    }
    if (getRChild(idx) < len) {
      cur.right = new TreeNode(sorted[getRChild(idx)]);
      queue.push([cur.right, getRChild(idx)]);
    }
  }
  return newHead;
}

const walk = (node, vals) => {
  if (!node) return;
  vals.add(node.value);
  walk(node.left, vals);
  walk(node.right, vals);
};
const getLChild = (idx) => idx * 2 + 1;
const getRChild = (idx) => idx * 2 + 2;
