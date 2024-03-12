// 6 kyu Roman Numerals
//
// Range from 0 to Roman Numerals
//
// console.log(0..X) //[0,1,2,3,4,5,6,7,8,9]
//
// console.log(0..IV) //[0,1,2,3]
//
// console.log(0..III) //[0,1,2]
//
// console.log(0..XIX) //[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
//
// Answer:
Object.setPrototypeOf(
  Number.prototype,
  new Proxy(Number.prototype, {
    get(t, p, num) {
      if (/^[IVXLCDM]*$/g.test(p)) {
        let out = [];
        let end = romanToInt(p);
        for (let i = num; i < end; i++) {
          out.push(+i);
        }
        return out;
      }
    },
  })
);

function romanToInt(s) {
  const valMap = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let sum = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    let char = s[i];
    if ((char === "V" || char === "X") && s[i - 1] === "I") {
      sum += valMap[char] - 1;
      i--;
    } else if ((char === "L" || char === "C") && s[i - 1] === "X") {
      sum += valMap[char] - 10;
      i--;
    } else if ((char === "D" || char === "M") && s[i - 1] === "C") {
      sum += valMap[char] - 100;
      i--;
    } else {
      sum += valMap[char];
    }
  }
  return sum;
}
