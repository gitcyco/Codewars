// 6 kyu Pile of towels
//
// In my bathroom, there is a pile of n towels. A towel either has the color red or blue.
// We will represent the pile as sequence of red and blue.
// The leftmost towel is at the bottom of the pile, the rightmost towel is at the top of the pile.
//
// As the week goes by, I use t towels. Whenever I grab a new one it's always the towel at the top of the pile.
// All used towels are placed in a basket.
//
// At the end of the week, I wash all used towels in the basket and put them on top of the existing pile again.
// But my favorite color is blue, so I want to use blue towels as often as possible.
// Therefore, when the washed towels are placed on the pile again, the blue towels are always on top of the red towels.
// An Example
//
// If there are n=5 towels, a pile may be:blue, red, blue, red, blue
//
// If I grab t=3 towels during the week, this will be the remaining pile at the end of the week: blue, red
//
// The basket will contain the following towels: blue, red, blue
//
// After I sorted the washed towels and put them on the pile according to the rule described above, the resulting pile is:blue, red, red, blue, blue
// Your Task: Sort the Pile
//
// You are given an initial pile of towels as a sequence of the strings "red" and "blue".
// On top of that, you receive a sequence of non-negative integers.
// The first integer describes the number of used towels t in the first week, the second integer describes the number of used towels t in the second week and so forth.
//
// My question is: How will my pile of towels look like in the end, if I use t towels every week and place them on top of the the pile according to the rule defined above?
// Notes
//
// It is ensured that 0 <= t <= n
//
// Answer:
function sortThePile(pile, t) {
  let max = Math.max(...t);
  return pile
    .slice(0, pile.length - max)
    .concat(
      pile.slice(pile.length - max).sort((a, b) => (a == "red" ? -1 : 1))
    );
}
