// 6 kyu Duplicate Encoder
//
// The goal of this exercise is to convert a string to a new string where each character in the new
// string is "(" if that character appears only once in the original string, or ")" if that character
// appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
// Examples
//
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("
//
// Notes
//
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
//
// Answer:
//
// Regex
function duplicateEncode(word) {
  let newStr = "";
  let regExpStr = "";
  word
    .toLowerCase()
    .split("")
    .forEach((v, i, a) => {
      regExpStr = v.replace(/[()]/g, "\\$&");
      if ((word.toLowerCase().match(new RegExp(`${regExpStr}`, "g")) || []).length > 1) {
        newStr += ")";
      } else newStr += "(";
    });
  return newStr;
}

// Hash map / array methods
function duplicateEncode(word) {
  word = word.toLowerCase();
  let obj = word.split("").reduce((a, e) => (a[e] ? a[e]++ : (a[e] = 1), a), {});
  return word
    .split("")
    .map((e) => (obj[e] === 1 ? "(" : ")"))
    .join("");
}
