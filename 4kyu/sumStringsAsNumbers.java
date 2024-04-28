// 4 kyu Sum Strings as Numbers
// 
// Given the string representations of two integers, return the string representation of the sum of those integers.
// 
// For example:
// 
// sumStrings('1','2') // => '3'
// 
// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".
// 
// I have removed the use of BigInteger and BigDecimal in java
// 
// Python: your solution need to work with huge numbers (about a milion digits), converting to int will not work.
//  
// Answer:
import java.util.ArrayList; 
import java.util.Arrays; 
import java.util.regex.Pattern;

public class Kata {
  public static String sumStrings(String a, String b) {
    if(a.length() == 0) {
      return b;
    }
    if(b.length() == 0) {
      return a;
    }
    
    ArrayList<String> aList = new ArrayList<String>(Arrays.asList(a.split(""))); 
    ArrayList<String> bList = new ArrayList<String>(Arrays.asList(b.split(""))); 
    
    int carry = 0;
    String result = "";
    String ac = "";
    String bc = "";
    
    while(aList.size() > 0 || bList.size() > 0 || carry > 0) {
      ac = aList.size() > 0 ? aList.remove(aList.size() - 1) : "0";
      bc = bList.size() > 0 ? bList.remove(bList.size() - 1) : "0";
      carry += Integer.parseInt(ac) + Integer.parseInt(bc);
      result = (carry % 10) + result;
      carry = carry > 9 ? 1 : 0;
    }
    return result.replaceAll("^0+", "");
  }
}