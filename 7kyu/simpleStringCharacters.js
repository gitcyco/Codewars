// 7 kyu Simple string characters
//
// In this Kata, you will be given a string and your task will be to return a list of ints 
// detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.
// 
// Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
// --the order is: uppercase letters, lowercase, numbers and special characters.
// 
// More examples in the test cases.
// 
// Good luck!
//
// Answer:
function solve(s){
    return [
       s.match(/[A-Z]/g).length,
       s.match(/[a-z]/g).length,
       s.match(/[0-9]/g).length,
       s.match(/(_|\W)/g).length
    ]
}