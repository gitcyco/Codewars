// 6 kyu Page replacement algorithms: clock
//
// In a computer operating system that uses paging for virtual memory management, page replacement algorithms
// decide which memory pages to page out when a page of memory needs to be allocated.
// Page replacement happens when a requested page is not in memory (page fault) and a free page cannot
// be used to satisfy the allocation, either because there are none, or because the number of free pages is lower than some threshold.
// The clock page replacement algorithm
//
// The clock page replacement algorithm keeps a circular list of slots in memory, with the iterator pointing at the last examined slot in the list.
// When a page fault occurs and no empty slots exist, the algorithm checks the R-bit (referenced) of the page pointed
// by the iterator: if the R-bit is 0 the page pointed is removed from the memory, the new page is inserted and the iterator
// is moved forward, else if the R-bit is 1 it is set to 0 and the iterator is moved
// forward (this process is repeated until a page with an R-bit equal to 0 is found).
// Note that the R-bit is set to 1 when a page that is already in memory is referenced again.
//
// Your task is to implement this algorithm. The function will take two parameters as input: the number of maximum pages
// that can be kept in memory at the same time n and a reference list containing numbers.
// Every number represents a page request for a specific page (you can see this number as the unique ID of a page).
// The expected output is the status of the memory after the application of the algorithm.
// Note that when a page is inserted in the memory, it stays at the same position until it is removed from the memory by a page fault.
// Example:
//
// The circular list is represented as a normal list with toroidal behaviour. Given:
//
//     N = 3,
//     REFERENCE LIST = [6, 3, 6, 3, 2, 5, 1, 6],
//
//     +---+---+
//     |VAL| R |   * 6 is read, page fault
//     +---+---+   * 6 is inserted at position 0
//     | 6 | 0 |   * the iterator is moved forward
//     +---+---+
// --> |   |   |
//     +---+---+
//     |   |   |
//     +---+---+
//
//     +---+---+
//     |VAL| R |   * 3 is read, page fault
//     +---+---+   * 3 is inserted at position 1
//     | 6 | 0 |   * the iterator is moved forward
//     +---+---+
//     | 3 | 0 |
//     +---+---+
// --> |   |   |
//     +---+---+
//
//     +---+---+
//     |VAL| R |   * 6 is read, already in memory
//     +---+---+   * R-bit set to 1
//     | 6 | 1 |
//     +---+---+
//     | 3 | 0 |
//     +---+---+
// --> |   |   |
//     +---+---+
//
//     +---+---+
//     |VAL| R |   * 3 is read, already in memory
//     +---+---+   * R-bit set to 1
//     | 6 | 1 |
//     +---+---+
//     | 3 | 1 |
//     +---+---+
// --> |   |   |
//     +---+---+
//
//     +---+---+
//     |VAL| R |   * 2 is read, page fault
//     +---+---+   * 2 is inserted at position 2
// --> | 6 | 1 |   * the iterator is moved forward
//     +---+---+
//     | 3 | 1 |
//     +---+---+
//     | 2 | 0 |
//     +---+---+
//
//     +---+---+
//     |VAL| R |   * 5 is read, page fault
//     +---+---+   * the R-bit of 6 is 1, we set it to 0 and move forward
// --> | 6 | 0 |   * the R-bit of 3 is 1, we set it to 0 and move forward
//     +---+---+   * the R-bit of 2 is 0, we remove it from memory
//     | 3 | 0 |   * 5 is inserted at position 2
//     +---+---+   * the iterator is moved forward
//     | 5 | 0 |
//     +---+---+
//
//     +---+---+
//     |VAL| R |   * 1 is read, page fault
//     +---+---+   * the R-bit of 6 is 0, we remove it from memory
//     | 1 | 0 |   * 1 is inserted at position 0
//     +---+---+   * the iterator is moved forward
// --> | 3 | 0 |
//     +---+---+
//     | 5 | 0 |
//     +---+---+
//
//     +---+---+
//     |VAL| R |   * 6 is read, page fault
//     +---+---+   * the R-bit of 3 is 0, we remove it from memory
//     | 1 | 0 |   * 6 is inserted at position 1
//     +---+---+   * the iterator is moved forward
//     | 6 | 0 |
//     +---+---+
// --> | 5 | 0 |
//     +---+---+
//
//
// So, at the end we have the list [1, 6, 5], which is what you have to return.
// If not all the slots in the memory get occupied after applying the algorithm, fill the remaining
// slots (at the end of the list) with -1 to represent emptiness (note that the IDs will always be >= 1).
//
// Answer:
function clock(n, ref) {
  const mem = new Array(n).fill(0).map((e) => new Object({ v: -1, r: 0 }));
  let index = 0;
  const map = {};
  for (let item of ref) {
    if (item in map) mem[map[item]].r = 1;
    else {
      while (mem[index].r !== 0) {
        mem[index].r = 0;
        index = (index + 1) % n;
      }
      delete map[mem[index].v];
      mem[index].v = item;
      map[item] = index;
      index = (index + 1) % n;
    }
  }
  return mem.map((e) => +e.v);
}
