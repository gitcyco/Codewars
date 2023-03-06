// 6 kyu Magic The Gathering #1: Creatures
//
// Magic The Gathering is a collectible card game that features wizards battling against each other with spells and creature summons.
// The game itself can be quite complicated to learn.
// In this series of katas, we'll be solving some of the situations that arise during gameplay.
// You won't need any prior knowledge of the game to solve these contrived problems, as I will provide you with enough information.
// Creatures
//
// Each creature has a power and toughness. We will represent this in an array. [2, 3] means this creature has a power of 2 and a toughness of 3.
//
// When two creatures square off, they each deal damage equal to their power to each other at the same time.
// This only happens once. If a creature takes on damage greater than or equal to their toughness, they die.
//
// Examples:
//
//     Creature 1 - [2, 3]
//     Creature 2 - [3, 3]
//     Creature 3 - [1, 4]
//     Creature 4 - [4, 1]
//
// If creature 1 battles creature 2, creature 1 dies, while 2 survives. If creature 3 battles creature 4,
// they both die, as 3 deals 1 damage to 4, but creature 4 only has a toughness of 1.
//
// Write a function battle(player1, player2) that takes in 2 arrays of creatures.
// Each players' creatures battle each other in order (player1[0] battles the creature in player2[0]) and so on.
// If one list of creatures is longer than the other, those creatures are considered unblocked, and do not battle.
//
// Your function should return an object (a hash in Ruby) with the keys player1 and player2 that contain the power and toughness of the surviving creatures.
//
// Example:
//
// player1 = [[1, 1], [2, 1], [2, 2], [5, 5]];
// player2 = [[1, 2], [1, 2], [3, 3]];
// battle(player1, player2) ->
// { 'player1': [[5, 5]],
//   'player2': [[1, 2], [3, 3]] }
//
// Answer:
function battle(p1, p2) {
  const p1Results = [];
  const p2Results = [];
  const len = Math.max(p1.length, p2.length);
  for (let i = 0; i < len; i++) {
    if (i >= p1.length) {
      p2Results.push(...p2.slice(i));
      break;
    }
    if (i >= p2.length) {
      p1Results.push(...p1.slice(i));
      break;
    }
    let [p1Pow, p1Tgh] = [p1[i][0], p1[i][1]];
    let [p2Pow, p2Tgh] = [p2[i][0], p2[i][1]];
    p1Tgh -= p2Pow;
    p2Tgh -= p1Pow;
    if (p1Tgh > 0) p1Results.push(p1[i]);
    if (p2Tgh > 0) p2Results.push(p2[i]);
  }
  return { player1: p1Results, player2: p2Results };
}
