// 6 kyu Find the missing letter
//
// #Find the missing letter
// 
// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.
// 
// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.
// 
// Example:
// 
// ['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'
// 
// ["a","b","c","d","f"] -> "e"
// ["O","Q","R","S"] -> "P"
// 
// (Use the English alphabet with 26 letters!)
// 
// Have fun coding it and please don't forget to vote and rank this kata! :-)
// 
// I have also created other katas. Take a look if you enjoyed this kata!
//
// Answer:
function findMissingLetter(array) {
    let arr = [...Array(array[array.length-1].charCodeAt(0) - array[0].charCodeAt(0))].map((e,i)=>array[i].charCodeAt(0));
    for(let i = 1; i < arr.length; i++) if(arr[i] - arr[i-1] != 1) return String.fromCharCode(arr[i]-1); 
}