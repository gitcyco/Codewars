// 6 kyu Character counts
//
// Character counts
//
// The object is to count the number of occurances of a specified character (or set of characters) in a string.
// Instructions
//
// Complete the placeholder function characterCount.
//
//     it should return the number of times a single character appears in the string, or
//     if multiple characters are specified (either by providing an array or string of length 2 or more), it should return an array of character counts
//     see the unit tests provided for a more comprehensive definition
//
// NOTE: The tests assume that if no arguments are provided to the function (i.e. ''.characterCount()), then the result is undefined.
//
// Answer:
String.prototype.characterCount = function (chr) {
  const s = chr ? [...chr] : [];
  const out = s.reduce((ac, e) => (ac.push((this.split(`${e}`) || []).length - 1), ac), []);
  return !chr ? undefined : chr.length === 1 ? out[0] : out;
};
