// 6 kyu Compute Unix path
//
// Your task is simple: combine input parts into a Unix style path.
//
// The parameters are represented by strings which may contain letters, dots, spaces, slashes and backslashes.
//
// Backslashes must be converted into slashes, spaces must be trimmed, empty parts must be removed and trailing slashes should be removed.
//
// An empty path should be transformed into a slash.
//
// A few example test cases have been added for a better understanding.
//
// Answer:
function combinePathsUri(...all) {
  all = all.filter((e) => e !== "").map((e) => "/" + e.replace(/[\s]/g, "").replace(/\\/g, "/"));
  let str = all.join("/").replace(/\/+/g, "/");
  if (str.slice(-1) === "/") str = str.slice(0, -1);
  return str.length ? str : "/";
}
