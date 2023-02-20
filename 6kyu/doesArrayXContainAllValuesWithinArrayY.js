// 6 kyu Does array x contain all values within array y?
//
// We want to extend the array class so that it provides a contains_all? method.
// This method will always assume that an array is passed in and will return true if all values in the passed in array are present within the current array.
//
// For example:
//
// const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// items.containsAll([1, 2, 3]);  =>  true
// items.containsAll([1, 5, 13]);  =>  false // because 13 is not in the items array
//
// Answer:
Object.defineProperty(Array.prototype, "containsAll", {
  value: function containsAll(a) {
    if (!a) return false;
    let obj = this.reduce((ac, e) => (e in ac ? null : (ac[e] = true), ac), {});
    for (let i = 0; i < a.length; i++) {
      if (!obj[a[i]]) return false;
    }
    return true;
  },
});
