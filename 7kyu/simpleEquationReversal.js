// 7 kyu Simple equation reversal
//
// Given a mathematical equation that has *,+,-,/, reverse it as follows:
//
// solve("100*b/y") = "y/b*100"
// solve("a+b-c/d*30") = "30*d/c-b+a"
//
// More examples in test cases.
//
// Answer:
const solve = (eq) =>
  eq
    .replace(/[\d]+/g, (e) => e.split("").reverse().join(""))
    .split("")
    .reverse()
    .join("");
