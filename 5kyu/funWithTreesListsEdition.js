// 5 kyu Fun with trees: lists edition
//
// You are given a binary tree, where every node points to a head of an integer linked list.
// Implement the method flatten which returns a sorted linked list from the values of all the lists, without duplicates.
//
// For example, given the following tree:
//
//     17->1
//    /  \
//   3    1
//  /    / \
// 2    16  7->3
//
// The method should return 1 -> 2 -> 3 -> 7 -> 16 -> 17.
//
// The classes TreeNode & ListNode are available for you:
//
// function TreeNode(value, left, right) {
//   this.value = value;
//   this.left = left;
//   this.right = right;
// };
//
// function ListNode(data, next = null) {
//   this.data = data;
//   this.next = next;
// };
//
// Answer:
function flatten(root) {
  if (!root) return null;
  const vals = new Set();
  const sorted = [...walk(root, vals)].sort((a, b) => a - b).reverse();
  const head = new ListNode(sorted.pop());
  let cur = head;
  while (sorted.length) {
    cur.next = new ListNode(sorted.pop());
    cur = cur.next;
  }
  return head;
}

const walk = (node, vals) => {
  if (!node) return vals;
  let cur = node.value;
  while (cur) {
    vals.add(cur.data);
    cur = cur.next;
  }
  return walk(node.left, vals) && walk(node.right, vals);
};
