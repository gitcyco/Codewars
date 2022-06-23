// 6 kyu Mexican Wave
//
// Task
// 
// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. 
// You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 
// 
// Rules
// 
//  1.  The input string will always be lower case but maybe empty.
// 
//  2.  If the character in the string is whitespace then pass over it as if it was an empty seat
// 
// Example
// 
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
// 
// Good luck and enjoy!
//
// Answer:
function wave(str) {
    const out = [];
    for (let i = 0; i < str.length; i++) {
        e = str;
        if (e[i] !== ' ') {
            e = e.slice(0, i) + e[i].toUpperCase() + e.slice(i + 1);
            out.push(e);
        }
    }
    return out;
}
