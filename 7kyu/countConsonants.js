// 7 kyu Count consonants
//
// Write a function consonantCount, consonant_count or ConsonantCount that takes a string of English-language text and returns the number of consonants in the string.
//
// Consonants are all letters used to write English excluding the vowels a, e, i, o, u.
//
// Answer:
const consonantCount = (s) => (s.replace(/[^a-z]/gi, "").match(/[^aeiou ]/gi) || []).length;
