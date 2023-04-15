// 6 kyu Exclamation marks series #10: Remove some exclamation marks to keep the same number of exclamation marks at the beginning and end of each word
//
// Remove the minimum number of exclamation marks from the start/end of each word in the sentence to make their amount equal on both sides.
// Notes:
//
//     Words are separated with spaces
//     Each word will include at least 1 letter
//     There will be no exclamation marks in the middle of a word
//
// Examples
//
// remove("Hi!") === "Hi"
// remove("!Hi! Hi!") === "!Hi! Hi"
// remove("!!Hi! !Hi!!") === "!Hi! !Hi!"
// remove("!!!!Hi!! !!!!Hi !Hi!!!") === "!!Hi!! Hi !Hi!"
//
// Answer:
function remove(str) {
  let arr = str.split(" ").map((e) => {
    let s = (e.match(/^!+/) || [""])[0].length;
    let v = (e.match(/!+$/) || [""])[0].length;
    let n = e.replaceAll("!", "");
    let min = Math.min(s, v);
    return "!".repeat(min) + n + "!".repeat(min);
  });
  return arr.join(" ");
}
