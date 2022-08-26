// 6 kyu Typing series #1 --> the [backspace] function
//
// This kata is a harder version of this kata: https://www.codewars.com/kata/5727bb0fe81185ae62000ae3
//
// If you haven't done it yet, you should do that one first before doing this one.
//
// You are given a string of letters that you need to type out. In the string there is a special function: [backspace].
// Once you encounter a [backspace] , you delete the character right before it. If there is nothing to backspace , just carry on. Return the final string .
//
// e.g. oopp[backspace]s return oops (delete the p)
//
// Walkthrough:
//
// o
// oo
// oop
// oopp
// oop [backspace]
// oops
//
// e.g. ooppp[backspace][backspace]s return oops (delete both p's)
//
// Walkthrough:
//
// o
// oo
// oop
// oopp
// ooppp
// oopp [backspace]
// oop [backspace]
// oops
//
// e.g. a[backspace][backspace]ooppp[backspace][backspace]s return oops
//
// Walkthrough:
//
// a
// [nothing]
// [nothing]
// o
// oo
// oop
// oopp
// ooppp
// oopp [backspace]
// oop [backspace]
// oops
//
// But there's a twist! [backspace][backspace][backspace] can appear as [backspace]*3 or even [backspace]*2[backspace]
//
// Basically, [backspace][backspace] ... [backspace] n times can appear as [backspace]*n (n can even be 1)
//
// e.g. a[backspace]*2oopppp[backspace]*2[backspace]s return oops
//
// Walkthrough:
//
// a
// [nothing] [backspace]*2
// o
// oo
// oop
// oopp
// ooppp
// oopppp
// oopp [backspace]*2
// oop [backspace]
// oops
//
// To make it easier, only letters, spaces. and the [backspace] function will be in the initial string.
//
// Answer:
function solve(s) {
  if (s.includes("*")) {
    s = s.replace(/\*\d+/g, (e) => "[backspace]".repeat(+e.slice(1) - 1));
  }
  while (s.indexOf("[backspace]") >= 0) {
    let i = s.indexOf("[backspace]");
    if (i > 0) s = s.slice(0, i - 1) + s.slice(i + 11);
    else s = s.slice(11);
  }
  return s;
}
