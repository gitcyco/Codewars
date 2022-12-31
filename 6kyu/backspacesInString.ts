// 6 kyu Backspaces in string
//
// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"
// 
// Your task is to process a string with "#" symbols.
// Examples
// 
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""
//
// Answer:
export function cleanString(s: string): string {
    while (s.includes('#')) s = s.replace(/.[#]|^[#]/, '');
    return s;
}