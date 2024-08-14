// 6 kyu What century is it?
//
// Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.
// Examples
//
// "1999" --> "20th"
// "2011" --> "21st"
// "2154" --> "22nd"
// "2259" --> "23rd"
// "1124" --> "12th"
// "2000" --> "20th"
//
// Answer:
function whatCentury(year) {
  const suf = ["th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th"];
  let pre = +year.slice(0, 2) + 1;
  if (year.length === 2) {
    return `${pre - 1}th`;
  } else if (pre > 9 && pre < 20) {
    return `${pre}th`;
  } else if (/^\d{1,2}00?$/.test(year)) {
    return year.slice(0, 2) + suf[0];
  }
  return `${pre}${suf[+pre.toString().slice(-1)]}`;
}
