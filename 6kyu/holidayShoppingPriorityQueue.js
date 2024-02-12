// 6 kyu Holiday Shopping Priority Queue
//
// The holidays are just around the corner. You know what that means...Holiday Shopping!
// I was planning on buying all you Code Warriors a gift, but I don't know which order to buy them!
// I have a small shopping list that I'm constantly adding to, and all of the items have a certain priority.
// What if I use a priority queue?
//
// Holiday Shopping Priority Queue
//
// Priority queues are similar to queues, but they add a priority to each data entry, so items
// with higher priorities (lower integer values) are processed first.
//
// While I'm running around buying the gifts, I need you to write a few methods for the HolidayPriorityQueue class to help me out.
// The class needs two methods: addGift and buyGift.
// For this Kata, all priorities will be unique, so no need to worry about equal priorities.
//
// Method descriptions:
//
// addGift (or enqueue) adds a gift to the priority queue.
// This method should accept one object (or hash in ruby), which has two
// properties: gift - the name of the gift, and priority - the priority of the gift, and should
// return the new length of the queue. All gifts will be in this form.
//
// buyGift (or dequeue) removes the gift with the highest priority from the priority queue, and returns
// the gifts name (value of the gift property). If the queue is empty, return the empty string ''
//
// Examples:
// Javascript/CoffeeScript
//
// var giftList = new HolidayPriorityQueue();
// giftList.addGift( { gift: 'Water gun', priority: 1} );// => returns 1
// giftList.addGift( { gift: 'Toy truck', priority: 4 } );// => returns 2
// giftList.addGift( { gift: 'Roller Skates', priority: 3 } );// => returns 3
//
// giftList.buyGift();// => returns 'Water gun'
// giftList.buyGift();// => returns 'Roller Skates'
// giftList.buyGift();// => returns 'Toy truck'
//
// Ruby
//
// gift_list = HolidayPriorityQueue.new
// gift_list.addGift( { 'gift' => 'Water gun', 'priority' => 1 } )// => returns 1
// gift_list.addGift( { 'gift' => 'Toy truck', 'priority' => 4 } )// => returns 2
// gift_list.addGift( { 'gift' => 'Roller Skates', 'priority' => 3} )// => returns 3
//
// gift_list.buyGift()// => returns 'Water gun'
// gift_list.buyGift()// => returns 'Roller Skates'
// gift_list.buyGift()// => returns 'Toy truck'
//
// Answer:
class HolidayPriorityQueue {
  constructor() {
    this.heap = [];
  }
  addGift(gift) {
    this.heap.push(gift);
    this.#bubbleUp();
    return this.heap.length;
  }
  buyGift() {
    if (this.heap.length === 0) return "";
    [this.heap[0], this.heap[this.heap.length - 1]] = [
      this.heap[this.heap.length - 1],
      this.heap[0],
    ];
    let item = this.heap.pop();
    this.#bubbleDown();
    return item.gift;
  }
  #bubbleUp() {
    let curIdx = this.heap.length - 1;
    let parent = Math.floor((curIdx - 1) / 2);
    while (
      curIdx > 0 &&
      this.heap[curIdx].priority < this.heap[parent].priority
    ) {
      [this.heap[curIdx], this.heap[parent]] = [
        this.heap[parent],
        this.heap[curIdx],
      ];
      curIdx = parent;
      parent = Math.floor((curIdx - 1) / 2);
    }
  }
  #bubbleDown() {
    let curIdx = 0;
    let len = this.heap.length;
    let lIdx = curIdx * 2 + 1;
    let rIdx = curIdx * 2 + 2;
    while (curIdx < len && lIdx < len && rIdx < len) {
      if (this.heap[curIdx].priority > this.heap[lIdx].priority) {
        [this.heap[curIdx], this.heap[lIdx]] = [
          this.heap[lIdx],
          this.heap[curIdx],
        ];
        curIdx = lIdx;
      } else if (this.heap[curIdx].priority > this.heap[rIdx].priority) {
        [this.heap[curIdx], this.heap[rIdx]] = [
          this.heap[rIdx],
          this.heap[curIdx],
        ];
        curIdx = rIdx;
      }
      lIdx = curIdx * 2 + 1;
      rIdx = curIdx * 2 + 2;
    }
  }
}
