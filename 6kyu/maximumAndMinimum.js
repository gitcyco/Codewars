// 6 kyu Maximum and minimum
//
// Instructions
// Output
//
// Write two functions max and min which returns the maximum and minimum value of the argument passed into them respectively.
// Example
//
//     max(1,2,3,4) //returns 4
//     max(1,2,3,['4']) //returns 4; note it returned 4 not '4'
//     max(1,2,[3,4]) //returns 4
//     max(1,2,[3,[4]]) //returns 4
//     max(1,2,[3,['4r']]) //returns NaN
//     max([[],[-4]]) // returns -4
//     max() or max([]) //returns 0
//
// And so goes for min
// Further Instructions
//
//     functions will take any number of arguments
//     Arrays of numbers can be to any depth
//     You can't use Math.max, Math.min, and require
//     If one of the arguments can not be evaluated to a number, return NaN
//
// Answer:
function max(...v) {
  if (v.length === 0) return 0;
  let mx = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < v.length; i++) {
    if (Array.isArray(v[i])) {
      let tmp = max(...v[i]);
      if (isNaN(tmp)) return NaN;
      mx = +tmp > +mx ? +tmp : +mx;
    } else {
      if (isNaN(v[i])) return NaN;
      else mx = +v[i] > +mx ? +v[i] : +mx;
    }
  }
  return mx;
}

function min(...v) {
  if (v.length === 0) return 0;
  let mn = Number.POSITIVE_INFINITY;
  for (let i = 0; i < v.length; i++) {
    if (Array.isArray(v[i])) {
      let tmp = min(...v[i]);
      if (isNaN(tmp)) return NaN;
      mn = +tmp < +mn ? +tmp : +mn;
    } else {
      if (isNaN(v[i])) return NaN;
      else mn = +v[i] < +mn ? +v[i] : +mn;
    }
  }
  return mn;
}
