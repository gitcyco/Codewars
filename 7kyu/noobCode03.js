// 7 kyu noobCode 03: CHECK THESE LETTERS... see if letters in "String 2" are present in "String 1"
//
// Write a function that checks if all the letters in the second string are present in the first one at least once, regardless of how many times they appear:
//
// ["ab", "aaa"]    =>  true
// ["trances", "nectar"]    =>  true
// ["compadres", "DRAPES"]  =>  true
// ["parses", "parsecs"]    =>  false
//
// Function should not be case sensitive, as indicated in example #2. Note: both strings are presented as a single argument in the form of an array.
//
// Answer:
const letterCheck = (arr) => arr[1].split("").every((e) => arr[0].toLowerCase().includes(e.toLowerCase()));
