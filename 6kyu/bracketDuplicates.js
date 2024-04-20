// 6 kyu Bracket Duplicates
//
// Create a program that will take in a string as input and, if there are duplicates of more than
// two alphabetical characters in the string, returns the string with all the extra characters in a bracket.
//
// For example, the input "aaaabbcdefffffffg" should return "aa[aa]bbcdeff[fffff]g"
//
// Please also ensure that the input is a string, and return "Please enter a valid string" if it is not.
//
// Answer:
function stringParse(string) {
  if (typeof string !== "string") return "Please enter a valid string";
  return string.replace(/(\w)\1+/g, (e) => {
    if (e.length > 2) {
      return e.slice(0, 2) + "[" + e.slice(2) + "]";
    } else return e;
  });
}
