// 7 kyu Keep the Order
//
// Your job here is to write a function (keepOrder in JS/CoffeeScript, keep_order in Ruby/Crystal/Python, keeporder in Julia), which
// takes a sorted array ary and a value val, and returns the lowest index where you could insert val to maintain the sorted-ness of the array.
// The input array will always be sorted in ascending order. It may contain duplicates.
//
// Do not modify the input.
// Some examples:
//
// keepOrder([1, 2, 3, 4, 7], 5) //=> 4
//                       ^(index 4)
// keepOrder([1, 2, 3, 4, 7], 0) //=> 0
//           ^(index 0)
// keepOrder([1, 1, 2, 2, 2], 2) //=> 2
//                 ^(index 2)
//
// Answer:
function keepOrder(arr, val) {
  if (!arr || arr.length === 0 || val <= arr[0]) return 0;
  if (val > arr[arr.length - 1]) return arr.length;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] <= val && arr[i] >= val) return i;
  }
}
