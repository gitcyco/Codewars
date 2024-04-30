<!-- 4 kyu Sum Strings as Numbers

Given the string representations of two integers, return the string representation of the sum of those integers.

For example:

sumStrings('1','2') // => '3'

A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

I have removed the use of BigInteger and BigDecimal in java

Python: your solution need to work with huge numbers (about a milion digits), converting to int will not work. -->

function sum_strings($a, $b) {
  $adata = str_split($a);
  $bdata = str_split($b);
  $carry = 0;
  $result = "";
  while(count($adata) > 0 || count($bdata) > 0 || $carry > 0) {
    $a = array_pop($adata);
    $b = array_pop($bdata);
    $carry += (int)$a + (int)$b;
    $result = $carry % 10 . $result;
    $carry = $carry > 9 ? 1 : 0;
  }
  return preg_replace("/^0+/", "", $result);
}