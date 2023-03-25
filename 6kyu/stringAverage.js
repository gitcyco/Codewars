// 6 kyu String average
//
// You are given a string of numbers between 0-9. Find the average of these numbers and return it
// as a floored whole number (ie: no decimal places) written out as a string. Eg:
//
// "zero nine five two" -> "four"
//
// If the string is empty or includes a number greater than 9, return "n/a"
//
// Answer:
function averageString(str) {
  let key = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  if (str)
    return key[
      Math.floor(
        str
          .split(" ")
          .map((e) => key.indexOf(e))
          .reduce((a, e) => a + e, 0) / str.split(" ").length
      )
    ];
  return "n/a";
}
