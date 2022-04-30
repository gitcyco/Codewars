// 7 kyu Divide and Conquer
//
// Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.
//
// Return as a number.
//
// Answer:
function divCon(x) {
  return (
    x.reduce((a, e) => (a += typeof e === "number" ? e : 0), 0) -
    x.reduce((a, e) => (a += typeof e === "string" ? +e : 0), 0)
  );
}
