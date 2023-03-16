// 6 kyu Simple min heap implementation
//
// Heap is a data structure, that takes elements in arbitrary order, and returns them in a sorted order one by one.
// Implementing a min heap
//
// In this kata, we will implement a min heap, it is going to have 2 methods:
// push
//
// Takes a value and adds it to a heap
// pop
//
// Finds the smallest value in the heap, removes it from the heap, and returns it
//
// var heap = new MinHeap();
// heap.push(4);
// heap.push(1);
// heap.push(7);
// heap.push(9);
// heap.push(2);
// console.log( heap.pop()); // 1
// console.log( heap.pop()); // 2
// console.log( heap.pop()); // 4
// console.log( heap.pop()); // 7
// console.log( heap.pop()); // 9
//
// Please note that for this kata we do not assess the effiency of your implementation, so anything that acts like a heap will pass the tests.
//
// Answer:
class MinHeap {
  constructor() {
    this.heap = [];
  }
  push(val) {
    this.heap.push(val);
    if (this.heap.length > 1) this.#sort();
  }
  pop() {
    if (this.heap.length === 1) return this.heap.pop();
    [this.heap[0], this.heap[this.heap.length - 1]] = [this.heap[this.heap.length - 1], this.heap[0]];
    let out = this.heap.pop();
    this.#sink();
    return out;
  }
  #sink() {
    let index = 0;
    let val = this.heap[0];
    let len = this.heap.length;
    while (true) {
      let lIdx = index * 2 + 1;
      let rIdx = index * 2 + 2;
      let lVal, rVal;
      let swapIdx = null;
      if (lIdx < len) {
        lVal = this.heap[lIdx];
        if (val > lVal) swapIdx = lIdx;
      }
      if (rIdx < len) {
        rVal = this.heap[rIdx];
        if ((swapIdx !== null && rVal < lVal) || (swapIdx === null && val > rVal)) {
          swapIdx = rIdx;
        }
      }
      if (swapIdx === null) break;
      [this.heap[index], this.heap[swapIdx]] = [this.heap[swapIdx], this.heap[index]];
      index = swapIdx;
    }
  }
  #sort() {
    let index = this.heap.length - 1;
    let parent = Math.floor((index - 1) / 2);
    while (index >= 0 && this.heap[index] < this.heap[parent]) {
      [this.heap[index], this.heap[parent]] = [this.heap[parent], this.heap[index]];
      index = parent;
      parent = Math.floor((index - 1) / 2);
    }
  }
}
