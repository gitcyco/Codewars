// 6 kyu Even Binary Sorting
//
// Given a string of binary numbers of length 3 sort the numbers in ascending order but only order the even numbers and leave all odd numbers in their place.
// 
// Example:
// 
// evenBinary("101 111 100 001 010") // returns "101 111 010 001 100"
// 
// Note: make sure all the binary numbers have a length of 3
//
// Answer:
function evenBinary(n) {
    let evens = [];
    let intArr = n.split(' ').map(e=>parseInt(e,2)).map(e=> e%2 ? e : (evens.push(e), '_'));
    evens.sort((a,b) => a > b);
    return intArr.map(e => e=='_' ? e=evens.shift() : e).map(e=> e = e.toString(2).padStart(3,0)).join(' ');
}