// 6 kyu Longest 2-character substring
//
// Find the longest substring within a string that contains at most 2 unique characters.
//
// substring("a") => "a"
// substring("aaa") => "aaa"
// substring("abacd") => "aba"
// substring("abacddcd") => "cddcd"
// substring("cefageaacceaccacca") => "accacca"
//
// This function will take alphanumeric characters as input.
//
// In cases where there could be more than one correct answer, the first string occurrence should be used.
// For example, substring('abc') should return 'ab' instead of 'bc'.
//
// Although there are O(N^2) solutions to this problem, you should try to solve this problem in O(N) time.
// Tests may pass for O(N^2) solutions but, this is not guaranteed.
//
// This question is much harder than some of the other substring questions.
// It's easy to think that you have a solution and then get hung up on the implementation.
//
// Answer:
function substring(str) {
  let start = 0;
  let end = 0;
  let maxSize = 0;
  let subStart = 0;
  let subEnd = 0;
  let freq = new Map();
  let found = true;
  while (end < str.length && start < str.length) {
    if (found && freq.has(str[end])) freq.set(str[end], freq.get(str[end]) + 1);
    else if (found) freq.set(str[end], 1);

    if (freq.size < 3) {
      if (end < str.length) {
        found = true;
        end++;
        if (end - start > maxSize) {
          maxSize = end - start;
          subStart = start;
          subEnd = end;
        }
      }
    } else {
      found = false;
      if (freq.has(str[start])) {
        if (freq.get(str[start]) === 1) freq.delete(str[start]);
        else freq.set(str[start], freq.get(str[start]) - 1);
      }
      if (start < str.length) start++;
    }
  }
  return str.slice(subStart, subEnd);
}
