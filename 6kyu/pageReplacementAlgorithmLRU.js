// 6 kyu Page replacement algorithms: LRU
//
// Description:
//
// In a computer operating system that uses paging for virtual memory management, page replacement
// algorithms decide which memory pages to page out when a page of memory needs to be allocated.
// Page replacement happens when a requested page is not in memory (page fault) and a free page
// cannot be used to satisfy the allocation, either because there are none, or because the number of free pages is lower than some threshold.
// The LRU page replacement algorithm
//
// The least recently used (LRU) page replacement algorithm works on the idea that pages that have been
// most heavily used in the past few instructions are most likely to be used heavily in the next few instructions too.
// If not all the slots in memory are occupied, the requested page is inserted in the first available slot when a page fault happens.
// If the memory is full and a page fault happens, the least recently used page in memory gets replaced by the requested page.
// To explain it in a clearer way: the least recently used page is the page that is currently in memory and has been referenced further in the past.
//
// Your task is to implement this algorithm. The function will take two parameters as input: the number of maximum pages
// that can be kept in memory at the same time n and a reference list containing numbers.
// Every number represents a page request for a specific page (you can see this number as the unique ID of a page).
// The expected output is the status of the memory after the application of the algorithm.
// Note that when a page is inserted in the memory, it stays at the same position until it is removed from the memory by a page fault.
// Example:
//
// Given:
//
//     N = 3,
//     REFERENCE LIST = [1, 2, 3, 4, 3, 2, 5],
//
//   * 1 is read, page fault --> free memory available, memory = [1];
//   * 2 is read, page fault --> free memory available, memory = [1, 2];
//   * 3 is read, page fault --> free memory available, memory = [1, 2, 3];
//   * 4 is read, page fault --> LRU = 1, memory = [4, 2, 3];
//   * 3 is read, already in memory, nothing happens;
//   * 2 is read, already in memory, nothing happens;
//   * 5 is read, page fault --> LRU = 4, memory = [5, 2, 3].
//
// So, at the end we have the list [5, 2, 3], which is what you have to return.
// If not all the slots in the memory get occupied after applying the algorithm, fill the remaining
// slots (at the end of the list) with -1 to represent emptiness (note that the IDs will always be >= 1).
//
// Answer:
function lru(n, ref) {
  const lru = new LRU(n);
  for (let val of ref) {
    lru.read(val);
  }
  return lru.state;
}

class Node {
  constructor(val = null) {
    this.value = val;
    this.stateIdx = null;
    this.next = null;
    this.prev = null;
  }
}

class LRU {
  constructor(maxsize) {
    this.length = 0;
    this.state = new Array(maxsize).fill(-1);
    this.lookup = new Map();
    this.maxsize = maxsize;
    this.head = this.tail = null;
  }

  read(value) {
    let stateIdx = null;
    if (this.lookup.has(value)) {
      let node = this.lookup.get(value);
      this.detachNode(node);
      this.addHead(node);
    } else {
      if (this.length === this.maxsize) {
        let tail = this.detachNode(this.tail);
        stateIdx = tail.stateIdx;
        this.lookup.delete(tail.value);
      } else {
        stateIdx = this.length;
      }
      let node = new Node(value);
      node.stateIdx = stateIdx;
      this.lookup.set(value, node);
      this.addHead(node);
      this.state[stateIdx] = value;
    }
  }
  detachNode(node) {
    this.length--;
    if (node.next) node.next.prev = node.prev;
    if (node.prev) node.prev.next = node.next;
    if (node === this.head) this.head = node.next;
    if (node === this.tail) this.tail = node.prev;
    node.next = null;
    node.prev = null;
    return node;
  }
  addHead(node) {
    if (this.length === 0) {
      this.head = this.tail = node;
      this.length = 1;
    } else {
      node.next = this.head;
      node.prev = null;
      this.head.prev = node;
      this.head = node;
      this.length++;
    }
    return node;
  }
}
