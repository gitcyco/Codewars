// 7 kyu 80's Kids #3: Punky Brewster's Socks
//
// Punky loves wearing different colored socks, but Henry can't stand it.
//
// Given an array of different colored socks, return a pair depending on who was picking them out.
//
// Example:
//
// getSocks('Punky', ['red','blue','blue','green']) -> ['red', 'blue']
//
// Note that Punky can have any two colored socks, in any order, as long as they are different and both exist. Henry always picks a matching pair.
//
// If there is no possible combination of socks, return an empty array.
//
// Answer:
function getSocks(name, socks) {
  const all = Object.entries(
    socks.reduce((a, e) => (e in a ? a[e]++ : (a[e] = 1), a), {})
  );
  const pairs = all.filter((e) => e[1] > 1);
  if (name === "Punky" && all.length > 1) return [all[0][0], all[1][0]];
  else if (name !== "Punky" && pairs.length > 0)
    return [pairs[0][0], pairs[0][0]];
  return [];
}
