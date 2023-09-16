// 6 kyu The Modulo-3 Sequence
//
// Consider a sequence where the first two numbers are 0 and 1 and the next number of the sequence is the sum of the previous 2 modulo 3.
// Write a function that finds the nth number of the sequence.
// Constraints:
//
//     1 ≤ N ≤ 10^19
//
// Example:
//
// sequence(1);
// 0
// sequence(2);
// 1
// sequence(3);
// 1
// Answer:
//
// Simple way:
function sequence(n) {
  let key = [1, 0, 1, 1, 2, 0, 2, 2];
  return key[n % 8];
}

// Ridiculous code golf:
const sequence = (n) => [1, 0, 1, 1, 2, 0, 2, 2][n % 8];

// Using a generator and calculating it, because why not:
function sequence_gen(n) {
  const gen = getNext();
  let out = 1;
  let num = n % 8;
  for (let i = 0; i < num; i++) {
    out = gen.next().value;
  }
  return out;
}

function* getNext() {
  let prevA = 0;
  let prevB = 1;
  yield 0;
  yield 1;
  while (true) {
    let val = (prevA + prevB) % 3;
    prevA = prevB;
    prevB = val;
    yield val;
  }
}
