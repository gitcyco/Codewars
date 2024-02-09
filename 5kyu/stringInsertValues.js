// 5 kyu String insert values
//
// Given a string and an object/array you need to return a formatted string.
// Replace all occurrences in the string where the name of a key in the object is surrounded by curly brackets.
//
// Inherited object properties should not be applied
//
// An example says more than a thousand words..
//
// Example using object
//
// var s = 'Hello {foo} - make me a {bar}';
// var o = {
//   foo : 'Jack',
//   bar : 'sandwich'
// };
//
// format(s, o); // "Hello Jack - make me a sandwich"
//
// Example using array
//
// var s = 'Hello {0} - make me a {1}';
// var a = ['Jack', 'sandwich'];
//
// format(s, a); // "Hello Jack - make me a sandwich"
//
// Answer:
const format = function (str, obj) {
  const reg = [];
  for (let [key, val] of Object.entries(obj)) {
    reg.push(`\\{${key}\\}`);
  }
  return str.replace(
    new RegExp(reg.join("|"), "g"),
    (result) => obj[result.replace(/[{}]/g, "")]
  );
};
