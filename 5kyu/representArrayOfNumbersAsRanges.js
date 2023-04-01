// 5 kyu Represent array of numbers as ranges
//
// Your task is to take arrays of numbers and compress them into ranges.
//
// The numbers in the array are mostly consecutive.
// If you convert them as ranges, it will save a lot of space.
// You should write a function that will convert an array of numbers into a string.
// A range, or series of consecutive numbers, will be represented as two numbers
// separated by an underscore, a range of one just by the number its self and multiple ranges separated by commas.
//
// For example,
// The numbers 5, 6, 7, 8 and 9 would be displayed as "5_9"
// The number 6 would just be "6"
// The numbers 3,4,5,6,9 would be "3_6,9"
//
// Using the above system, you should write two functions:
// toRange - convert an array of numbers to a range string
// toArray - convert a range string back to an array
// Warnings
//
// The numbers could arrive all jumbled up so you'll need to sort them
// Sometimes the same number may appear more than once, duplicates should be discarded.
//
// Edge cases
//
// An empty array should become an empty string if passed to toRange and vise versa for the toArray function.
// Also, ranges of 2 digits will take the same space whether they are represented as a sequence or a range.
// I.e. "5,6,8,9".length === "5_6,8_9".length so there will be no compression, but represent them as a range anyway for consistency.
//
// Answer:
// Should return a string representing the ranges
function toRange(arr) {
  if (!arr || arr.length === 0) return "";
  arr = [...new Set(arr)].sort((a, b) => a - b);
  let range = [];
  let out = [];
  for (let i = 0; i < arr.length; i++) {
    range.push(arr[i]);
    if (i !== 0 && arr[i] - 1 !== arr[i - 1]) {
      range.pop();
      out.push(dump(range));
      range = [arr[i]];
    }
  }
  out.push(dump(range));
  return out.join();
}

// Should return an array
function toArray(str) {
  if (!str || str.length === 0) return [];
  let arr = str.split(",");
  let out = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes("_")) {
      let items = arr[i].split("_");
      let [s, e] = [items[0], items[1]];
      for (let j = +s; j <= +e; j++) {
        out.push(j);
      }
    } else out.push(+arr[i]);
  }
  return out;
}

const dump = (arr) => {
  if (arr.length > 1) return `${arr[0]}_${arr[arr.length - 1]}`;
  else return `${arr[0]}`;
};
