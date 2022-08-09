// 6 kyu Once
//
// You'll implement once, a function that takes another function as an argument, and returns a new version of that function that can only be called once.
//
// Subsequent calls to the resulting function should have no effect (and should return undefined).
//
// For example:
//
// logOnce = once(console.log)
// logOnce("foo") // -> "foo"
// logOnce("bar") // -> no effect
//
// Answer:
function once(fn) {
  let once = 0;
  return (...args) => (!once++ ? fn(...args) : undefined);
}
