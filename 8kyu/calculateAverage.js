// 8 kyu Calculate average 
//
// Write a function which calculates the average of the numbers in a given list.
// 
// Note: Empty arrays should return 0.
//
// Answer:
const find_average = array => array.reduce((a,e) => a+=e,0) / array.length || 0;