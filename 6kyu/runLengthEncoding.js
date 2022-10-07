// 6 kyu Run-length encoding
//
//     Run-length encoding (RLE) is a very simple form of data compression in which runs of data
//     (that is, sequences in which the same data value occurs in many consecutive data elements) are stored as a single
//     data value and count, rather than as the original run. Wikipedia
//
//     Task
//
//     Your task is to write such a run-length encoding. For a given string, return a list (or array)
//     of pairs (or arrays) [ (i1, s1), (i2, s2), …, (in, sn) ], such that one can reconstruct the original
//     string by replicating the character sx ix times and concatening all those strings.
//     Your run-length encoding should be minimal, ie. for all i the values si and si+1 should differ.
//     Examples
//
//     As the article states, RLE is a very simple form of data compression. It's only suitable for runs of data, as one can see in the following example:
//
//     runLengthEncoding("hello world!")
//      //=>      [[1,'h'], [1,'e'], [2,'l'], [1,'o'], [1,' '], [1,'w'], [1,'o'], [1,'r'], [1,'l'], [1,'d'], [1,'!']]
//
//     It's very effective if the same data value occurs in many consecutive data elements:
//
//     runLengthEncoding("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb")
//      // => [[34,'a'], [3,'b']]
//
// Answer:
const runLengthEncoding = (str) => (str.match(/(.)\1*/gi) || []).map((e) => [e.length, e[0]]);

String.prototype.toBase64 = function () {
  console.log(this, g64(61));
  let arr = [];
  for (let i = 0; i < this.length; i += 3) {
    let s = this.slice(0 + i, 3 + i);
    console.log(s);
    arr.push(
      s
        .split("")
        .map((e) => e.charCodeAt(0).toString(2).padStart(8, 0))
        .join("")
    );
  }
  console.log(arr);
  arr = arr.map((e) => {
    let tmp = "";
    for (let i = 0; i < e.length; i += 6) {
      tmp += g64(parseInt(e.slice(0 + i, 6 + i), 2));
      //       tmp.push(e.slice(0+i, 6+i));
    }
    return tmp;
  });
  console.log(arr.join(""));
  return arr.join("");
};

String.prototype.fromBase64 = function () {
  console.log(this);
};

function g64(n) {
  // CAP letters 65-90 A-Z
  if (n >= 0 && n < 26) return String.fromCharCode(n + 65);
  // LOW letters 97-122 a-z
  if (n > 25 && n < 52) return String.fromCharCode(n - 26 + 97);
  // Numbers 0-9 48-57
  if (n > 51 && n < 62) return String.fromCharCode(n - 52 + 48);
  if (n === 62) return "+";
  if (n === 63) return "/";
  return "";
}
