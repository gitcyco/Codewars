// 6 kyu Basic Bitmapping
//
// Bit Vectors/Bitmaps
//
// A bitmap is one way of efficiently representing sets of unique integers using single bits.
// To see how this works, we can represent a set of unique integers between `0` and `< 20` using a vector/array of 20 bits:
// ``` var set = [3, 14, 2, 11, 16, 4, 6];``` ``` var bitmap = [0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0]; ```
//
// As you can see, with a bitmap, the length of the vector represents the range of unique values in the set (in this case `0-20`), and the `0/1` represents whether or not the current index is equal to a value in the set.
// Task:
//
// Your task is to write a function `toBits` that will take in a set of uniqe integers and output a bit vector/bitmap (an array in javascript) using `1`s and `0`s to represent present and non-present values.
//
// Input:
// The function will be passed a set of unique integers in string form, in a random order, separated by line breaks.
// Each integer can be expected to have a unique value `>= 0` and `< 5000`.
// The input will look like this:
// `let exampleInput = '3\n14\n5\n19\n18\n1\n8\n11\n2...'`
//
// Output:
// The function will be expected to output a 5000 bit vector (array) of bits, either `0` or `1`, for example:
// `let exampleOutput = [0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0,...]`
//
// Answer:
const toBits = (set) => {
  const arr = new Array(5000).fill(0);
  set.split("\n").forEach((e) => (arr[+e] = 1));
  return arr;
};

const toBits_ = (set) => {
  let arr = set.split("\n").map((e) => +e);
  return Array(5000)
    .fill(0)
    .map((e, i) => (arr.includes(i) ? 1 : 0));
};
