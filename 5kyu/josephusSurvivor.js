// 5 kyu Josephus Survivor
//
// In this kata you have to correctly return who is the "survivor", ie: the last element of a Josephus permutation.
//
// Basically you have to assume that n people are put into a circle and that they are eliminated in steps of k elements, like this:
//
// n=7, k=3 => means 7 people in a circle
// one every 3 is eliminated until one remains
// [1,2,3,4,5,6,7] - initial sequence
// [1,2,4,5,6,7] => 3 is counted out
// [1,2,4,5,7] => 6 is counted out
// [1,4,5,7] => 2 is counted out
// [1,4,5] => 7 is counted out
// [1,4] => 5 is counted out
// [4] => 1 counted out, 4 is the last element - the survivor!
//
// The above link about the "base" kata description will give you a more thorough insight about the origin of this
// kind of permutation, but basically that's all that there is to know to solve this kata.
//
// Notes and tips: using the solution to the other kata to check your function may be helpful, but as much larger
// numbers will be used, using an array/list to compute the number of the survivor may be too slow; you may assume that both n and k will always be >=1.
//
// Answer:
function josephusSurvivor(n, k) {
  let ll = new cLL(new Array(n).fill(0).map((e, i) => i + 1));
  const out = [];
  let a = 1;
  while (out.length < n - 1) {
    if (a % k === 0) {
      out.push(ll.getCur());
      ll.delCur();
    }
    if (ll.size > 0) ll.next();
    else break;
    a++;
  }
  return ll.getCur();
}

// Node class:
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Circular Linked List:
class cLL {
  constructor(arr = []) {
    this.size = arr.length;
    this.head = null;
    this.current = null;
    this.prev = null;
    if (this.size) {
      this.head = new Node();
      let cur = this.head;
      for (let i = 0; i < arr.length; i++) {
        cur.data = arr[i];
        if (i !== arr.length - 1) {
          cur.next = new Node();
          cur = cur.next;
        }
      }
      this.prev = cur;
      cur.next = this.head;
      this.current = this.head;
    }
  }
  next() {
    this.prev = this.current;
    this.current = this.current.next;
  }
  getCur() {
    return this.current.data;
  }
  delCur() {
    this.size--;
    if (this.size === 0) {
      this.head = null;
      this.current = null;
      this.prev = null;
    } else {
      this.prev.next = this.current.next;
    }
  }
}
