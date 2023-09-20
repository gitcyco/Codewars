// 4 kyu Simple Memory Manager
//
// One of the services provided by an operating system is memory management.
// The OS typically provides an API for allocating and releasing memory in a process's address space.
// A process should only read and write memory at addresses which have been allocated by the operating system.
// In this kata you will implement a simulation of a simple memory manager.
//
// The language you will be using has no low level memory API, so for our simulation we will simply use an array as the process address space.
// The memory manager constructor will accept an array (further referred to as memory) where blocks of indices will be allocated later.
// Memory Manager Contract
// allocate(size)
//
// allocate reserves a sequential block (sub-array) of size received as an argument in memory.
// It should return the index of the first element in the allocated block, or throw an exception if there is no block big enough to satisfy the requirements.
// release(pointer)
//
// release accepts an integer representing the start of the block allocated ealier, and frees that block.
// If the released block is adjacent to a free block, they should be merged into a larger free block. Releasing an unallocated block should cause an exception.
// write(pointer, value)
//
// To support testing this simulation our memory manager needs to support read/write functionality.
// Only elements within allocated blocks may be written to. The write method accepts an index in memory and a value.
// The value should be stored in memory at that index if it lies within an allocated block, or throw an exception otherwise.
// read(pointer)
//
// This method is the counterpart to write. Only indices within allocated blocks may be read.
// The read method accepts an index.
// If the index is within an allocated block, the value stored in memory at that index should be returned, or an exception should be thrown otherwise.
//
// Answer:
class MemoryManager {
  /**
   * @constructor Creates a new memory manager for the provided array.
   * @param {memory} An array to use as the backing memory.
   */
  constructor(memory) {
    this.memory = memory;
    this.allocated = [];
    this.unallocated = [[0, memory.length - 1]];
  }
  /**
   * Allocates a block of memory of requested size.
   * @param {number} size - The size of the block to allocate.
   * @returns {number} A pointer which is the index of the first location in the allocated block.
   * @throws If it is not possible to allocate a block of the requested size.
   */
  allocate(size) {
    let blockIndex = this.unallocated.findIndex((e) => e[1] - e[0] + 1 >= size);
    if (blockIndex === -1) throw new Error("not enough memory");
    let block = this.unallocated.splice(blockIndex, 1)[0];
    let start = block[0];
    let end = start + size - 1;
    this.allocated.push([start, end]);
    this.unallocated.push([start + size, block[1]]);
    this.merge();
    return start;
  }
  /**
   * Releases a previously allocated block of memory.
   * @param {number} pointer - The pointer to the block to release.
   * @throws If the pointer does not point to an allocated block.
   */
  release(pointer) {
    let blockIndex = this.allocated.findIndex((e) => e[0] === pointer);
    if (blockIndex === -1) throw new Error("release unallocated block");
    let block = this.allocated.splice(blockIndex, 1)[0];
    this.unallocated.push(block);
    this.merge();
  }
  /**
   * Reads the value at the location identified by pointer
   * @param {number} pointer - The location to read.
   * @returns {number} The value at that location.
   * @throws If pointer is in unallocated memory.
   */
  read(pointer) {
    let valid = false;
    for (let block of this.allocated) {
      if (pointer >= block[0] && pointer <= block[1]) {
        return this.memory[pointer];
      }
    }
    throw new Error("attempt to read from unallocated memory");
  }
  /**
   * Writes a value to the location identified by pointer
   * @param {number} pointer - The location to write to.
   * @param {number} value - The value to write.
   * @throws If pointer is in unallocated memory.
   */
  write(pointer, value) {
    for (let block of this.allocated) {
      if (pointer >= block[0] && pointer <= block[1]) {
        this.memory[pointer] = value;
        return;
      }
    }
    throw new Error("attempt to write to unallocated memory");
  }
  merge() {
    this.unallocated.sort((a, b) => a[0] - b[0]);
    for (let i = 0; i < this.unallocated.length - 2; i++) {
      let cur = this.unallocated[i];
      let next = this.unallocated[i + 1];
      if (cur[1] === next[0] - 1) {
        cur[1] = next[1];
        this.unallocated.splice(i + 1, 1);
      }
    }
  }
}
