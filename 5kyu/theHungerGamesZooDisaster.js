// 5 kyu The Hunger Games - Zoo Disaster!
//
// A freak power outage at the zoo has caused all of the electric cage doors to malfunction and swing open...
//
// All the animals are out and some of them are eating each other!
// It's a Zoo Disaster!
//
// Here is a list of zoo animals, and what they can eat
//
//     antelope eats grass
//     big-fish eats little-fish
//     bug eats leaves
//     bear eats big-fish
//     bear eats bug
//     bear eats chicken
//     bear eats cow
//     bear eats leaves
//     bear eats sheep
//     chicken eats bug
//     cow eats grass
//     fox eats chicken
//     fox eats sheep
//     giraffe eats leaves
//     lion eats antelope
//     lion eats cow
//     panda eats leaves
//     sheep eats grass
//
// INPUT
// A comma-separated string representing all the things at the zoo
//
// TASK
// Figure out who eats whom until no more eating is possible.
//
// OUTPUT
// A list of strings (refer to the example below) where:
//
//     The first element is the initial zoo (same as INPUT)
//     The last element is a comma-separated string of what the zoo looks like when all the eating has finished
//     All other elements (2nd to last-1) are of the form X eats Y describing what happened
//
// Notes
//
//     Animals can only eat things beside them
//
//     Animals always eat to their LEFT before eating to their RIGHT
//
//     Always the LEFTMOST animal capable of eating will eat before any others
//
//     Any other things you may find at the zoo (which are not listed above) do not eat anything and are not edible
//
// Example
//
// Input
//
// "fox,bug,chicken,grass,sheep"
//
// Working
// 1	fox can't eat bug
//
// "fox,bug,chicken,grass,sheep"
//
// 2	bug can't eat anything
//
// "fox,bug,chicken,grass,sheep"
//
// 3	chicken eats bug
//
// "fox,chicken,grass,sheep"
//
// 4	fox eats chicken
//
// "fox,grass,sheep"
//
// 5	fox can't eat grass
//
// "fox,grass,sheep"
//
// 6	grass can't eat anything
//
// "fox,grass,sheep"
//
// 7	sheep eats grass
//
// "fox,sheep"
//
// 8	fox eats sheep
//
// "fox"
//
// Output
//
// ["fox,bug,chicken,grass,sheep", "chicken eats bug", "fox eats chicken", "sheep eats grass", "fox eats sheep", "fox"]
//
// Answer:
const whoEatsWho = function (zoo) {
  const foodWeb = {
    antelope: ["grass"],
    "big-fish": ["little-fish"],
    bug: ["leaves"],
    bear: ["big-fish", "bug", "chicken", "cow", "leaves", "sheep"],
    chicken: ["bug"],
    cow: ["grass"],
    fox: ["chicken", "sheep"],
    giraffe: ["leaves"],
    lion: ["antelope", "cow"],
    panda: ["leaves"],
    sheep: ["grass"],
  };
  const items = zoo.split(",");
  const dll = new DoublyLinkedList();
  for (const item of items) {
    dll.addTail(item);
  }
  const out = [zoo];
  let cur = dll.head;
  while (cur) {
    const val = cur.val;
    const left = cur.prev?.val;
    const right = cur.next?.val;
    if (foodWeb[val]?.includes(left)) {
      out.push(`${val} eats ${left}`);
      dll.delete(cur.prev);
      if (cur.prev) {
        cur = cur.prev;
        continue;
      }
    }
    if (foodWeb[val]?.includes(right)) {
      out.push(`${val} eats ${right}`);
      dll.delete(cur.next);
      continue;
    }
    cur = cur.next;
  }
  cur = dll.head;
  let final = [];
  while (cur) {
    final.push(cur.val);
    cur = cur.next;
  }
  out.push(final.join(","));
  return out;
};

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addHead(val) {
    const oldHead = this.head;
    const node = new Node(val, null, oldHead);
    if (oldHead) oldHead.prev = node;
    if (!this.tail) this.tail = node;
    this.head = node;
  }

  addTail(val) {
    const oldTail = this.tail;
    const node = new Node(val, oldTail, null);
    if (oldTail) oldTail.next = node;
    if (!this.head) this.head = node;
    this.tail = node;
  }

  delete(node) {
    const prev = node.prev;
    const next = node.next;
    node.prev = null;
    node.next = null;
    if (node === this.head) {
      this.head = next;
    }
    if (node === this.tail) {
      this.tail = prev;
    }
    if (prev) prev.next = next;
    if (next) next.prev = prev;
  }
}

class Node {
  constructor(val = null, prev = null, next = null) {
    this.val = val;
    this.prev = prev;
    this.next = next;
  }
}
