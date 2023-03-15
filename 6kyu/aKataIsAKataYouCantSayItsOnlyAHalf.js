// 6 kyu A kata is a kata, you can't say it's only a half!
//
// Inspired by, obviously, this
//
// (It's recommended to watch the first 3 minutes of that video first.)
//
// You need to determine how many A presses is required for a segment of a complete run of a certain game.
//
// The A presses for the whole game will be passed in as an array of pairs, e.g:
// [[10,30],[35,90],[150,151],[250,400]], where the two elements in each array represent the beginning
// and the end of an A press respectively, in arbitrary time unit since the start of the game.
//
// However, counting A presses is not that simple: a segment might begin and/or end during an A press.
// Thus we count the number of A presses in the following way:
//
// Every actual press of A button is counted as 1 A press.
// In addition, if the segment begins while an A press is held, it is counted as 0.5 A presses.
//
// Note that both A presses ranges and segment ranges are inclusive.
//
// e.g An a press represented by [100,200] means that the A button is pressed before time 100 (and after time 99) and released after time 200 (but before time 201).
//
// Example:
//
// howManyAPresses([[10,30],[35,90],[150,151],[250,400]],0,100) => 2
//
// howManyAPresses([[10,30],[35,90],[150,151],[250,400]],20,100) => 1.5
//
// howManyAPresses([[10,30],[35,90],[150,151],[250,400]],20,80) => 1.5
//
// howManyAPresses([[10,30],[35,90],[150,151],[250,400]],300,350) => 0.5
//
// howManyAPresses([[10,30],[35,90],[150,151],[250,400]],150,151) => 0.5
//
// howManyAPresses([[10,30],[35,90],[150,151],[250,400]],90,120) => 0.5
//
// howManyAPresses([[10,30],[35,90],[150,151],[250,400]],120,150) => 1
//
// Answer:
function howManyAPresses(presses, start, end) {
  presses = presses.filter((e) => !(e[0] < start && e[1] < start) && !(e[0] > end && e[1] > end));
  presses = presses.map((e) => (e[0] > start && e[0] <= end ? 1 : 0.5));
  return presses.reduce((a, e) => a + e, 0);
}
