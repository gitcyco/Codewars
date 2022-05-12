// 6 kyu Remove the parentheses
//
// Remove the parentheses
// 
// In this kata you are given a string for example:
// 
// "example(unwanted thing)example"
// 
// Your task is to remove everything inside the parentheses as well as the parentheses themselves.
// 
// The example above would return:
// 
// "exampleexample"
// 
// Notes
// 
//     Other than parentheses only letters and spaces can occur in the string. Don't worry about other brackets like "[]" and "{}" as these will never appear.
//     There can be multiple parentheses.
//     The parentheses can be nested.
// 
//
// Answer:
function removeParentheses(s){
    let newStr = s;
    while(/\(([^\()]+)\)/.test(newStr)) {
      newStr = newStr.replace(/\(([^\()]+)\)/g, '');
    }
    return newStr;
}