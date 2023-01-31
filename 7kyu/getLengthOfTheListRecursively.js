// 7 kyu Get length of the list recursively
//
// Write funcion lenR which returns the length of a given list. Try no to cheat and provide recursive solution.
//
// Answer:
function lenR(x) {
  if (!x || x.length === 0) return 0;
  x = [...x];
  return x.pop(), 1 + lenR(x);
}
