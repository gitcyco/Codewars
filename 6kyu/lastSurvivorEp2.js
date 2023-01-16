// 6 kyu Last Survivors Ep.2
//
// Substitute two equal letters by the next letter of the alphabet (two letters convert to one):
//
// "aa" => "b", "bb" => "c", .. "zz" => "a".
//
// The equal letters do not have to be adjacent.
// Repeat this operation until there are no possible substitutions left.
// Return a string.
//
// Example:
//
// let str = "zzzab"
//     str = "azab"
//     str = "bzb"
//     str = "cz"
// return "cz"
//
// Notes
//
//     The order of letters in the result is not important.
//     The letters "zz" transform into "a".
//     There will only be lowercase letters.
//
// Answer:
function lastSurvivors(str) {
  while (new Set(str.split("")).size !== str.length) {
    str = str
      .split("")
      .sort((a, b) => a.localeCompare(b))
      .join("");
    str = str.replace(/([a-z])\1/gi, (e) => (e[0] === e[1] ? rot1(e) : e));
  }
  return str;
}

function rot1(str) {
  return str[0].replace(/[a-z]/gi, (e) => {
    return String.fromCharCode(((e.charCodeAt(0) - 97 + 1) % 26) + 97);
  });
}
