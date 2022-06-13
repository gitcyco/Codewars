// 7 kyu Debug Sum of Digits of a Number
//
// Debug   function getSumOfDigits that takes positive integer to calculate sum of it's digits. Assume that argument is an integer.
// Example
// 
// 123  => 6
// 223  => 7
// 1337 => 14
//
// Answer: (fixing the bugs)
function getSumOfDigits(integer) {
    let sum = 0;
    let digits =  Math.floor(integer).toString();
    for(let i = 0; i < digits.length; i++) {
      sum += +digits[i];
    }
    return sum;
}

// Short:
const getSumOfDigits = n => n.toString().split('').reduce((ac,e) => ac += +e,0);