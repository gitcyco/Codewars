// 5 kyu Base64 Encoding
//
// Extend the String object (JS) or create a function (Python, C#) that converts the value of the String
// to and from Base64 using the ASCII (UTF-8 for C#) character set.
// Example (input -> output):
//
// 'this is a string!!' -> 'dGhpcyBpcyBhIHN0cmluZyEh'
//
// Answer:
String.prototype.toBase64 = function () {
  let key = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  let bits = [...this].reduce(
    (a, c) => (a += c.charCodeAt(0).toString(2).padStart(8, "0")),
    ""
  );
  let arr = bits.match(/.{1,24}/g);
  arr = arr.map((e) =>
    parseInt(e, 2)
      .toString(8)
      .match(/../g)
      .map((e) => parseInt(e, 8))
      .map((e) => key[e])
  );
  while (arr[arr.length - 1].length < 4) arr[arr.length - 1].push("=");
  return arr.map((e) => e.join("")).join("");
};
String.prototype.fromBase64 = function () {
  let key = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  const lookup = Object.entries(key.split("")).reduce(
    (a, e) => ((a[e[1]] = e[0].padStart(2, 0)), a),
    {}
  );
  let str = this.replace(/=/g, "A");
  let arr = str
    .match(/.{1,4}/g)
    .map((e) =>
      e.replace(/./g, (c) => (+lookup[c]).toString(8).padStart(2, "0"))
    );
  let bits = arr
    .map((e) => parseInt(e, 8).toString(2).padStart(24, "0"))
    .join("");
  const out = bits
    .match(/.{8}/g)
    .map((e) => String.fromCharCode(parseInt(e, 2)));
  return out.join("");
};
