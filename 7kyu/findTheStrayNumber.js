// 7 kyu Find the stray number
//
// You are given an odd-length array of integers, in which all of them are the same, except for one single number.
// 
// Complete the method which accepts such an array, and returns that single different number.
// 
// The input array will always be valid! (odd-length >= 3)
// Examples
// 
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3
//
// Answer:
function stray(numbers) {
    let out = numbers.reduce((a,e) => (a[e] ? a[e]++ : a[e] = 1, a), {});
    for(let key in out) if(out[key] === 1) return +key;
    return 0;
}