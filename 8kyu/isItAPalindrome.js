// 8 kyu Is it a palindrome?
//
// Write a function that checks if a given string (case insensitive) is a palindrome.
// Answer:
const isPalindrome = x => x.toLowerCase().split('').reverse().join('') === x.toLowerCase();

// shorter
const isPalindrome = x => [...x].reverse().join('').toLowerCase() === x.toLowerCase();
