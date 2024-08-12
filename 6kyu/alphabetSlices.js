// 6 kyu Alphabet Slices
//
// Given a string of lowercase letters, find substrings that consist of consecutive letters
// of the lowercase English alphabet and return a similar string, but with these substrings in reversed alphabetical order.
//
// examples:
//
// ("xabc")=> "xcba"
//
// xa is not found in the alphabet, but abc is found, so it is reversed.
//
// ("pqrsxdef")=> "srqpxfed"
//
// ("jklxyz")=> "lkjzyx"
//
// ("vwxcdefg")=> "xwvgfedc"
//
// ("vvmnozzstubb")=> "vvonmzzutsbb"
//
// Note: if there are no alphabet substrings in the input string, return the input string as is.
//
// All inputs will consist of one or more lowercase letters. This kata uses only lowercase strings.
//
// Answer:
function solution(str) {
  let prev = str[0];
  let res = "";
  let tmp = prev;
  for (let i = 1; i < str.length; i++) {
    let curCode = str[i].charCodeAt(0);
    let prevCode = prev.charCodeAt(0);
    if (curCode === prevCode + 1) {
      tmp = str[i] + tmp;
    } else {
      res += tmp;
      tmp = str[i];
    }
    prev = str[i];
  }
  return res + tmp;
}
