// 6 kyu Sparse array split function
//
// Sparse arrays in JavaScript are useful for many things. Among others they can be used for splitting an array into subarrays.
// Your task here is to create an array method for splitting a sparse array to subarrays, each of which must not be a sparse array.
//
// It will act a bit similarly to the .split() method in strings.
// The new array method will return an array of subarrays, if the original array is a sparse array.
// Otherwise it will return the original array.
//
// For example: [1,2,,3,4].split() will return [[1,2],[3,4]], and [,,,,].split() will return [].
// Please note that nested sparse arrays should remain sparse: [,,[,,],[,,],,].split() should return [[[,,],[,,]]].
//
// Answer:
Array.prototype.split = function () {
  if (Object.keys(this).length == this.length) return this;
  let newArr = [];
  let out = [];
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      newArr.push(this[i]);
    } else {
      newArr.length && out.push(newArr);
      newArr = [];
    }
  }
  if (newArr.length > 0) out.push(newArr);
  return out;
};
