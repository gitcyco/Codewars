// 6 kyu Multiply list by integer (with restrictions)
//
// Task:
//
// Given a list of integers l, return the list with each value multiplied by integer n.
// Restrictions:
//
// The code must not:
//
//     contain *.
//     use eval() or exec()
//     contain for
//     modify l
//
// Happy coding :)
//
// Answer:
function multiply(n, l) {
  return l.map((e) => {
    let o = 0;
    let c = Math.abs(n);
    while (c-- > 0) {
      o += e;
    }
    if (n < 0) o = -o;
    return o;
  });
}
