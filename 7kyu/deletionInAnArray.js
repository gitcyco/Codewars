// 7 kyu Deletion in an array
//
// The deleteValues function takes an array and removes elements that answer true to the pred function.
// 
// For some reason, some of the elements of the array for which the predicate holds are not deleted...
// 
// Can you fix the code?
// 
// Answer:
function deleteValues(array, pred) {
    for(let i = 0; i < array.length; i++) {
      if ( pred(array[i]) ) {
        array.splice(i--, 1);
      }
    }
    return array;
}