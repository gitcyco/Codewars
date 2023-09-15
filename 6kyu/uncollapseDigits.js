// 6 kyu Uncollapse Digits
//
// You will be given a string of English digits "stuck" together, like this:
//
// "zeronineoneoneeighttwoseventhreesixfourtwofive"
//
// Your task is to split the string into separate digits:
//
// "zero nine one one eight two seven three six four two five"
// Examples
//
// "three"              -->  "three"
// "eightsix"           -->  "eight six"
// "fivefourseven"      -->  "five four seven"
// "ninethreesixthree"  -->  "nine three six three"
// "fivethreefivesixthreenineonesevenoneeight"  -->  "five three five six three nine one seven one eight"
//
// Answer:
function uncollapse(digits) {
  let keys = "zero one two three four five six seven eight nine".split(" ");
  for (let num of keys) {
    digits = digits.replaceAll(num, `${num} `);
  }
  return digits.trim();
}
