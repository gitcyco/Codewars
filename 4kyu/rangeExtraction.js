// 4 kyu Range Extraction
//
// A format for expressing an ordered list of integers is to use a comma separated list of either
//
//     individual integers
//     or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'.
//     The range includes all integers in the interval including both endpoints.
//     It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
//
// Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.
//
// Example:
//
// solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"
//
// Answer:
function solution(list) {
  let ranges = [];
  let tmp = new Set();
  for (let i = 1; i < list.length; i++) {
    if (list[i] - 1 === list[i - 1]) {
      tmp.add(list[i - 1]);
      tmp.add(list[i]);
    } else {
      if (tmp.size > 2) ranges.push([...tmp]);
      tmp = new Set();
    }
  }
  if (tmp.size > 2) ranges.push([...tmp]);
  ranges = ranges.reverse();
  let cur = ranges.pop();
  let min = cur ? cur[0] : null;
  let max = cur ? cur[cur.length - 1] : null;
  let final = [];
  for (let i = 0; i < list.length; i++) {
    if (cur) {
      if (list[i] < min) final.push(list[i]);
      else {
        if (list[i] >= min && list[i] <= max) continue;
        else {
          final.push(`${min}-${max}`);
          cur = ranges.pop();
          min = cur ? cur[0] : null;
          max = cur ? cur[cur.length - 1] : null;
          if (list[i] < min) final.push(list[i]);
        }
      }
    } else final.push(list[i]);
  }
  if (cur) final.push(`${min}-${max}`);
  return final.join(",");
}
