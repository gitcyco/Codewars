// 6 kyu Tree Depth
//
// Write a method that takes a nested hash (object in javascript) as input and returns that hash
// with added "depth" keys. So, for example, the following input:
//
// { a: 1, b: 2, c: { d: { e: 3 } } }
//
// would yield the following return value:
//
// { a: 1, b: 2, c: { d: { e: 3, depth: 2 }, depth: 1 }, depth: 0 }
//
// For Ruby, if the input is not a hash, then the function should return nil.
// For JavaScript, if the input is not an object (including an array), the function should return null.
//
// Answer:
function recordDepth(tree, depth = 0) {
  if (!isObject(tree)) return null;
  for (let key in tree) {
    if (isObject(tree[key])) recordDepth(tree[key], depth + 1);
  }
  tree.depth = depth;
  return tree;
}

function isObject(item) {
  return typeof item === "object" && item !== null && !Array.isArray(item);
}
