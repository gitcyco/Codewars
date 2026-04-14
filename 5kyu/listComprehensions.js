// 5 kyu List Comprehensions
//
// List comprehensions are a great feature provided by python. You can do things like this
//
// [[(x,y) for x in range(3)] for y in range(3)]
//
// The purpose of this is to parse basic list comprehensions for javascript.
// These list comprehensions are not going to be nearly as complicated as the ones for python can be.
// Below are some example list comprehensions like they would be javascript with their corresponding results.
//
// var a = [1,2,3,4,5];
// [x for x in a] // => [1,2,3,4,5]
// [x*x+2 for x in a] // => [3,6,11,18,27]
// [17 for x in a] // => [17,17,17,17,17]
//
// You must write a function listComprehension(str) that evaluates a given list comprehension in string form. Throw an error if the list comprehension is invalid.
//
// For example
//
// listComprehension("[3 for x in [3,1,2,3]]") // => [3,3,3,3]
//
// Note that the array part of the list comprehension does not have to be a simple array.
// It can be a function evaluated that returns an array.
//
// Answer:
function listComprehension(str) {
  let mapdo = str.match(/(?<=^\[).*(?= for)/)[0];
  let vardo = str.match(/(?<=for ).*(?= in)/)[0];
  let arr = str.match(/(?<=in ).*[\]\)](?=\])/)[0];
  const execdo = `${arr}.map((${vardo}) => ${mapdo})`;
  return eval(execdo);
}
