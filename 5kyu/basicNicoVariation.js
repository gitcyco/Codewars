// 5 kyu Basic Nico variation
//
// Task
//
// Write a function nico/nico() that accepts two parameters:
//
//     key/$key - string consists of unique letters and digits
//     message/$message - string to encode
//
// and encodes the message using the key.
//
// First create a numeric key basing on a provided key by assigning each letter position in which it is located after setting the letters from key in an alphabetical order.
//
// For example, for the key crazy we will get 23154 because of acryz (sorted letters from the key).
// Let's encode secretinformation using our crazy key.
//
// 2 3 1 5 4
// ---------
// s e c r e
// t i n f o
// r m a t i
// o n
//
// After using the key:
//
// 1 2 3 4 5
// ---------
// c s e e r
// n t i o f
// a r m i t
//   o n
//
// Examples
//
// nico("crazy", "secretinformation") => "cseerntiofarmit on  "
// nico("abc", "abcd") => "abcd  "
// nico("ba", "1234567890") => "2143658709"
// nico("key", "key") => "eky"
//
// Check the test cases for more samples.
//
// Answer:
function nico(key, msg) {
  const sKey = key.split("").sort();
  const nKey = key.split("").map((e) => sKey.indexOf(e));
  const row = nKey.length;
  const arr = [];
  for (let i = 0; i < msg.length; i += row) {
    arr.push(
      msg
        .slice(i, row + i)
        .padEnd(row, " ")
        .split("")
    );
  }
  return arr.reduce((a, e) => {
    for (let i = 0; i < e.length; i++) {
      a += e[nKey.indexOf(i)];
    }
    return a;
  }, "");
}
