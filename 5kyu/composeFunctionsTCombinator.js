// 5 kyu Compose functions (T Combinator)
//
// Let's make a function called compose that accepts a value as a parameter, as well as any number of functions as additional parameters.
// 
// The function will return the value that results from the first parameter being used as a parameter for all of the accepted function parameters in turn.
// 
// compose(n, f1, f2, f3..., fn) // === fn(...(f3(f2(f1(n)))))
// 
// So:
// 
// var doubleTheValue = function(val) { return val * 2; }
// var addOneToTheValue = function(val) { return val + 1; }
// 
// compose(5, doubleTheValue) // should === 10
// compose(5, doubleTheValue, addOneToTheValue) // should === 11
// 
// If only a single parameter is passed in, return that parameter.
// 
// compose(n) = n
//
// Answer:
const compose = function(...rest) {
    if(rest.length < 2) return rest[0];
    let value = rest[0];
    let result = rest[1](value);
    for(let i = 2; i < rest.length; i++) {
        //console.log(result);
        result = rest[i](result);
      }
    return result;
}