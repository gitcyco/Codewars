// 6 kyu Permute a Palindrome
//
// Write a function that will check whether ANY permutation of the characters of the input string is a palindrome.
// Bonus points for a solution that is efficient and/or that uses only built-in language functions.
// Deem yourself brilliant if you can come up with a version that does not use any function whatsoever.
// Example
//
// madam -> True
// adamm -> True
// junk -> False
// Hint
//
// The brute force approach would be to generate all the permutations of the string and check each one of them whether it is a palindrome.
// However, an optimized approach will not require this at all.
//
// Answer:
// (without any library functions, iterators, etc)
function permuteAPalindrome(str) {
  const p = {};
  let ltr = "";
  const e = !(str.length % 2);
  let oC = 0;
  for (let i = 0; i < str.length; i++) {
    p[str[i]] ? p[str[i]]++ : ((p[str[i]] = 1), (ltr += str[i]));
  }
  for (let i = 0; i < ltr.length; i++) {
    if (p[ltr[i]] % 2) oC++;
    if (e && p[ltr[i]] === 1) return false;
  }
  if (oC > 1) return false;
  return true;
}
