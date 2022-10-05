// 5 kyu Merged String Checker
//
// At a job interview, you are challenged to write an algorithm to check if a given string, s, can be formed from two other strings, part1 and part2.
//
// The restriction is that the characters in part1 and part2 should be in the same order as in s.
//
// The interviewer gives you the following example and tells you to figure out the rest from the given test cases.
//
// For example:
//
// 'codewars' is a merge from 'cdw' and 'oears':
//
//     s:  c o d e w a r s   = codewars
// part1:  c   d   w         = cdw
// part2:    o   e   a r s   = oears
//
// Answer:
function isMerge(s, p1, p2) {
  if ((p1 + p2).length !== s.length) return false;
  let i1 = 0;
  let i2 = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === p1[i1] && s[i] === p2[i2]) {
      // If it can go either way, check both paths via recursion
      let tmp = isMerge(s.slice(i + 1), p2.slice(i2 + 1), p1.slice(i1));
      if (tmp) return tmp;
      else tmp = isMerge(s.slice(i + 1), p2.slice(i2), p1.slice(i1 + 1));
      if (tmp) return tmp;
    }
    if (p1[i1] === s[i]) {
      i1++;
      continue;
    }
    if (p2[i2] === s[i]) {
      i2++;
      continue;
    }

    if (p1[i1] !== s[i] && p2[i2] !== s[i]) return false;
  }
  return true;
}
