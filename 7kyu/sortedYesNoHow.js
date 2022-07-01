// 7 kyu Sorted? yes? no? how?
//
// Complete the method which accepts an array of integers, and returns one of the following:
// 
//     "yes, ascending" - if the numbers in the array are sorted in an ascending order
//     "yes, descending" - if the numbers in the array are sorted in a descending order
//     "no" - otherwise
// 
// You can assume the array will always be valid, and there will always be one correct answer.
//
// Answer:
function isSortedAndHow(arr) {
    const str = arr.join('');
    if (arr.sort((a, b) => a - b).join('') == str) return 'yes, ascending';
    if (arr.sort((a, b) => b - a).join('') == str) return 'yes, descending';
    return 'no';
}