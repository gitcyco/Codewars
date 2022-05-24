// 6 kyu Smallest Permutation
//
// Given a number, find the permutation with the smallest absolute value (no leading zeros).
// 
// -20 => -20
// -32 => -23
// 0 => 0
// 10 => 10
// 29394 => 23499
// 
// The input will always be an integer.
//
// Answer:
function minPermutation(n) {
    let arr = n.toString().split('').sort();
    let negative = arr[0] === '-' ? arr.shift() : false;
    if(arr[0] == '0') {
      for(let i = 1; i < arr.length; i++) {
        if (+arr[i] > 0) {
          [arr[0], arr[i]] = [arr[i], arr[0]];
          break;
        } 
      }
    }
    return negative ? 0 - parseInt(arr.join('')) : parseInt(arr.join(''));
}