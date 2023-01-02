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
#include <stdbool.h>

bool validParentheses(const char *str_in) {
  int count = 0;
  for (int i = 0; str_in[i] != '\0'; i++) {
    if(str_in[i] == '(') count++;
    if(str_in[i] == ')') count--;
    if(count < 0) return false;
  }
  if(count > 0) return false;
  return true;
}
