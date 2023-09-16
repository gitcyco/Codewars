// 6 kyu Triangle type
//
// In this kata, you should calculate the type of triangle with three given sides a, b and c (given in any order).
//
// If each angle is less than 90°, this triangle is acute and the function should return 1.
//
// If one angle is strictly 90°, this triangle is right and the function should return 2.
//
// If one angle is more than 90°, this triangle is obtuse and the function should return 3.
//
// If three sides cannot form a triangle, or one angle is 180° (which turns the triangle into a segment) - the function should return 0.
//
// Three input parameters are sides of given triangle. All input values are non-negative floating point or integer numbers (or both, depending on the language).
// Acute
//
// Right
//
// Obtuse
// Examples:
//
// (2, 4, 6) ---> return 0 (Not triangle)
// (8, 5, 7) ---> return 1 (Acute, angles are approx. 82°, 38° and 60°)
// (3, 4, 5) ---> return 2 (Right, angles are approx. 37°, 53° and exactly 90°)
// (7, 12, 8) ---> return 3 (Obtuse, angles are approx. 34°, 106° and 40°)
//
// Answer:
/* Should return ᐃ type:
  0 : if ᐃ cannot be made with given sides
  1 : acute ᐃ
  2 : right ᐃ
  3 : obtuse ᐃ
*/
export function triangleType(a: number, b: number, c: number): number {
  let A: number = a * a;
  let B: number = b * b;
  let C: number = c * c;
  if(a + b <= c || a + c <= b || b + c <= a) return 0;
  if(C === A + B || A === B + C || B === C + A) return 2;
  if(C > A + B || B > C + A || A > B + C) return 3;
  return 1;
}