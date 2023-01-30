// 7 kyu esreveR
//
// Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)
//
// (the dedicated builtin(s) functionalities are deactivated)
//
// Answer:
reverse = function (arr1, arr2 = []) {
  if (arr1.length === 0) return arr2;
  arr2.push(...arr1.slice(-1));
  arr1 = arr1.slice(0, arr1.length - 1);
  return reverse(arr1, arr2);
};
