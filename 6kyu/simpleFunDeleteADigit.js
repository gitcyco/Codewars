// 6 kyu Simple Fun #79: Delete a Digit
//
// Task
// 
// Given an integer n, find the maximal number you can obtain by deleting exactly one digit of the given number.
// Example
// 
// For n = 152, the output should be 52;
// 
// For n = 1001, the output should be 101.
// Input/Output
// 
//     [input] integer n
// 
//     Constraints: 10 ≤ n ≤ 1000000.
// 
//     [output] an integer
//
// Answer:
function deleteDigit(n) {
    let str = n.toString();
    let newArr= [];
    for(let i = 1; i < str.length+1; i++) {
      newArr.push(+(str.slice(0, i - 1) + str.slice(i, str.length)));
    }
    return Math.max(...newArr);
}