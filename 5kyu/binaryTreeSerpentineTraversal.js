// 5 kyu Binary Tree Serpentine Traversal
//
// Given the root node of a binary tree, write a function that will traverse the tree in a serpentine fashion.
// You could also think of this as a zig-zag.
//
// We want to visit the first level from left to right, the second level from right to left, third level from left to right, and so on...
//
// The function will return a list of the visited nodes in serpentine order.
//
// The tree is not necessarily balanced. It is very important that you start the first level from left to right!
//
// A Node has 3 properties: data (a number or string) left (a reference to the left child) right (a refencence to the right child)
//
// The empty reference if there is no child is undefined (JS) / None (Python)
//
// Example:
//
//     A
//    /\
//   B  C
//  /\  /\
// D E F G
//
// Should result in ["A", "C", "B", "D", "E", "F", "G"]
//
// Answer:
function serpentineTree(node) {
  if (!node) return [];
  const out = [];
  const queue = [];
  let order = ["left", "right"];
  queue.push(node);
  while (queue.length > 0) {
    const row = queue.splice(0).reverse();
    for (let item of row) {
      if (item.data) out.push(item.data);
      if (item[order[0]]) queue.push(item[order[0]]);
      if (item[order[1]]) queue.push(item[order[1]]);
    }
    order.reverse();
  }
  return out;
}
