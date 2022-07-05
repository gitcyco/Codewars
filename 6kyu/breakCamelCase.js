// 6 kyu Break camelCase
//
// Complete the solution so that the function will break up camel casing, using a space between words.
// Example
// 
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""
// 
// Answer:
const solution = str => str.replace(/[(A-Z)]/g, x => ' ' + x.toUpperCase()).trim();

// long form:
function solution(str) {
    let out = '';
    for (let i = 0; i < str.length; i++) {
        if (i > 0 && isCap(str[i])) {
            out += ' ' + str[i];
        } else out += str[i];
    }
    return out;
}

const isCap = c => c === c.toUpperCase();