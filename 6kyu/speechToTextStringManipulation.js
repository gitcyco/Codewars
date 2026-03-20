// 6 kyu Speech to Text - String Manipulation
//
// Siri needs you to code some new features: addition, subtraction and a weather checker.
// There's no need to implement the speech recognition, that's taken care of...
//
// Examples: "Add 7 to 15." -> 22 "Subtract 7 from 15." -> 8 "What is the weather at 5:30pm?" -> "sunny"
//
// According to the weather API, it is "sunny" from (including) 6am to 6pm (including), and "raining" the rest of the day.
//
// Answer:
const bot = {
  message(prompt) {
    if (/Add|Subtract/.test(prompt)) {
      let [a, _, b] = prompt.match(/\d+ (to|from) \d+/)[0].split(" ");
      if (/Add/.test(prompt)) return +a + +b;
      else return +b - +a;
    } else if (/weather/.test(prompt)) {
      let [hour, min, ampm] = prompt.match(/\d+|am|pm/g);
      hour = ampm === "am" ? +hour : +hour + 12;
      let numTime = Number(`${hour}.${min}`);
      if (numTime < 6 || numTime > 18) return "raining";
      return "sunny";
    }
    return "?";
  },
};
