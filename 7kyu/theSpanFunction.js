// 7 kyu The Span Function
//
// The span function is a good one to know. It accepts an array and a predicate function and returns two arrays. 
// The first array contains all the elements of the argument array up to the item that caused the first failure of the predicate. 
// The second returned array contains the rest of the original array. The original array is not modified.
// 
// For example,
// 
// 
// function isEven (x) {
//   return Math.abs(x) % 2 === 0;
// }
// 
// var arr = [2,4,6,1,8,10];
// 
// // This is true
// span(arr, isEven) === [[2,4,6],[1,8,10]]
// 
// Your task is to...wait for it... write your own span function!!!
// 
// Hint/Challenge: If you have completed the takeWhile function and the dropWhile function, then you can solve this problem in one line!
//
// Answer:
const span = (arr, predicate) => !arr.length 
  ? [[],[]] : (a = arr.findIndex(e=> !predicate(e))) >= 0 
  ? [arr.slice(0,a), arr.slice(a)] : [arr,[]];