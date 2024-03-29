// 6 kyu Character with longest consecutive repetition
//
// For a given string s find the character c (or C) with longest consecutive repetition and return:
//
// [c, l]
//
// where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.
//
// For empty string return:
//
// ["", 0]
//
// In JavaScript: If you use Array.sort in your solution, you might experience issues with the random
// tests as Array.sort is not stable in the Node.js version used by CodeWars. This is not a kata issue.
//
// Happy coding! :)
//
// Answer:
function longestRepetition(str) {
  let reps = str.match(/(.)\1*/g) || [];
  let max = { char: "", count: 0 };
  for (let i = 0; i < reps.length; i++) {
    if (reps[i].length > max.count) {
      max.char = reps[i][0];
      max.count = reps[i].length;
    }
  }
  return [max.char, max.count];
}
