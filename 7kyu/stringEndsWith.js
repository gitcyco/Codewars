// 7 kyu String ends with?
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
//
// Examples:
//
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false
//
// Answer:
//
const solution = (str, e) => (!e ? true : str.slice(-e.length) === e);

// Dead simple, but cheating ;-)
const solution2 = (str, e) => str.endsWith(e);
