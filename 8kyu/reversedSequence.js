// 8 kyu Reversed sequence 
//
// Build a function that returns an array of integers from n to 1 where n>0.
// 
// Example : n=5 --> [5,4,3,2,1]
//
// Answer:
const reverseSeq = n => Array(n).fill(0).map((e,i)=>e=i+1).reverse();