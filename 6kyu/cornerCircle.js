// 6 kyu Corner circle
//
// Corner circle
// 
// A circle with radius r is placed in a right angled corner, where r is an integer and ≥ 1.
// circles
// 
// What is the radius of the smaller circle, rounded to two decimal places?
//
// Answer:
const cornerCircle = r => +((Math.sqrt(2) - 1)/(Math.sqrt(2) + 1) * r).toFixed(2);