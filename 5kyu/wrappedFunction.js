// 5 kyu Wrapped Function
//
// Create a function method that allow you to wrap an existing function.
// The method signature would look something like this:
//
// Usage Example:
//
// function speak(name){
//    return "Hello " + name;
// }
//
// speak = speak.wrap(function(original, yourName, myName){
//    greeting = original(yourName);
//    return greeting + ", my name is " + myName;
// })
//
// var greeting = speak("Mary", "Kate");
//
// Answer:
Function.prototype.wrap = function (f) {
  return (...args) => f(this, ...args);
};
