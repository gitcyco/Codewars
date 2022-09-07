// 6 kyu Array Exchange
//
// Array Exchange and Reversing
//
// It's time for some array exchange! The objective is simple: exchange the elements of two arrays in-place in a way that their new content is also reversed.
//
// // before
// const myArray = ['a', 'b', 'c'];
// const otherArray = [1, 2, 3];
//
// exchangeWith(myArray, otherArray);
//
// // after
// myArray => [3, 2, 1]
// otherArray => ['c', 'b', 'a']
//
// Answer:
function exchangeWith(a, b) {
  let at = [...b.splice(0)].reverse();
  let bt = [...a.splice(0)].reverse();
  at.forEach((e) => a.push(e));
  bt.forEach((e) => b.push(e));
}
