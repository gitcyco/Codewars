// 4 kyu Nesting Structure Comparison
//
// Complete the function/method (depending on the language) to return true/True when its argument is an array
// that has the same nesting structures and same corresponding length of nested arrays as the first array.
//
// For example:
//
//  // should return true
// [ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] );
// [ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] );
//
//  // should return false
// [ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] );
// [ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] );
//
// // should return true
// [ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ] );
//
// // should return false
// [ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] );
//
// For your convenience, there is already a function 'isArray(o)' declared and defined that returns true if its argument is an array, false otherwise.
//
// Answer:
Array.prototype.sameStructureAs = function (other) {
  if (this.length !== other.length) return false;
  for (let i = 0; i < this.length; i++) {
    if (isArray(this[i])) {
      return !isArray(other[i]) ? false : this[i].sameStructureAs(other[i]);
    }
  }
  return true;
};

// since we dont have their internal defined isArray function, define it here for future reference:
const isArray = (arr) => Array.isArray(arr);
