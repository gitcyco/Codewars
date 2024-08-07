// 6 kyu range `literals`
//
// Your function should do this:
//
// // make an array from 0 to 5
// range`5` // => [0, 1, 2, 3, 4, 5]
//
// // make an array from 10 to 15
// range`10:15` // => [10, 11, 12, 13, 14, 15]
//
// // can be filterred
// range`1:50${x => x%10 === 0}` // => [10, 20, 30, 40, 50]
//
// and must return [] if it's not valid like these examples:
//
// range`1:` // => [] no end
// range`:5` // => [] no start
// range`1:5${true}` // => [] must be a function
// range`1 : 10${x => x%2===0}` // => [] contains spaces
// range`1:10${()=> true}${()=> true}` // => [] multiple functions
//
// Note:
//
// For range`n:m`, it'll always be 0 <= n < m
//
// Answer:
function range(str, func, blowup) {
  let range = str[0].split(":");
  if (blowup || range.length > 2) return [];
  if (func && typeof func !== "function") return [];
  if (!range.every((e) => /^\d+$/.test(e) && +e >= 0)) return [];
  range = range.map(Number);
  if (range[0] >= range[1]) return [];
  const arr = [];
  let start = 0;
  let end = range[0];
  if (range.length > 1) {
    start = range[0];
    end = range[1];
  }
  for (let i = start; i <= end; i++) {
    if (func && !func(i)) continue;
    arr.push(i);
  }
  return arr;
}
