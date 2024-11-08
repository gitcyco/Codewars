// 6 kyu Pops and shifts
//
// Sparse arrays in Javascript can be very useful, but just as often they can be be very annoying.
// One of the reasons is that sometimes basic array methods are not well suited for sparse arrays.
// For example, pop() method will try to return the last array element regardless of whether it exists or not.
// If it doesn't exist, the result is undefined.
// It's great if that's what you want, but what if you want to return the next existing element in a sparse array?
//
// Your task here is to create a new pops() array method, which would pop the last existing element
// in the array and remove this element and any nonexisting ones after it. For example:
//
// array = [1,2,3,,,,]
// array.pops() // = 3
// array // = [1,2]
//
// While you're at it, you could also create a new shifts() array method, which would do the same this
// from the other end of an array and mimic the basic shift() array method. For example:
//
// array = [,,,1,2,3]
// array.shifts() // = 1
// array // = [2,3]
//
// Answer:
Array.prototype.pops = function () {
  for (let i = this.length - 1; i >= 0; i--) {
    if (i in this) {
      let end = this[i];
      this.splice(i);
      return end;
    }
  }
  this.splice(0);
  return undefined;
};

Array.prototype.shifts = function () {
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      let start = this[i];
      this.splice(0, i + 1);
      return start;
    }
  }
  this.splice(0);
  return undefined;
};
