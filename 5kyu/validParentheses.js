// 5 kyu Valid Parentheses
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
// 0 <= input.length <= 100
//
// Answer:
function validParentheses(parens) {
  const stack = [];
  for (p of parens) {
    if (p === "(") stack.push(p);
    else if (p === ")") {
      let val = stack.pop();
      if (val !== "(") return false;
    }
  }
  return stack.length > 0 ? false : true;
}
