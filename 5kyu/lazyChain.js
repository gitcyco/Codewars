// 5 kyu Lazy Chain
//
// Method chaining is a useful technique in JavaScript, allowing better composability and readability of functions.
//
// One problem with standard JavaScript chaining is that chained methods are immediately executed upon creation.
//
//   let a = [ 1, 2, 3].map(x => x * 2).reverse();
//   // a = [ 6, 4, 2]
//
// The problem with this is that it opens values up to possible mutation before being called.
//
//   a.join("");
//   // a = "642"
//
//   function doSomething(array) {
//     // Does something to an array
//   }
//
//   doSomething(a); // TypeError - a is not an array
//
// To combat this we can create a function lazyChain that accepts an argument and allows
// chaining, but delays execution to when the value method is called.
//
//   let a = lazyChain([1,2,3])
//                             .invoke('map', x => x * 2)
//                             .invoke('reverse');
//
//   console.log(a.value());
//   // [ 6, 4, 2]
//
//   a.join("");
//   // TypeError
//
//   doSomething(a.value());
//   // valid function call
//
// Your task is to create the function lazyChain which accepts any value, and allows method
// chaining through the use of invoke, and execution with the value method.
//
// Keep in mind that invoke is general enough to accept any prototype methods from the standard language.
//
// Answer:
function lazyChain(arg) {
  const invocations = [];
  function invoke(...args) {
    invocations.push(args);
    return {
      value: function (...args) {
        let output = arg;
        for (let inv of invocations) {
          if (inv[0]) {
            output = output[inv[0]](...inv.slice(1));
          }
        }
        return output;
      },
      invoke: function (...args) {
        return invoke(...args);
      },
    };
  }
  return invoke(null);
}
