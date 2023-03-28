// 7 kyu Sums of consecutive integers
//
// The sum of x consecutive integers is y. What is the consecutive integer at position n?
// Given x, y, and n, solve for the integer. Assume the starting position is 0.
//
// For example, if the sum of 4 consecutive integers is 14, what is the consecutive integer at position 3?
//
// We find that the consecutive integers are [2, 3, 4, 5], so the integer at position 3 is 5.
//
// position(4, 14, 3) == 5
//
// Assume there will always be a sum of x consecutive integers that totals to y and n will never be indexed out of bounds.
//
// Answer:
/**
 * Given the number of consecutive integers and the total of the integers,
 * return the consecutive integer at the requested position.
 *
 * @param {int} x number of consecutive integers
 * @param {int} y sum of consecutive integers
 * @param {int} n position of requested integer
 * @return {int} consecutive integer at requested position
 */
const position = (x, y, n) => n + (y - (x * (x - 1)) / 2) / x;
