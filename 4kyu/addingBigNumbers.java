// 4 kyu Adding Big Numbers
// 
// We need to sum big numbers and we require your help.
// 
// Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.
// Example
// 
// add("123", "321"); -> "444"
// add("11", "99");   -> "110"
// 
// Notes
// 
//     The input numbers are big.
//     The input is a string of only digits
//     The numbers are positives
// 
// Answer:
public class Kata {
    public static String add(String inputA, String inputB) {
      int carry = 0;
      String total = "";
      int len = Math.max(inputA.length(), inputB.length());
      String strA = new StringBuilder(inputA.replaceFirst("^0+(?!$)", "")).reverse().toString();    
      String strB = new StringBuilder(inputB.replaceFirst("^0+(?!$)", "")).reverse().toString();    
      for(int i = 0; i < len; i++) {
        int a = i < strA.length() ? strA.charAt(i) - '0' : 0;
        int b = i < strB.length() ? strB.charAt(i) - '0' : 0;
        carry += a + b;
        total = (carry % 10) + total;
        carry = carry > 9 ? 1 : 0;
      }
      return carry == 0 ? total.replaceFirst("^0+(?!$)", "") : carry + total.replaceFirst("^0+(?!$)", "");
    }
  }