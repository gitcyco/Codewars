// 5 kyu Sorted list
//
// The task here is to create a class that maintains a sorted list of numbers in ascending order.
//
// The class will have two methods:
//
//     add(x) will add x to the list
//
//     get(i) will get the ith value in the list
//
// You should also provide a length property that gives the length of the list.
//
// Answer:
class SortedList {
  constructor() {
    this.list = [];
  }
  add(n) {
    if (this.list.length === 0 || n > this.list[this.list.length]) {
      this.list.push(n);
      return;
    }
    if (n < this.list[0]) {
      this.list.unshift(n);
      return;
    }
    let min = 0;
    let max = this.list.length - 1;
    let mid;
    while (min <= max) {
      mid = Math.floor((min + max) / 2);
      if (this.list[mid] === n) break;
      if (this.list[mid] > n) max = mid - 1;
      else min = mid + 1;
    }
    if (n < this.list[mid]) mid--;
    this.list.splice(mid + 1, 0, n);
  }
  get(i) {
    return this.list[i];
  }
  get length() {
    return this.list.length;
  }
}
