// 6 kyu Build Tower
//
// Build Tower
// 
// Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.
// 
// For example, a tower with 3 floors looks like this:
// 
// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// 
// And a tower with 6 floors looks like this:
// 
// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]
//
// Answer:
function towerBuilder(n, arr = []) {
    let max = n + n - 1;
    for (let i = 0; i < max; i += 2) arr.push(' '.repeat((max - i) / 2) + "*".repeat(i + 1) + ' '.repeat((max - i) / 2));
    return arr;
}