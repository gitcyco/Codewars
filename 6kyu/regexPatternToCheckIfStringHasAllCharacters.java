// 6 kyu regex pattern to check if string has all characters
// 
// Output
// 
// Regular expression pattern string.
// Examples
// 
// Your function should return a string.
// 
// function regexContainsAll(str) {
//   return "abc";
// }
// 
// That regex pattern will be tested like this.
// 
// const abc = "abc";
// const pattern = regexContainsAll(abc);
// const str = "zzzaaacccbbbzzz";
// new RegExp(pattern).test(str);  // -> true
// 
// Answer:
public class Kata {
  public static String regexContainsAll(String str) {
    String out = "";
    for(int i = 0; i < str.length(); i++) {
      out += String.format("(?=.*%s)", str.charAt(i));
    }
    return out;
  }
}
