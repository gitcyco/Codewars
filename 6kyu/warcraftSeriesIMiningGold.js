// 6 kyu Warcraft Series I - Mining Gold
//
// Greetings! The kata is inspired by my favorite strategy game, Warcraft 3, where players control units to gather resources and build their base.
// In this kata, the goal is to create a program that simulates the process of gathering gold from a mine and transporting it to a base.
//
// The Workers are assigned to the gold mine and will automatically begin to gather gold from the mine.
// Once a Worker has collected a certain amount of gold, it will return to the base to deposit the gold at the Town Hall building.
// Input
//
//     The parameter path represents the initial state of the mining field.
//     It has a mine at index 0, represented by the letter "M", and a base at index 4, represented by the letter "B".
//     The worker is initially positioned at index 2, which is a location between the mine and the base.
//     The parameter time is the number of iterations or ticks that the simulation should run.
//     The method takes the input string, which represents the initial state of the simulation, and simulates the movement of workers for times iterations.
//     The resulting state of the simulation is then converted into a list of strings, where each string represents a row of the grid.
//
// MiningRepresentation.generate("M..<B", 9);
//
// Output
//
// The output is a list or an array of strings representing the state of the map after each tick of time until time is over.
//
// M..<B // Worker goes to the mine
// M.<.B
// M<..B
// *...B // Worker is mining gold
// M>..B
// M.>.B
// M..>B
// M...* // Worker brought the gold
// M..<B
//
// Explanation:
//
//     M - Mine (location to gather gold)
//     B - Base (location to bring gold)
//     < or > direction where workers go (left/right)
//     * - marks that Mine or Base is already busy by other worker
//     # - marks collision (two workers at the same tile)
//     Note: Mine and Base cannot contain more than one worker at a time
//     . - Empty tile used to represent road between mine and base
//
// Example colisions
//
//     Smooth Colision
//
//     "M>....<B"
//     "M.>..<.B"
//     "M..><..B" // smooth collision
//     "M..<>..B"
//     "M.<..>.B"
//
//     Colision on same tile
//
//     "M>...<B"
//     "M.>.<.B"
//     "M..#..B" // two workers on same tile
//     "M.<.>.B"
//     "M<...>B"
//
// Tips:
//
//     Mine will be always at index 0, and Base at last index.
//     Workers always spends one tick/time at base, in mine, or traveling one cell.
//     There will be no test where workers spawn in collision, base or mine. Currently there is no chance to get a random input that will have # or * in it.
//     But the principle is very simple.
//         Character # means that two workers are on same tile, and one goes to right and other to left(opposite dirrection).
//         Character * means that the worker already arrived at one of the destionation so he will go to other one(mine to base or vice versa).
//
// I'm still thinking if I should add more complex random tests that place workers anywhere at the start. Let me know your oppinion in discussions.
//
// For better understanding check Example Tests for each case with comments inside. Good luck and be ready to work!
//
// Answer:
function simulateMining(path, time) {
  const result = [getWorkers(path)];
  let b = path.length - 1;
  let cur = result[0];
  for (let i = 1; i < time; i++) {
    const newRow = new Array(path.length).fill(0).map((_) => new Array(0));
    for (let j = 0; j < path.length; j++) {
      if (cur[j].length) {
        for (let item of cur[j]) {
          const newItem = { ...item };
          if (item.pos === 0) newItem.dir = 1;
          if (item.pos === b) newItem.dir = -1;
          let pos = newItem.pos + newItem.dir;
          if (pos === 0 || pos === b) {
            if (newRow[pos].length) {
              newRow[j].push(newItem);
              continue;
            }
          }
          newItem.pos = pos;
          newRow[pos].push(newItem);
        }
      }
    }
    cur = newRow;
    result.push(cur);
  }
  return result.map((e) => {
    for (let i = 0; i < e.length; i++) {
      if (i === 0) {
        if (e[i].length) e[i] = "*";
        else e[i] = "M";
      } else if (i === e.length - 1) {
        if (e[i].length) e[i] = "*";
        else e[i] = "B";
      } else {
        if (e[i].length > 1) e[i] = "#";
        else if (e[i].length) e[i] = e[i][0].dir === 1 ? ">" : "<";
        else e[i] = ".";
      }
    }
    return e.join("");
  });
}
const getWorkers = (path) => {
  const all = new Array(path.length).fill(0);
  for (let i = 0; i < path.length; i++) {
    if (path[i] === "<") all[i] = [{ dir: -1, pos: i }];
    if (path[i] === ">") all[i] = [{ dir: 1, pos: i }];
  }
  return all;
};
