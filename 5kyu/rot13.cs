// 5 kyu Rot13
// 
// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.
// 
// Create a function that takes a string and returns the string ciphered with Rot13.
// If there are numbers or special characters included in the string, they should be returned as they are.
// Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
// 
// Answer:
// Submitted answer
using System;
using System.Text.RegularExpressions;

public class Kata
{
  public static string Rot13(string input)
  {

    Regex regex = new Regex(@"[a-zA-Z]");
    string output = regex.Replace(input, delegate (Match m)
    {
      char val = m.Value[0];
      int offset = 65;
      if (Char.IsLower(val)) offset = 97;
      int newVal = val + offset;
      char newChar = (char)(((val - offset + 13) % 26) + offset);
      return newChar.ToString();
    });
    return output;
  }
}
