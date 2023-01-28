// 7 kyu The Sum and The Rest of Certain Pairs of Numbers have to be Perfect Squares
//
// The pair of integer numbers (m, n), such that 10 > m > n > 0, (below 10), that its sum, (m + n), and rest, (m - n), are perfect squares, is (5, 4).
//
// Let's see what we have explained with numbers.
//
// 5 + 4 = 9 = 3²
// 5 - 4 = 1 = 1²
// (10 > 5 > 4 > 0)
//
// The pair of numbers (m, n), closest to and below 50, having the property described above is (45, 36).
//
// 45 + 36 = 81 = 9²
// 45 - 36 = 9 = 3²
// (50 > 45 > 36 > 0)
//
// With the function closest_pair_tonum(), that receives a number upper_limit, as an upper limit, we should
// be able to obtain the closest pair to upper_limit, that fulfills the property described above.
//
// The function should return the largest pair of numbers (m, n), satisfying upper_limit > m > n > 0.
// Note that we say pair A (a0, a1) is larger than pair B (b0, b1) when a0 > b0 or a0 == b0 and a1 > b1.
//
// Let's see some cases:
//
// closestPairTonum(10) == [5, 4] // (m = 5, n = 4)
//
// closestPairTonum(30) == [29, 20]
//
// closestPairTonum(50) == [45, 36]
//
// Answer:
//
// Naive, brute force method, O(n*n)
function closestPairTonum(n) {
  for (let i = n - 1; n > 0; i--) {
    for (let j = n - 1; j > 0; j--) {
      if (checkSqr(i + j) && checkSqr(i - j)) return [i, j];
    }
  }
}
const checkSqr = (n) => parseInt(Math.sqrt(n)) === Math.sqrt(n) && n > 0;
