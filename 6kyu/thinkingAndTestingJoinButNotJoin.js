// 6 kyu Thinking & Testing : Join but not join
//
// No Story
//
// No Description
//
// Only by Thinking and Testing
//
// Look at result of testcase, guess the code!
//
// Answer:
Array.prototype.join = function (a) {
  let str = "";
  if (Array.isArray(a)) {
    a = getArrStr(a);
  }
  for (let i = 0; i < this.length; i++) {
    str += `${this[i]}`;
    if (i < this.length - 1) {
      str += `${a}`;
    }
  }
  return str;
};
Array.prototype.Join = function (a) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(this[i]);
    if (Array.isArray(a) && i < this.length - 1) {
      arr.push(...a);
    } else if (i < this.length - 1) {
      arr.push(a);
    }
  }
  return arr;
};

function getArrStr(arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}`;
    if (i < arr.length - 1) {
      str += ",";
    }
  }
  return str;
}
