// 5 kyu String tree-ification
//
// Write a function that takes in a nonempty string and converts it into a tree object.
//
// Here we convert the string 'great' into a tree:
//
//     great
//    /    \
//   gr    eat
//  / \    /  \
// g   r  e   at
//            / \
//           a   t
//
//     A leaf of the tree is a node of length 1.
//     At each step, if the node is not a leaf, the string should be split in half at the middle.
//         If the length is odd, the right half is the one that must include the middle character.
//     Every node of the tree has a type property:
//         the original input is of type "root"
//         a leaf is of type "leaf"
//         anything else is of type "node"
//
// Example
//
// The resultant tree object for "great":
//
// {
//     "value": "great",
//     "left": {
//         "value": "gr",
//         "left": {
//             "value": "g",
//             "type": "leaf"
//         },
//         "right": {
//             "value": "r",
//             "type": "leaf"
//         },
//         "type": "node"
//     },
//     "right": {
//         "value": "eat",
//         "left": {
//              "value": "e", "type": "leaf"
//         },
//         "right": {
//             "value": "at",
//             "left": {
//                 "value": "a",
//                 "type": "leaf"
//             },
//             "right": {
//                 "value": "t",
//                 "type": "leaf"
//             },
//             "type": "node"
//         },
//         "type": "node"
//     },
//     "type": "root"
// }
//
// Answer:
function word2Tree(str, count = 0) {
  const len = str.length;
  const cur = { value: str };
  if (len > 1) {
    const left = str.slice(0, Math.floor(len / 2));
    const right = str.slice(Math.floor(len / 2));
    cur.type = count ? "node" : "root";
    cur.left = word2Tree(left, count + 1);
    cur.right = word2Tree(right, count + 1);
  } else if (len === 1) {
    cur.type = "leaf";
  }
  return cur;
}
