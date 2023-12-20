// 5 kyu Find whether there is a route between two nodes in a graph
//
// A directed graph consistst of a set of nodes and a set of edges that connect it to other nodes.
//
// Given then Node data structure:
//
// class Node {
//   constructor (value, edges = []) {
//     this.value = value;
//     this.edges = edges;
//   }
// }
//
// write a function that takes two nodes a and b as input and returns whether one can go from a to b (boolean).
//
// Be careful: the graphs are directed, so being able to go from A to B does not necessarily mean
// that the reverse (from B to A) is true. Also, a given node does not necessarily have a path to itself.
//
// Answer:
// a and b are of type Node
// return whether there is a route from a to b
function getRoute(a, b) {
  const visited = {};
  const queue = [a.edges];
  let cur = a.value;
  while (queue.length > 0) {
    let edges = queue.pop();
    for (let edge of edges) {
      if (edge.value === b.value) return true;
      if (edge.value in visited) continue;
      visited[edge.value] = true;
      queue.push(edge.edges);
    }
  }
  return false;
}
