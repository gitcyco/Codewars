// 6 kyu FIRE and FURY
//
// The President's phone is broken
//
// He is not very happy.
//
// The only letters still working are uppercase E, F, I, R, U, Y.
//
// An angry tweet is sent to the department responsible for presidential phone maintenance.
// Kata Task
//
// Decipher the tweet by looking for words with known meanings.
//
//     FIRE = "You are fired!"
//     FURY = "I am furious."
//
// If no known words are found, or unexpected letters are encountered, then it must be a "Fake tweet."
// Notes
//
//     The tweet reads left-to-right.
//     Any letters not spelling words FIRE or FURY are just ignored
//     If multiple of the same words are found in a row then plural rules apply -
//     FIRE x 1 = "You are fired!"
//     FIRE x 2 = "You and you are fired!"
//     FIRE x 3 = "You and you and you are fired!"
//     etc...
//     FURY x 1 = "I am furious."
//     FURY x 2 = "I am really furious."
//     FURY x 3 = "I am really really furious."
//     etc...
//
// Examples
//
//     ex1. FURYYYFIREYYFIRE = "I am furious. You and you are fired!"
//     ex2. FIREYYFURYYFURYYFURRYFIRE = "You are fired! I am really furious. You are fired!"
//     ex3. FYRYFIRUFIRUFURE = "Fake tweet."
//
// Answer:
const fireAndFury = function (tweet) {
  const words = tweet.match(/FIRE|FURY/g) || [];
  if (/[^EFIRUY]/g.test(tweet) || !words.length) return "Fake tweet.";
  let obj = { word: words[0], count: 1 };
  let cur = words[0];
  const counts = [obj];
  for (let i = 1; i < words.length; i++) {
    if (words[i] === cur) obj.count++;
    else {
      obj = { word: words[i], count: 1 };
      counts.push(obj);
      cur = words[i];
    }
  }
  const text = counts.map(({ word, count }) => {
    if (word === "FIRE") {
      return "You " + "and you ".repeat(count - 1) + "are fired!";
    } else {
      return "I am " + "really ".repeat(count - 1) + "furious.";
    }
  });
  return text.join(" ");
};
