// 5 kyu Tree to list
//
// Given the root of a tree with an arbitrary number of child nodes, return a list containing the nodes' data in breadth-first order (left to right, top to bottom).
//
// Child nodes are stored in a list. An empty tree is represented by an empty list.
//
// Example:
//
//            1
//           / \
//          2   3  -> [1,2,3,4,5,6,7]
//         /|\   \
//        4 5 6   7
//
// Answer:

/* preloaded Node definition :
class Node {
  constructor (data, children = []) {
    this.data = data;
    this.children = children;
  }
}
*/
function treeToArray(tree) {
  const out = [];
  if (!tree["children"]) return out;
  out.push(tree.data);
  const queue = [...tree.children];
  while (queue.length) {
    const cur = queue.shift();
    out.push(cur.data);
    queue.push(...cur.children);
  }
  return out;
}
