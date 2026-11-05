// 6 kyu Shortest code: Father and Son
//
// This is the code golf version of coding 3min series. If you are stuck, please complete the simple version
// Code limit:
//
// At most 120 characters (counted as in a JavaScript string, i.e. in terms of UTF-16 code-units).
// Task:
//
// Every uppercase letter is a father, the corresponding lowercase letters are its sons.
//
// Given a string:
//
//     if father and son both exist, keep them both
//     if one exists but not the other, delete them
//     one father can have multiple sons. keep it if it has at least one.
//     one son can have multiple fathers. keep it if it has at least one.
//     return the filtered string.
//
// Examples (input --> output)
//
// "Aab" --> "Aa"
// "AabBc" -->  "AabB"
// "AaaaAaab" --> "AaaaAaa"
// "aAAAaAAb" --> "aAAAaAA"
//
// Answer:
const sc = (s) =>
  s.replace(/./gi, (e) =>
    !(s.includes(e.toUpperCase()) && s.includes(e.toLowerCase())) ? "" : e,
  );
