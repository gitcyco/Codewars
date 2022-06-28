// 3 kyu One Line Task: Check Range
//
// Task
// 
// You're given an array of integers a and two integers x and y. 
// Count the number of elements in the array such that `x ≤ a[i] ≤ y, where i is the 0-based index of the element.
// Code Limit
// 
// Less than 48 characters.
// Example
// 
// For a = [2, 5, 6, 7, 1, 3, 4, 11, 56, 49], x = 1 and y = 7,
// 
// the output should be 7.
// 
// elements 2, 5, 6, 7, 1, 3, 4 should be counted.
//
// Answer:
checkRange = (a, x, y) => a.map(e => o += x > e == e > y, o = 0) | o
// (spread out for readability, <48 chars for testing)