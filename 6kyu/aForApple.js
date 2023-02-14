// 6 kyu A for Apple
//
//     Input: Integer n
//     Output: String
//
// Example:
//
// a(4) prints as
//
//    A
//   A A
//  A A A
// A     A
//
// a(8) prints as
//
//        A
//       A A
//      A   A
//     A     A
//    A A A A A
//   A         A
//  A           A
// A             A
//
// a(12) prints as
//
//            A
//           A A
//          A   A
//         A     A
//        A       A
//       A         A
//      A A A A A A A
//     A             A
//    A               A
//   A                 A
//  A                   A
// A                     A
//
// Note:
//
//     Each line's length is 2n - 1
//     Each line should be concatenate by line break "\n"
//     If n is less than 4, it should return ""
//     If n is odd, a(n) = a(n - 1), eg a(5) == a(4); a(9) == a(8)
//
// Answer:
function a(n) {
  if (n < 4) return "";
  if (n % 2 !== 0) n = n - 1;
  let str = "";
  let len = 2 * n - 1;
  let midL = (midR = Math.ceil(len / 2));
  for (let i = 0; i < n; i++) {
    let arr = new Array(len).fill(" ");
    arr[midL - 1] = "A";
    arr[midR - 1] = "A";
    let tmp = arr.join("");
    if (i === n / 2) {
      let row = "A ".repeat((midR - midL + 2) / 2);
      tmp = tmp.slice(0, midL - 1) + row + tmp.slice(midR + 1);
    }
    if (i < n - 1) str += tmp + "\n";
    else str += tmp;
    midL--;
    midR++;
  }
  return str;
}
