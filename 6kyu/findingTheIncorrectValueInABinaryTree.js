// 6 kyu Finding the Incorrect Value in a Binary Tree
//
// Description:
//
// Each node of a binary tree stores a nonnegative integer. The value at every non-leaf node
// is supposed to be the sum of its two children, but one node is incorrect. Find this node.
//
// Example: Consider the tree below. 13 is the sum of 6 and 7, but 15 is incorrect,
// because 27 != 13 + 15 and 15 != 5 + 9. Clearly the 15should be changed to 14.
//
//            27
//          /    \
//         13    15
//        /  \   / \
//       6   7  5   9
//
// Details:
//
// (1) The tree will always be full (all non-leaf nodes have exactly 2 children) and perfect (all leaves are on the bottom level).
// (2) Considering the root as level 1, its children as level 2, their children as level 3, and so on, the tree contains at least 3 levels and no more than 12.
// (3) If the incorrect value occurs on the leaf level, then the right child is the incorrect one.
// (4) The tree is provided as a list with the nodes in breath-first order. The root is element 0, its leftchild
// is element 1 and its rightchild is element 2; element 1's leftchild is element 3 and its rightchild
// is element 4; element 2's leftchild is element 5 and its rightchild is element 6, and so on. The example above is [27, 13, 15, 6, 7, 5, 9].
// (5) Return the index of the incorrect node and the value it should be changed to. In the example return (2,14). (Indexes start from 0.)
//
// Other Examples:
//
// [28, 13, 14, 6, 7, 5, 9] => (0,27).
// Explanation: 28 != 13 + 14, but checking the children of 13 and 14 shows that they are both fine. So the 28 must be changed.
//
// [28, 13, 15, 6, 7, 5, 9] => (6,10).
// Explanation: 15 != 5 + 9, but the 15 itself is fine, because 28 = 13 + 15. Hence one of its children
// is wrong, but they are leaves, so how do we tell? Detail (3) says
// "If the incorrect value occurs on the leaf level, then the right child is the incorrect one."
// Thus the 9 must be changed to 10, rather than changing the 5 to 6.
//
// Answer:
function findIncorrectValue(tree) {
  let result = walk(0, tree, tree[0]);
  let badIdx = result[1];
  if (isLeaf(getLChild(badIdx), tree)) {
    return [getRChild(badIdx), tree[badIdx] - tree[getLChild(badIdx)]];
  }
  const lIdx = getLChild(badIdx);
  const rIdx = getRChild(badIdx);
  if (tree[lIdx] !== tree[getLChild(lIdx)] + tree[getRChild(lIdx)]) {
    badIdx = lIdx;
  } else if (tree[rIdx] !== tree[getLChild(rIdx)] + tree[getRChild(rIdx)]) {
    badIdx = rIdx;
  }
  return [badIdx, tree[getLChild(badIdx)] + tree[getRChild(badIdx)]];
}

function walk(idx, arr, pval) {
  const lChild = getLChild(idx);
  const rChild = getRChild(idx);
  if (lChild < arr.length) {
    const sum = arr[lChild] + arr[rChild];
    if (sum !== pval) return [true, idx];
    return walk(lChild, arr, arr[lChild]) || walk(rChild, arr, arr[rChild]);
  }
  //   return false;
}

const isLeaf = (idx, tree) => getLChild(idx) >= tree.length;
const getLChild = (idx) => idx * 2 + 1;
const getRChild = (idx) => idx * 2 + 2;
