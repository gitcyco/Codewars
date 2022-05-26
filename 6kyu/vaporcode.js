// 7 kyu V A P O R C O D E
//
// ASC Week 1 Challenge 4 (Medium #1)
// 
// Write a function that converts any sentence into a V A P O R W A V E sentence. a V A P O R W A V E sentence converts all the letters into uppercase, and adds 2 spaces between each letter (or special character) to create this V A P O R W A V E effect.
// 
// Note that spaces should be ignored in this case.
//
// Answer:
const vaporcode = string => string.replace(/\s/g,'').toUpperCase().split('').join('  ');