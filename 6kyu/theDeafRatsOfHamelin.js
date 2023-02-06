// 6 kyu The Deaf Rats of Hamelin
//
// Story
//
// The Pied Piper has been enlisted to play his magical tune and coax all the rats out of town.
//
// But some of the rats are deaf and are going the wrong way!
// Kata Task
//
// How many deaf rats are there?
// Legend
//
//     P = The Pied Piper
//     O~ = Rat going left
//     ~O = Rat going right
//
// Example
//
//     ex1 ~O~O~O~O P has 0 deaf rats
//
//     ex2 P O~ O~ ~O O~ has 1 deaf rat
//
//     ex3 ~O~O~O~OP~O~OO~ has 2 deaf rats
//
// Answer:
const countDeafRats = function (town) {
  let lr = town.replace(/\s/gi, "").split("P");
  let l = (lr[0].match(/.{2}/g) || []).map((e) => (e === "~O" ? 0 : 1));
  let r = (lr[1].match(/.{2}/g) || []).map((e) => (e === "~O" ? 1 : 0));
  return l.concat(r).reduce((a, e) => a + e, 0);
};
