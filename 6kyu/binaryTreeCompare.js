// 6 kyu Binary Tree Compare
//
// Given the node object:
//
// Node:
//   val: <int>,
//   left: <Node> or null,
//   right: <Node> or null
//
// write a function compare(a, b) which compares the two trees defined by Nodes a and b and returns true if they are equal in structure and in value and false otherwise.
//
// Examples:
//
// 1       1
// | \     | \
// 2  3    2  3
// => true
//
// 1       1
// | \     | \
// 3  3    2  3
// => false (values not the same 2 != 3)
//
// 1       1
// | \     |
// 2  3    2
//         |
//         3
// => false (structure not the same)
//
// Answer:

// return true if the binary trees rooted and a and b are equal in structure and value
// return false otherwise
function compare(a, b) {
  if (!a || !b) return !a && !b && !((a && !b) || (!a && b));
  return (
    a.val === b.val && compare(a.left, b.left) && compare(a.right, b.right)
  );
}

// One statement, because who doesn't love even more hideous code:
const compare_ = (a, b) =>
  !a || !b
    ? a == b
    : a.val === b.val && compare(a.left, b.left) && compare(a.right, b.right);
