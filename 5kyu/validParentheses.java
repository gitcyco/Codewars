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
public class Solution{
  public static boolean validParentheses(String p)
  {
    int count = 0;
    for(int i = 0; i < p.length(); i++) {
      if(p.charAt(i) == '(') count++;
      if(p.charAt(i) == ')') count--;
      if(count < 0) return false;
    }
    return count == 0;
  }
}
