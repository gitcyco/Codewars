// 6 kyu Array#reduce
//
// In this kata, you must define the Array.reduce method.
//
// I have disabled the pre-existing reduce methods.
//
// Here's how it works:
//
// [1,2,3].reduce( function(sum, next){return sum+next}, 0)
// // => 6
//
// ['a','b','a'].reduce( function(obj, elem){if(!obj[elem]) obj[elem] = 0; obj[elem] += 1; return obj}, {})
// // => {'a':2, 'b':1}
//
// Summary: The reduce method goes through each element of an array, applies the function to whatever the function
// returned last, and returns the last outcome. On the first iteration, it should pass the initial value
// to the function, as well as the first element of the array.
// If no initial value is passed, skip to the first element of the array.
//
// Ruby methods should expect a lambda.
//
// Answer:
Array.prototype.reduce = function (cb, init) {
  if (!Array.isArray(this)) return;
  let i = 0;
  if (!init) {
    init = this[0];
    i++;
  }
  let accum = init;
  for (; i < this.length; i++) {
    accum = cb(accum, this[i]);
  }
  return accum;
};
