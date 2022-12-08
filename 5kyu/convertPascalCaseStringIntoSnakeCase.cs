// 5 kyu Convert PascalCase string into snake_case
// 
// Complete the function/method so that it takes a PascalCase string and returns the string in snake_case notation.
// Lowercase characters can be numbers. If the method gets a number as input, it should return a string.
// Examples
// 
// "TestController"  -->  "test_controller"
// "MoviesAndBooks"  -->  "movies_and_books"
// "App7Test"        -->  "app7_test"
// 1                 -->  "1"
// 
// Answer:
using System;
using System.Text.RegularExpressions;  

public static class Kata 
{
  public static string ToUnderscore(int str) 
  {
    return str.ToString();
  }

  public static string ToUnderscore(string str) 
  {
    return Regex.Replace(Regex.Replace(str, "[A-Z]", m => "_" + m.Value.ToLower()), "^_", "");
  }
}