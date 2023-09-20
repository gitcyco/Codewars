// 4 kyu Count the connected components
//
// You are managing an amazing city and indeed its a maze.
// This city has the particularity to be divided into districts which are unreachable from the other districts.
// More precisely, a district consists of one or more places connected with roads.
// If there is two places p1 and p2 and there is a path (not necessarily direct) between p1 and p2 then p1 and p2 are in the same district.
//
// As a manager, your objective is to count the number of district.
//
// To perform this task you have for each place in the city the list of the other places that are directly reachable through a street. For example if you are given the city
//
// var city = {
//   'p0': ['p1', 'p2'],
//   'p1': ['p0'],
//   'p2': ['p0'],
//   'p3': []
// }
//
// then you can directly reach p1 and p2 from p0 but you cannot reach directly p2 from p1, you have to go through p0.
// Moreover there is no path from p3 to the other places so p3 is in another district.
//
// Note that all the streets are bidirectional, if there is a street from p1 to p2 then you can also go from p2 to p1 through this street.
//
// The city has always at least one place.
//
// Hint: This problem can be easily solved by modeling the city as an undirected graph where the nodes represents the places and the edges are the roads between the edges.
//
// Answer:
function countDistricts(city) {
  let nbDistricts = 0;
  const seen = {};
  for (const path of Object.keys(city)) {
    if (!seen[path]) nbDistricts++;
    const queue = [path];
    while (queue.length > 0) {
      const cur = queue.pop();
      const adj = city[cur];
      seen[cur] = true;
      for (const a of adj) {
        if (!seen[a]) queue.push(a);
      }
    }
  }
  return nbDistricts;
}
