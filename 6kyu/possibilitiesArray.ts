// 7 kyu Possibilities Array
// 
// A non-empty array a of length n is called an array of all possibilities if it contains all numbers between 0 and a.length - 1 (both inclusive).
// 
// Write a function that accepts an integer array and returns true if the array is an array of all possibilities, else false.
// 
// Examples:
// 
// [1,2,0,3] => True
// # Includes all numbers between 0 and a.length - 1 (4 - 1 = 3)
// 
// [0,1,2,2,3] => False
// # Doesn't include all numbers between 0 and a.length - 1 (5 - 1 = 4)
// 
// [0] => True
// # Includes all numbers between 0 and a.length - 1 (1 - 1 = 0).
// 
// Answer:
export function isAllPossibilities(x: number[]): boolean {
  const munged: number[] = [...new Set(x)].filter((e: number) => e >= 0);
  const sum: number = Math.floor((x.length - 1) * (x.length) / 2);
  let val: number = munged.reduce((a: number, e: number) => a + e,0);
  return x.length === munged.length && sum === val;
}