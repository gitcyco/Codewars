// 6 kyu Portion of Array
//
// You will be given an Array(a), starting position (i) and number of portion to return (n) .
// Your task is to return n portion of the array (a) starting from position (i ).
// The starting position could be negative, in that case you should start counting reverse direction till you get all your n portion.
// In case you can not find the exact n portion of elements counting from the starting position i or the starting
// position i is out of the index of the array, you should return -1 (throw an ArgumentOutOfRangeException in C#).
//
// example:
//
// function p([1,2,3,4],1,2)
//  should return [2,3]
//
//  how ?
//  Array => [1,2,3,4]
//            | | | |
//  index =>  0 1 2 3
//  portion     |_|   => [2,3]
//
// function p([1,2,3,4],-1,2)
//  should return [2,3]
//
//  how ?
//  Array => [1,  2,  3, 4]
//            |   |   |  |
//  index=>   -3 -2  -1  0
//  portion=>     |___|      =>[2,3]
//
// function p([1],1,5)
//  should return -1
//
// how ?
// Array => [1]
//           |
// index=>   0
// required starting index =>1 , which does not exist so we return -1
//
// Answer:
function portion(a, i, n) {
  if (i < 0) i = a.length - Math.abs(i) - n;
  if (i < 0 || n + i > a.length) return -1;
  return a.slice(i, i + n);
}
