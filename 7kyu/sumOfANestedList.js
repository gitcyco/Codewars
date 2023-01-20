// 7 kyu Sum of a nested list
//
// Implement a function to calculate the sum of the numerical values in a nested list. For example :
//
// sumNested([1, [2, [3, [4]]]]) => 10
//
// Answer:
const sumNested = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) sum += sumNested(arr[i]);
    else sum += arr[i] > 0 ? arr[i] : 0;
  }
  return sum;
};
