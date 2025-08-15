// 6 kyu N High Scores
//
// You've been given the task of retrieving the top N high scores from players of a video game.
//
// You need to write the function top_scores(records, n_top)
//
// where records is a list of lists in the form of
//
// records = [
//   ["Bob", 100],
//   ["Jane", 120],
//   ["Alice", 10],
//   ["Bob", 110],
//   ["Bob", 10]
// ]
//
// and n_top is an integer.
//
// The function should return the top n records, where each user name can appear at most a single time.
// Records should be in from highest to lowest. Users with the same score should be in alphabetical order.
//
// >>> top_scores(records, 3)
// [["Jane", 120],["Bob", 110],["Alice", 10]]
//
// if n_top is negative or 0, the returned value should be an empty list.
//
// if n_top is greater than the total number of records, you should include as many valid records as possible.
//
// Answer:
function topScores(records, nTop) {
  if (!records || records.length === 0 || nTop < 1) return [];

  const map = {};
  for (let [name, score] of records) {
    if (name in map) map[name] = Math.max(map[name], score);
    else map[name] = score;
  }
  const sorted = Object.entries(map).sort(
    ([aName, aScore], [bName, bScore]) => {
      if (aScore !== bScore) return bScore - aScore;
      return aName.localeCompare(bName);
    }
  );
  return sorted.slice(0, nTop);
}
