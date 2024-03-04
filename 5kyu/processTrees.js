// 5 kyu Process trees
//
// Let's say you're writing an application that deals with processes on an operating system.
// Each process is identified by a unique positive integer identifier (called the pid).
// Processes can spawn arbitrarily many child processes.
// Each process has a unique parent process that spawned it, except for the special root process, which has no parent.
// With each process we also associate a ppid, or parent process identifier; for regular processes, this is the pid
// of the parent process, and for the root process, this is (arbitrarily) -1.
//
// Given the above description, it's natural to think of the processes on the operating system
// as forming a tree, rooted at the root process.
// You'd like to work with processes this way in your application.
// However, the API that the operating system exposes to you doesn't provide you with a tree, but with
// a flat list of objects -- each of which equipped with (among other metadata that we'll ignore) pid and ppid fields.
//
// For example, you might get something like this:
//
// var processes = [
//   {pid: 1, ppid: -1},
//   {pid: 219, ppid: 214},
//   {pid: 214, ppid: 1},
//   {pid: 124, ppid: 1}
// ]
//
// This represents a set of four processes; process 1 (the root process), its two children processes 124 and 214, and 214's child process 219.
//
// Your task is to take this flat list representation and create a proper tree out of it, with a node
// for each process and edges between parents and their children. Processes will be represented by a class Process:
//
// function Process(pid, children) {
//   this.pid = pid;
//   this.children = children;
// }
//
// where pid is the integer pid and children is an array of children processes.
// Using this representation, the above set of processes might be represented as:
//
// new Process(1, [
//   new Process(124, []),
//   new Process(214, [
//     new Process(219, []),
//   ]),
// ])
//
// Note that you may not assume anything about the order of the processes in the list; you can't assume
// that the root process comes first, or that in general parents appear before their children.
// (If it helps, you may assume that any given process's pid is greater than its ppid.)
//
// Answer:
function makeProcessTree(processes) {
  const graph = {};
  for (let { pid, ppid } of processes) {
    if (!graph[pid]) graph[pid] = [];
    if (!graph[ppid] && ppid !== -1) graph[ppid] = [pid];
    else if (ppid !== -1) graph[ppid].push(pid);
  }
  return walkGraph(1, graph);
}

function walkGraph(pid, graph) {
  let children = [];
  if (graph[pid].length > 0) {
    for (let child of graph[pid]) {
      children.push(walkGraph(child, graph));
    }
  }
  return new Process(pid, children);
}
