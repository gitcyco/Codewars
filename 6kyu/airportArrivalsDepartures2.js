// 6 kyu Airport Arrivals/Departures - #2
//
// Well here you are again, still staring blankly at the same arrivals/departures flap display...
//
// Part #1
//
// In Part #1 of this series you already figured out how the flap display mechanism works.
//
// You now know what the updated display will look like after applying a set of rotor moves.
//
// If you haven't already completed Part 1, then now is a good time to do it!
// Part #2
//
// Now in this current Kata your task is the opposite.
//
// It's the same board with the same rules...
//
// But this time you are required to return the set of rotor moves needed to transform the display from the before to the after state.
//
// Answer:
const flapRotors = function (before, after) {
  let lines = before.map((line) => {
    return [...line].map((c) => ALPHABET.indexOf(c));
  });
  return lines.map((line, index) => {
    let prev = 0;
    return line.map((num, i) => {
      let end = ALPHABET.indexOf(after[index][i]);
      num = (num + prev) % ALPHABET.length;
      if (end < num) {
        num = ALPHABET.length - num + end;
      } else {
        num = end - num;
      }
      prev += num;
      return num;
    });
  });
};
