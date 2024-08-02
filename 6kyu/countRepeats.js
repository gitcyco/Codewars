// 6 kyu Count Repeats
//
// Write a function that returns the count of characters that have to be removed in order to get a string with no consecutive repeats.
//
// Note: This includes any characters
// Examples
//
// 'abbbbc'  => 'abc'    #  answer: 3
// 'abbcca'  => 'abca'   #  answer: 2
// 'ab cca'  => 'ab ca'  #  answer: 1
//
// Answer:
function countRepeats(str) {
  let count = 0;
  let prev = null;
  for (let c of str) {
    if (!prev) prev = c;
    else {
      if (c === prev) count++;
      else prev = c;
    }
  }
  return count;
}
