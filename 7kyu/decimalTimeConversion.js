// 7 kyu Decimal Time Conversion
//
// Write two functions, one that converts standard time to decimal time and one that converts decimal time to standard time.
//
//     toIndustrial(time) should accept either the time in minutes as an integer or a string of the format "h:mm".
//     Minutes will always consist of two digits in the tests (e.g., "0:05"); hours can have more. Return a double that
//     represents decimal hours (e.g. 1.75 for 1h 45m). Round to a precision of two decimal digits - do not simply truncate!
//     toNormal(time) should accept a double representing decimal time in hours. Return a string that represents standard time in the format "h:mm".
//     One hour has 100 minutes (or 10,000 seconds) in decimal time, yet its duration is the same as in standard time.
//     Thus a decimal minute consists of 36 standard seconds, which is 1/100 of an hour.
//     Working time is usually rounded to Integer decimal minutes. Thus one normal minute equals 0.02 decimal hours, while two normal minutes equal 0.03 decimal hours and so on.
//     There will be no seconds in the tests. We'll neglect them for the purpose of this kata.
//
//
// Flavor text (click to expand)
// Calculations with time units can be confusing, because we are used to calculating in the decimal system in every day use.
// An hour, however, consists of sixty minutes, which in turn consist of sixty seconds each.
//
// Examples:
// toIndustrial(1) => 0.02
// toIndustrial("1:45") => 1.75
// toNormal(0.33) => "0:20"
//
// Answer:
function toIndustrial(time) {
  if (+time === time) {
    return +(time / 60).toFixed(2);
  } else {
    return +((+time.split(":")[0] * 60 + +time.split(":")[1]) / 60).toFixed(2);
  }
}

function toNormal(time) {
  let hrs = parseInt(time);
  let mins = time % 1;
  return `${hrs}:${String(Math.round(mins * 60)).padStart(2, 0)}`;
}
