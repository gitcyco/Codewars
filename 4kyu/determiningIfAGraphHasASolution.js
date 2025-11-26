// 4 kyu Determining if a graph has a solution
//
// Implement a function solve_graph/solveGraph (or equivalent depending on your language) accepting 3 arguments in the given order:
//
//     start - The initial node of the directed graph
//     end - The destination node of the directed graph
//     arcs - A directed graph represented by a list/array/dictionary of directed edges
//
// and returns a boolean value depending on whether the destination node can be reached from the initial node by traversing zero or more directed edges.
// That means that if the start and end nodes are identical then the end node is trivially considered to be reachable - return true/True in this case.
// Also, if the start and end nodes are distinct and either node does not appear in arcs then you should return false/False since
// there is no sequence of directed edges that you may traverse to reach the end node from the start node.
//
// You may not assume any properties of the given directed graph (other than the fact that it is a directed graph) - for example, the given directed
// graph may contain multiple edges (in either direction) between two nodes or contain loops (directed edges starting and finishing on the same node).
//
// You may also wish to take a look at adjacency lists.
//
// Example:
//
// var arcs = [
// { start : "a", end : "b"},
// { start : "a", end : "a"}
// ];
//
// solve_graph("a", "b", arcs);
// // Should return true, because "b" can be reached from "a"
//
// solve_graph("a", "c", arcs);
// // Should return false, because "c" can never be reached from "a", using any combination of arcs
//
// Answer:
function solve_graph(start, end, arcs) {
  const adj = getAdj(arcs);
  const queue = [start];
  const visited = {};
  while (queue.length) {
    const item = queue.pop();
    if (item === end) return true;
    visited[item] = true;
    const list = adj[item] ?? [];
    for (let node of list) {
      if (!visited[node]) queue.push(node);
    }
  }
  return false;
}

const getAdj = (arcs) => {
  return arcs.reduce((map, { start, end }) => {
    start in map ? map[start].add(end) : (map[start] = new Set(end));
    return map;
  }, {});
};
