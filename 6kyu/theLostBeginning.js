// 6 kyu The lost beginning
//
// Given a sequence of one or more consecutive natural numbers concatenated
// into a string, return the smallest possible first number in the sequence.
// Numbers will never be truncated.
// Examples
//
// "123" -> [1, 2, 3] -> 1
// "91011" -> [9, 10, 11] -> 9
// "17181920" -> [17, 18, 19, 20] -> 17
// "9899100" -> [98, 99, 100] -> 98
// "121122123" -> [121, 122, 123] -> 121
// "1235" -> [1235] -> 1235
// "101" -> [101] -> 101
//
// Size limits
//
// 0 < length string < 140
// 0 < smallest number < 1 000 000 000
//
// Answer:
function beginning(xs, firstLen = 1) {
  let first = parseInt(xs.slice(0, firstLen));
  let nextNum = first + 1;
  let nextLen = nextNum.toString().length;
  let idx = firstLen;
  while (idx < xs.length) {
    let nextStr = xs.slice(idx, idx + nextLen);
    if (+nextStr === nextNum) {
      nextNum = +nextStr + 1;
      let newLen = nextNum.toString().length;
      if (newLen > nextLen) idx += newLen - 1;
      else idx += newLen;
      nextLen = newLen;
    } else {
      return beginning(xs, firstLen + 1);
    }
  }
  return parseInt(xs.slice(0, firstLen));
}
