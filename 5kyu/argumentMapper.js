// 5 kyu Argument Mapper
//
// As part of a broader functionality you need to develop an argument mapper.
//
// The function receives a function object as first parameter and an unknown number of arguments [zero to many].
// You have to return an associative array that maps the name of an argument and its related value.
//
// The usage is:
//
// function func1(arg1, arg2) { ... }
//
// var map = createArgumentMap(func1,'valueOfArg1', 'valueOfArg2');
// console.log(map['arg1']);  // writes 'valueOfArg1'
// console.log(map['arg2']);  // writes 'valueOfArg2'
//
// The passed values are in the same order as they appear in the function object.
//
// Invalid inputs, e.g. non-function objects, or wrong number of arguments, are not considered.
//
// Answer:
function createArgumentMap(func, ...rest) {
  const args = func
    .toString()
    .match(/(?<=\()(.*)(?=\))/)[0]
    .split(",")
    .filter(Boolean);
  const obj = [];
  for (let i = 0; i < args.length; i++) {
    obj[args[i]] = rest[i];
  }
  return obj;
}
