// 7 kyu Strict Mode
//
// Write a function that returns whether it is running in strict mode.
//
// Answer:
//
// ugly
const isInStrictMode = () =>
  (function () {
    return !this;
  })();

// or super short:
const isInStrictMode_s = () => !this;
