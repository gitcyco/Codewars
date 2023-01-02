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
public class Parentheses
{
    public static bool ValidParentheses(string input)
    {
      int count = 0;
      foreach(char ch in input){
        if(ch == '(') count++;
        if(ch == ')') count--;
        if(count < 0) return false;
      }
      if(count > 0) return false;
      return true;
    }
}
