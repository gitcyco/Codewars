// 6 kyu Round by 0.5 steps
//
// Round any given number to the closest 0.5 step
//
// I.E.
//
// solution(4.2) = 4
// solution(4.3) = 4.5
// solution(4.6) = 4.5
// solution(4.8) = 5
//
// Round up if number is as close to previous and next 0.5 steps.
//
// solution(4.75) == 5
//
// Answer:
function solution(n) {
  let [left, right] = [Math.floor(n), n % Math.floor(n)];
  if (right < 0.25) right = 0;
  else if (right >= 0.75) right = 1;
  else right = 0.5;
  return left + right;
}
