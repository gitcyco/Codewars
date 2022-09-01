// 5 kyu Sort arrays - 3
//
// This time the input is a sequence of course-ids that are formatted in the following way:
//
// name-yymm
//
// The return of the function shall first be sorted by yymm, then by the name (which varies in length).
//
// Answer:
const sortme = function (courses) {
  return (arr = courses.sort((a, b) => {
    let [aS, aN] = a.split("-");
    let [bS, bN] = b.split("-");
    return aN == bN ? (aS > bS ? 1 : -1) : aN - bN;
  }));
};
