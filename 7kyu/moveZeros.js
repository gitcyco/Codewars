// 7 kyu Move Zeros
//
// Implement a function move_zeros which takes two arguments first an array of numbers arrNum and second a Boolean 
// value isRight (default is true) and returns the array with all zero to right if isRight is true else to left if isRight is false.
// 
// Example:
// 
// arrNum = [12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0];
// move_zeros(arrNum, true) //=> returns [12, 10, 8, 12, 7, 6, 4, 10, 12, 0, 0, 0, 0]
// 
// arrNum = [12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0];
// move_zeros(arrNum, false) //=> returns [0, 0, 0, 0, 12, 10, 8, 12, 7, 6, 4, 10, 12]
// 
// arrNum = [12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0];
// move_zeros(arrNum) //=> returns [12, 10, 8, 12, 7, 6, 4, 10, 12, 0, 0, 0, 0]
// 
// Tips: Order of other numbers should not change.
//
// Answer:
function move_zeros(a, isRight=true){
    let newArr = a.filter(e=>e!==0);
    return isRight ? newArr.concat(Array(a.length - newArr.length).fill(0))
                   : Array(a.length - newArr.length).fill(0).concat(newArr);
}