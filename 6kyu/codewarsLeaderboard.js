// 6 kyu Codewars Leaderboard
//
// Get the list of integers for Codewars Leaderboard score (aka Honor) in descending order
//
// Note:
// if it was the bad timing, the data could be updated during your test cases.
// Try several times if you had such experience.
//
// Answer:
const getLeaderboardHonor = async () => {
  const data = await fetch("https://www.codewars.com/users/leaderboard");
  let raw = await data.text();
  let honor = raw.match(/<td class=\"honor\s*\">(.*?)<\/td>/gi);
  return honor.map((e) => +e.replace(/[^0-9]/gi, "").trim()).sort((a, b) => b - a);
};
