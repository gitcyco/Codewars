// 5 kyu Pipelining and composing functions
//
// Let's see 2 ways of applying successive functions to an object:
//
// The purpose of this kata is to think of this kind of code
//
// var result = fn4(fn3(fn2(fn1(obj))));
//
// in terms of pipelining or composition of functions.
//
//     Pipelining
//
//     var result = pipeline(obj
//                           , fn1
//                           , fn2
//                           , fn3
//                           , fn4);
//
// for instance:
//
// pipeline([1,2,3,4,5,6] // seed
//     , rest // first function to apply
//     , rest // second function to apply
//     , rest // ..
//     , rest
//     , first);
// => 5
//
//     Composition: it should return a function that is the composition of a list of functions, where each function consumes the return value of the function that follows.
//
//     var compositionFn = compose(fn4, fn3, fn2, fn1);
//     var result = compositionFn(obj);
//
//     for instance
//
//     var greet    = function(name){ return "hi: " + name; };
//     var exclaim  = function(statement){ return statement.toUpperCase() + "!"; };
//     var welcome = compose(greet, exclaim);
//     welcome('moe');
//     => 'hi: MOE!'
//
// Answer:
const pipeline = (seed, ...args) => args.reduce((a, e) => e(a), seed);
const compose =
  (...args) =>
  (n) =>
    args.reverse().reduce((a, e) => e(a), n);
