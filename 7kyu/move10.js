// 7 kyu Move 10
//
// Move every letter in the provided string forward 10 letters through the alphabet.
//
// If it goes past 'z', start again at 'a'.
//
// Input will be a string with length > 0.
//
// Answer:
function moveTen(s) {
  s = s
    .split("")
    .map((e) => rotX(e, 10))
    .join("");
  return s;
}

const rotX = (str, x) =>
  str.replace(/[a-z]/gi, (e) =>
    String.fromCharCode((((x < 0 ? 26 : 0) + e.charCodeAt(0) - offset(e) + (x < 0 ? x % 26 : x)) % 26) + offset(e))
  );
const offset = (s) => (s.toUpperCase() === s ? 65 : 97);
