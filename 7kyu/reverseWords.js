// 7 kyu Reverse words
//
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
// Examples
// 
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"
//
// Answer:
function reverseWords(str) {
    let tmp = [];
    let out = [];
    let arr = str.split('');
    for (let i = 0; i < arr.length; i++) {
      if(arr[i] === ' ') {
        if(tmp.length > 0) out.push(...tmp);
        out.push(arr[i]);
        tmp = [];
      }
      if(arr[i] !== ' ') tmp.unshift(arr[i]);
    }
    out.push(...tmp);
    return out.join('');
}