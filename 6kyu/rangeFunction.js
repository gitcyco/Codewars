// 6 kyu Range function
//
// Create range generator function that will take up to 3 parameters - start value, step and stop value.
// This function should return an iterable object with numbers. For simplicity, assume all parameters to be positive numbers.
//
// Examples:
//
//     range(5) --> 1,2,3,4,5
//     range(3, 7) --> 3,4,5,6,7
//     range(2, 3, 15) --> 2,5,8,11,14
//
// Answer:
function* range(...args) {
  let start = (step = stop = 1);
  if (args.length === 1) {
    stop = args[0];
  } else if (args.length === 2) {
    start = args[0];
    stop = args[1];
  } else {
    start = args[0];
    step = args[1];
    stop = args[2];
  }
  for (let i = start; i <= stop; i += step) {
    yield i;
  }
}
