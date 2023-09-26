// 4 kyu Sort binary tree by levels
//
// You are given a binary tree:
//
// class Node {
//   constructor(value, left = null, right = null) {
//     this.value = value;
//     this.left  = left;
//     this.right = right;
//   }
// }
//
// Your task is to return the list with elements from tree sorted by levels, which means
// the root element goes first, then root children (from left to right) are second and third, and so on.
//
// Return empty array if root is null.
//
// Example 1 - following tree:
//
//                  2
//             8        9
//           1  3     4   5
//
// Should return following list:
//
// [2,8,9,1,3,4,5]
//
// Example 2 - following tree:
//
//                  1
//             8        4
//               3        5
//                          7
//
// Should return following list:
//
// [1,8,4,3,5,7]
//
// Answer:
function treeByLevels(rootNode) {
  if (!rootNode) return [];
  const queue = new Queue();
  queue.enqueue(rootNode);
  const output = [];
  while (queue.size) {
    const cur = queue.dequeue();
    if (cur) output.push(cur.value);
    if (cur.left) queue.enqueue(cur.left);
    if (cur.right) queue.enqueue(cur.right);
  }
  return output;
}
class Queue {
  #length = 0;
  #queue = {};
  #head = 0;
  #tail = 0;
  get size() {
    return this.#length;
  }
  enqueue(item) {
    this.#queue[this.#tail] = item;
    this.#tail++;
    this.#length++;
  }
  dequeue() {
    if (this.#length > 0) {
      this.#length--;
      let val = this.#queue[this.#head];
      delete this.#queue[this.#head];
      this.#head++;
      return val;
    }
  }
}
