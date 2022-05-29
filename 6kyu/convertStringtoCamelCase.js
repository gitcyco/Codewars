// 6 kyu Convert string to camel case
//
// Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
// The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
// Examples
// 
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
//
// Answer:
function toCamelCase(str){
    str = str.replace(/[^a-zA-Z]/g, "_");
    return str.split('_').map((e,i) => e && i > 0 ? e[0].toUpperCase() + e.slice(1) : e).join('');
}