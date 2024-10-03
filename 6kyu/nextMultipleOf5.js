// 6 kyu Next multiple of 5
//
// Write a function that receives a non-negative integer n ( n >= 0 ) and returns
// the next higher multiple of five of that number, obtained by concatenating
// the shortest possible binary string to the end of this number's binary representation.
// Examples
//
// 1.  nextMultipleOfFive(8)
//
// Steps:
//
//     8 to binary == '1000'
//     concatenate shortest possible string '11' to obtain '1000' + '11' == '100011'
//     '100011' to decimal == 35 => the answer
//
// ('001' would do the job too, but '11' is the shortest string here)
//
// 2.  nextMultipleOfFive(5)
//
// Steps:
//
//     5 to binary =='101'
//     concatenate shortest possible string '0' to obtain '101' + '0' == '1010'
//     '1010' to decimal == 10
//
// (5 is already a multiple of 5, obviously, but we're looking for the next multiple of 5)
// Note
//
//     Numbers up to 1e10 will be tested, so you need to come up with something smart.
//
// Answer:
const nextMultipleOfFive = (n) => {
  let zeros = 0;
  const vals = ["0", "1", "01", "10", "11", "101"];
  while (true) {
    for (let val of vals) {
      let test = parseInt(n.toString(2) + "0".repeat(zeros) + val, 2);
      if (test % 5 === 0 && test > 0) return test;
    }
    zeros++;
  }
};
