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
package kata

func ValidParentheses(parens string) bool {
  count := 0
  for i := 0; i < len(parens); i++ {
    if parens[i] == '(' {
      count++
    }
    if parens[i] == ')' {
      count--
    }
    if count < 0 {
      return false
    }
  }
  return count == 0
}