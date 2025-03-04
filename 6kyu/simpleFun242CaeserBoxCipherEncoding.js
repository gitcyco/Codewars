// 6 kyu Simple Fun #242: Caesar Box Cipher Encoding
//
// Caesar Box is a simple transposition cipher used in the Roman Empire.
// It is described as the following two-step process:
//
// The characters of the given message are broken into n lines of equal lengths and stacked up.
// The letters from the resulting rectangle are written from top to bottom column by column.
//
// Given a string message, count the number of different n such that the message, obtained by applying
// encoding two times, is the same as initial message.
//
// Input/Output
//
// [input] string message
//
// The initial message. It contains only lowercase english lettes.
//
// 4 ≤ message.length ≤ 25
//
// [output] an integer
//
// The number of above-described ns
//
// 1 < n < message.length
// Example
//
// For message = "abaaba", the output should be 2.
//
// It is possible to apply the encoding algorithm for n = 2 or n = 3.
//
// For n = 2:
//
// The first encoding: "abaaba" -> "aabbaa"
// aba   ==>    aab
// aba          baa
//
// The second encoding: "aabbaa" -> "abaaba".
// aab   ==>    aba
// baa          aba
//
// For n = 3:
//
// The first encoding: "abaaba" -> "aabbaa"
// ab   ==>  aa
// aa        bb
// ba        aa
//
// The second encoding: "aabbaa" -> "abaaba".
// aa   ==>  ab
// bb        aa
// aa        ba
//
// For message = "a_message", the output should be 1.
//
// It is possible to apply the encoding algorithm for n = 3.
//
// The first encoding: "a_message" -> "aea_sgmse"
// a_m   ==>    aea
// ess          _sg
// age          mse
//
// The second encoding: "aea_sgmse" -> "a_message".
// aea   ==>    a_m
// _sg          ess
// mse          age
//
// Answer:
function caesarBoxCipherEncoding(msg) {
  let count = 0;
  for (let i = 2; i < msg.length; i++) {
    if (msg.length % i === 0 && enc(enc(msg, i), i) === msg) count++;
  }
  return count;
}

function enc(msg, n) {
  let grid = msg.match(new RegExp(`.{${n}}`, "g"));
  let str = "";
  for (let x = 0; x < grid[0].length; x++) {
    for (let y = 0; y < grid.length; y++) {
      str += grid[y][x];
    }
  }
  return str;
}
