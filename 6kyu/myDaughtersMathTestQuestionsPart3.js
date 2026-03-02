// 6 kyu My daughter's math test questions -- Part 3
//
//     When no more interesting kata can be resolved, I just choose to create the new kata, to solve their own, to enjoy the process --myjinxin2015 said
//
// Task
//
// My daughter is in primary school. Please help her with her math test. Here are some examples:
//
//  Question: Do you know the names of neighbors?
//            Look at the picture and answer the questions.
//    ______________________
//   /_____________________/|
//  /_____________________/ |
//  |      |      |      |  |
//  | Tom  |Jerry | John | /|
//  |______|______|______|/ |
//  |      |      |      |  |
//  | Mike |Peter |Alice | /|
//  |______|______|______|/ |
//  |      |      |      |  |
//  |  Bob | Bill | Wang | /
//  |______|______|______|/
//
// Peter: My left neighbor is (?) ---> (Mike)
// Bob: My upstairs neighbor is (?) ---> (Mike)
// Tom: My right neighbor is (?) ---> (Jerry)
// Jerry: My downstairs neighbor is (?) ---> (Peter)
// //If there is no neighbor, fill in "nobody"
// Wang: My right neighbor is (?) ---> (nobody)
// Wang: My downstairs neighbor is (?) ---> (nobody)
// Tom: My upstairs neighbor is (?) ---> (nobody)
//
// Note:
//
// The testcases may contains multiple lines; For the sake of simplicity, all the neighbors are in 3x3's building;
// Each question contain only one pair of parentheses; all string in the tests are valid.
//
// Answer:
function mathTest(pic, q) {
  const dirs = {
    left: [0, -1],
    right: [0, 1],
    upstairs: [-1, 0],
    downstairs: [1, 0],
  };
  const grid = pic
    .split("\n")
    .filter((e) => /[a-z]/g.test(e))
    .map((e) =>
      e
        .split("|")
        .map((s) => s.trim())
        .filter((e) => /[a-z]/g.test(e)),
    );
  const coords = {};
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[0].length; x++) {
      let name = grid[y][x];
      coords[name] = [y, x];
    }
  }
  const ques = q.split("\n").map((e) => e.trim());
  return ques
    .map((item) => {
      let name = (item.match(/^\w+/) || [])[0];
      let dir = (item.match(/left|right|downstairs|upstairs/) || [])[0];
      let coord = coords[name];
      let [y, x] = dirs[dir];
      let [newY, newX] = [coord[0] + y, coord[1] + x];
      let neighbor = "";
      if (newY < 0 || newX < 0 || newY >= grid.length || newX >= grid[0].length)
        neighbor = "nobody";
      else neighbor = grid[newY][newX];
      return item.replace("?", neighbor);
    })
    .join("\n");
}
