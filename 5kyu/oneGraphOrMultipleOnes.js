// 5 kyu One graph or multiple ones ?
//
// Your mission is to write the function isOneGraph.
//
// This function receive an array of Segments as parameter and should return:
//
//     true if all the Segments are connected as a single graph.
//     Basically, if each and every points of all Segments are reachable from any other points
//     'false' if the previous is not verified
//
// A Segment is an object containing 2 properties: a and b.
// Both have a Point assigned.
//
// A Point is an object containing 2 properties: x and y.
// Both containing an Integer and representing coordinates of the Point
//
// Answer:
function Point(x, y) {
  this.x = x;
  this.y = y;
}

function Segment(a, b) {
  this.a = a;
  this.b = b;
}

function isOneGraph(input) {
  const map = {};
  let queue;
  for (let seg of input) {
    const a = [seg.a.x, seg.a.y];
    const b = [seg.b.x, seg.b.y];
    queue = [a];
    if (a in map) map[a].list.push(b);
    else map[a] = { list: [b], visited: false };
    if (b in map) map[b].list.push(a);
    else map[b] = { list: [a], visited: false };
  }
  while (queue.length) {
    let node = queue.pop();
    let adj = map[node].list;
    for (let item of adj) {
      if (item in map && !map[item].visited) {
        map[item].visited = true;
        queue.push(item);
      }
    }
  }
  return Object.values(map).every((e) => e.visited);
}
