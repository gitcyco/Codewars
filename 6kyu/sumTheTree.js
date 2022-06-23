// 6 kyu Sum The Tree
//
// Given a node object representing a binary tree:
// 
// Node:
//   value: <int>,
//   left: <Node> or null,
//   right: <Node> or null
// 
// write a function that returns the sum of all values, including the root. Absence of a node will be indicated with a null value.
// 
// Examples:
// 
// 10
// | \
// 1  2
// => 13
// 
// 1
// | \
// 0  0
//     \
//      2
// => 3
// 
// Answer:
function sumTheTreeValues(root) {
    let node = root;
    let sum = 0;
    let queue = [];
    queue.push(node);

    while (queue.length) {
        node = queue.shift();
        sum += node.value;
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
    return sum;
}