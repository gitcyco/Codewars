// 5 kyu Histogram - V1
//
// Background
//
// A 6-sided die is rolled a number of times and the results are plotted as a character-based histogram.
//
// Example:
//
//     10
//     #
//     #
// 7   #
// #   #
// #   #     5
// #   #     #
// # 3 #     #
// # # #     #
// # # # 1   #
// # # # #   #
// -----------
// 1 2 3 4 5 6
//
// Task
//
// You will be passed all the dice roll results, and your task is to write the code to return
// a string representing a histogram, so that when it is printed it has the same format as the example
//
// Notes
//
//     There are no trailing spaces on the lines
//     All lines (including the last) end with a newline \n
//     A count is displayed above each bar (unless the count is 0)
//     The number of rolls may vary but is always less than 100
//
// Answer:
const histogram = function (results) {
  let [max, maxIdx] = getMax(results);
  const hist = new Array(max + 3).fill("");
  hist[0] = "1 2 3 4 5 6";
  hist[1] = "-----------";
  for (let i = 2; i < max + 3; i++) {
    for (let d = 0; d < 11; d++) {
      let val = d / 2 + 1;
      let node = parseInt(val) === val;
      let num = node ? results[val - 1] : -1;
      if (node && i - 2 < num) {
        hist[i] += "# ";
      } else if (node && i - 2 === num) {
        if (num < 10 && num > 0) hist[i] += num + " ";
        else if (num > 0) hist[i] += num;
        else hist[i] += "  ";
      } else if (node) {
        hist[i] += num < 10 ? "  " : "";
      }
    }
  }
  return (
    hist
      .reverse()
      .map((e) => e.trimEnd())
      .filter(Boolean)
      .join("\n") + "\n"
  );
};

function getMax(results, max = 0, maxIdx = 0) {
  for (let i = 0; i < results.length; i++) {
    if (results[i] > max) {
      max = results[i];
      maxIdx = i;
    }
  }
  return [max, maxIdx];
}
