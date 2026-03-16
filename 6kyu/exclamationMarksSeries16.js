// 6 kyu Exclamation marks series #16: Find the longest successive exclamation marks and question marks combination in the string
//
// Description:
//
// Find the longest successive exclamation marks and question marks combination in the string.
// A successive exclamation marks and question marks combination must contains two part: a substring of "!" and a substring "?", they are adjacent.
//
// If more than one result are found, return the one which at left side; If no such a combination found, return "".
// Examples
//
// find("!!") === ""
// find("!??") === "!??"
// find("!?!!") === "?!!"
// find("!!???!????") === "!!???"
// find("!!???!?????") === "!?????"
// find("!????!!!?") === "????!!!"
// find("!?!!??!!!?") === "??!!!"
//
// Answer:
function find(s) {
  let max = ["", Infinity];
  // !? pattern
  s.replace(/\!+\?+/g, (e, i) => {
    if (e.length > max[0].length) max = [e, i];
    if (e.length === max[0].length && i < max[1]) max = [e, i];
  });
  // ?! pattern
  s.replace(/\?+\!+/g, (e, i) => {
    if (e.length > max[0].length) max = [e, i];
    if (e.length === max[0].length && i < max[1]) max = [e, i];
  });
  return max[0];
}
