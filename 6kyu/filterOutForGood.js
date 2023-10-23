// 6 kyu Filter out for good!
//
// Array.prototype.remove = function(pred) {}
//
// that given an array, removes all the elements that satisfy the predicate from the original array and then return all the elements that just got removed.
// For example:
//
// var array = [1,2,3,4,5];
// // We wish to remove all the even elements from array and then return those removed elements
// var removed = array.remove(function(a) { return a%2===0;});
// // array === [1,3,5]  removed === [2,4]
//
// Answer:
Array.prototype.remove = function (pred) {
  let out = [];
  let index = 0;
  for (let i = 0; i < this.length; i++) {
    if (!pred(this[i])) {
      [this[i], this[index]] = [this[index], this[i]];
      index++;
    } else out.push(this[i]);
  }
  this.splice(index);
  return out;
};
