// 7 kyu Strict Mode
//
// Write a function that returns whether it is running in strict mode.
//
// Answer:
const isInStrictMode = () =>
  (function () {
    return !this;
  })();
