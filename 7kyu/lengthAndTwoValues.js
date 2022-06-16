// 7 kyu Length and two values.
// 
// Given an integer n and two other values, build an array of size n filled with these two values alternating.
// Examples
// 
// 5, true, false     -->  [true, false, true, false, true]
// 10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
// 0, "one", "two"    -->  []
// 
// Good luck!
//
// Answer:
function alternate(n, f, s){
    let out = [];
    for(let i = 0; i < n; i++) {
      i%2 ? out.push(s) : out.push(f);
    }
    return out;
}