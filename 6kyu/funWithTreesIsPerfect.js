// 5 kyu Fun with trees: is perfect
//
// A perfect binary tree is a binary tree in which all interior nodes have two children and all leaves have the same depth or same level.
//
// You are given a class called TreeNode. Implement the method isPerfect which determines if a given tree denoted by its root node is perfect.
//
// Note: TreeNode class contains helper methods for tree creation, which might be handy for your solution.
// Feel free to update those methods, but make sure you keep their signatures intact (since they are used from within test cases).
//
// Answer:
class TreeNode {
  constructor(left = null, right = null) {
    this.left = left;
    this.right = right;
  }

  static isPerfect(root) {
    if (!root) return true;
    let queue = [root];
    while (queue.length > 0) {
      let qtmp = queue.slice();
      queue = [];
      let hasChildren = qtmp.every((e) => TreeNode.hasBoth(e));
      let noChildren = qtmp.every((e) => TreeNode.hasNone(e));
      if (hasChildren) {
        qtmp.forEach((e) => (queue.push(e.left), queue.push(e.right)));
      } else return noChildren;
    }
  }

  static hasBoth(node) {
    return node.left && node.right;
  }
  static hasNone(node) {
    return !node.left && !node.right;
  }

  static leaf() {
    return new TreeNode();
  }

  static join(left, right) {
    return new TreeNode().withChildren(left, right);
  }

  withLeft(left) {
    this.left = left;
    return this;
  }

  withRight(right) {
    this.right = right;
    return this;
  }

  withChildren(left, right) {
    this.left = left;
    this.right = right;
    return this;
  }

  withLeftLeaf() {
    return this.withLeft(TreeNode.leaf());
  }

  withRightLeaf() {
    return this.withRight(TreeNode.leaf());
  }

  withLeaves() {
    return this.withChildren(TreeNode.leaf(), TreeNode.leaf());
  }
}
