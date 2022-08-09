// 6 kyu Stringing me along
//
// Implement a function that receives a string, and lets you extend it with repeated calls.
// When no argument is passed you should return a string consisting of space-separated words you've received earlier.
//
// Note: there will always be at least 1 string; all inputs will be non-empty.
//
// For example:
//
// createMessage("Hello")("World!")("how")("are")("you?")() === "Hello World! how are you?"
//
// Answer:
//
// This seems really ugly, I don't think this is the best way to do this, refactor at some point.
function createMessage(str) {
  let arr = [str];
  function comp(s) {
    arr.push(s);
    return (a) => {
      if (a) return comp(a);
      else return arr.join(" ");
    };
  }
  return (s) => {
    if (s) return comp(s);
    else return arr.join(" ");
  };
}
