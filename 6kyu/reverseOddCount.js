// 6 kyu Reverse Odd Count
//
// Reverse all elements in an array that occur an odd number of times.
//
// ['a', 'a', 'b', 'c', 'c', 'd'] will output:
//
// ['a', 'a', 'd', 'c', 'c', 'b']
//
// Since there are 2 a's and 2 c's, they will stay in place. There is 1 d and 1 b, so they will swap places.
//
// Answer:
function reverseOddCount(array) {
  const counts = array.reduce((a, e) => (e in a ? a[e]++ : (a[e] = 1), a), {});
  const rev = array.filter((e) => counts[e] % 2).reverse();
  let revIdx = 0;
  const out = [];
  for (let i = 0; i < array.length; i++) {
    if (counts[array[i]] % 2 === 0) out.push(array[i]);
    else out.push(rev[revIdx++]);
  }
  return out;
}
