// 6 kyu Drunk friend
//
// You're hanging out with your friends in a bar, when suddenly one of them is so drunk, that he can't
// speak, and when he wants to say something, he writes it down on a paper.
// However, none of the words he writes make sense to you.
// He wants to help you, so he points at a beer and writes "yvvi".
// You start to understand what he's trying to say, and you write a script, that decodes his words.
//
// Keep in mind that numbers, as well as other characters, can be part of the input, and you should keep them like they are.
// You should also test if the input is a string. If it is not, return "Input is not a string".
//
// Answer:
function decode(str) {
  if (typeof str !== "string") return "Input is not a string";
  const keyA = "abcdefghijklmnopqrstuvwxyz";
  const keyB = keyA.split("").reverse().join("");

  let out = "";
  for (let char of str) {
    if (/[^a-zA-Z]/.test(char)) out += char;
    else {
      let upper = false;
      if (char.toLowerCase() !== char) upper = true;
      const newChar = keyB[keyA.indexOf(char.toLowerCase())];
      out += upper ? newChar.toUpperCase() : newChar;
    }
  }
  return out;
}
