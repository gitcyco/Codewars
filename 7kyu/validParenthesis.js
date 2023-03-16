// 7 kyu Valid Parentheses
//
// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid.
// The function should return true if the string is valid, and false if it's invalid.
// Examples
//
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
//
// Constraints
//
// 0 <= length of input <= 100
//
//     All inputs will be strings, consisting only of characters ( and ).
//     Empty strings are considered balanced (and therefore valid), and will be tested.
//     For languages with mutable strings, the inputs should not be mutated.
//
// Answer:
function validParentheses(parenStr) {
  const stack = [];
  const arr = parenStr.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "(") stack.push(arr[i]);
    else {
      if (stack.length === 0) return false;
      stack.pop();
    }
  }
  return stack.length === 0;
}
