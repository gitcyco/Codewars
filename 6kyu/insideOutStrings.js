// 6 kyu Inside Out Strings
//
// You are given a string of words (x), for each word within the string you need to turn the word 'inside out'.
// By this I mean the internal letters will move out, and the external letters move toward the centre.
//
// If the word is even length, all letters will move. If the length is odd, you are expected to leave the 'middle' letter of the word where it is.
//
// An example should clarify:
//
// 'taxi' would become 'atix' 'taxis' would become 'atxsi'
//
// Answer:
function insideOut(s) {
  let arr = s.split(" ").map((e) => {
    let r = (l = c = "");
    r = e
      .slice(0, Math.floor(e.length / 2))
      .split("")
      .reverse()
      .join("");
    c = e.slice(Math.floor(e.length / 2), Math.ceil(e.length / 2));
    l = e
      .slice(Math.ceil(e.length / 2))
      .split("")
      .reverse()
      .join("");
    return r + c + l;
  });
  return arr.join(" ");
}
