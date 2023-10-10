// 6 kyu Custom concat() Array Method
//
// Create a customConcat() method with the same functionality as Array.prototype.concat().
//
// SYNTAX
//
// var new_array = old_array.concat([value1[, value2[, ...[, valueN]]]])
//
// Parameter valueN: Arrays and/or values to concatenate into a new array.
// If valueN is undefined, concat returns a shallow copy of the existing array on which it is called.
// See the description below for more details.
//
// DESCRIPTION
//
// The concat method creates a new array consisting of the elements in the object on which it is called, followed
// in order by, for each argument, the elements of that argument (if the argument is an array) or the argument
// itself (if the argument is not an array). It does not recurse into nested array arguments.
//
//     The concat method does not alter this or any of the arrays provided as arguments but instead returns
//     a shallow copy that contains copies of the same elements combined from the original arrays.
//     Elements of the original arrays are copied into the new array as follows:
//
//     Object references (and not the actual object): concat copies object references into the new array.
//     Both the original and new array refer to the same object.
//     That is, if a referenced object is modified, the changes are visible to both the new and original arrays.
//     This includes elements of array arguments that are also arrays.
//
//     Data types such as strings, numbers and booleans (not String, Number, and Boolean objects): concat copies the values of strings and numbers into the new array.
//
// Answer:
Array.prototype.customConcat = function (...elements) {
  const out = [...this];
  for (let item of elements) {
    if (Array.isArray(item)) {
      for (let e of item) out.push(e);
    } else out.push(item);
  }
  return out;
};
