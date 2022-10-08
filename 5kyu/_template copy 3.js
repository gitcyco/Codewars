// DESCRIPTION
//
//
// Answer:
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
