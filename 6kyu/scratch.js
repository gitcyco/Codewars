// DESCRIPTION
//
//
// Answer:
function evenDigitSquares(a, b, c = [], inc) {
  console.log(a, b);
  if (a % 2 !== 0) a++;
  let i = a,
    s = "";
  while (i <= b) {
    if (i % 2 !== 0) {
      i++;
      continue;
    }
    s = i.toString();
    if (s.indexOf(1) !== -1) s = s.slice(0, s.indexOf(1)) + "2" + "0".repeat(s.length - s.indexOf(1) - 1);
    if (s.indexOf(3) !== -1) s = s.slice(0, s.indexOf(3)) + "4" + "0".repeat(s.length - s.indexOf(3) - 1);
    if (s.indexOf(5) !== -1) s = s.slice(0, s.indexOf(5)) + "6" + "0".repeat(s.length - s.indexOf(5) - 1);
    if (s.indexOf(7) !== -1) s = s.slice(0, s.indexOf(7)) + "8" + "0".repeat(s.length - s.indexOf(7) - 1);
    i = +s;
    if (isEvens(i) && i <= b && Math.sqrt(i) % 1 === 0) c.push(i);
    i += 2;
  }
  return c.sort((a, b) => a - b);

  for (let i = a; i <= b; i += 2) {
    if (i % 2 !== 0) continue;
    if (/[1]/g.test(i.toString())) continue;
    if (/[3]/g.test(i.toString())) continue;
    if (!isEvens(i)) continue;
    if (Math.sqrt(i) % 1 === 0) c.push(i);
  }
  return c;
}

// const isEvens = n => !(n.toString().split('').some(e=>e%2!==0));
const isEvens = (n) => !/9/g.test(n.toString());

// const isEvens = n => !(n.toString().split('').some(e=>e%2!==0));
const isEvens = (n) => !/[13579]/g.test(n.toString());

console.log(evenDigitSquares(4551629, 33979808));
// 4551629 33979808

0b1000011;
0b1100001;
0b1110100;
