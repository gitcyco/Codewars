// 5 kyu 80's Kids #6: Rock 'Em, Sock 'Em Robots
//
// You and your friends have been battling it out with your Rock 'Em, Sock 'Em robots, but things have gotten a little boring. You've each decided to add some amazing new features to your robot and automate them to battle to the death.
//
// Each robot will be represented by an object. You will be given two robot objects, and an object of battle tactics and how much damage they produce. Each robot will have a name, hit points, speed, and then a list of battle tacitcs they are to perform in order. Whichever robot has the best speed, will attack first with one battle tactic.
//
// Your job is to decide who wins.
//
// Example:
//
//  robot1 = {
//   "name": "Rocky",
//   "health": 100,
//   "speed": 20,
//   "tactics": ["punch", "punch", "laser", "missile"]
//  }
//  robot2 = {
//    "name": "Missile Bob",
//    "health": 100,
//    "speed": 21,
//    "tactics": ["missile", "missile", "missile", "missile"]
//  }
//  tactics = {
//    "punch": 20,
//    "laser": 30,
//    "missile": 35
//  }
//
//  fight(robot1, robot2, tactics) -> "Missile Bob has won the fight."
//
// robot2 uses the first tactic, "missile" because he has the most speed. This reduces robot1's health by 35. Now robot1 uses a punch, and so on.
//
// Rules
//
//     A robot with the most speed attacks first. If they are tied, the first robot passed in attacks first.
//     Robots alternate turns attacking. Tactics are used in order.
//     A fight is over when a robot has 0 or less health or both robots have run out of tactics.
//     A robot who has no tactics left does no more damage, but the other robot may use the rest of his tactics.
//     If both robots run out of tactics, whoever has the most health wins. If one robot has 0 health, the other wins. Return the message "{Name} has won the fight."
//     If both robots run out of tactics and are tied for health, the fight is a draw. Return "The fight was a draw."
//
// Answer:
function fight(robot1, robot2, tactics) {
  robot1.tactics = robot1.tactics.map((e) => tactics[e]).reverse();
  robot2.tactics = robot2.tactics.map((e) => tactics[e]).reverse();
  let first = robot1;
  let second = robot2;
  if (robot1.speed < robot2.speed) {
    first = robot2;
    second = robot1;
  }
  while (first.tactics.length || second.tactics.length) {
    let fT = first.tactics.length ? first.tactics.pop() : 0;
    let sT = second.tactics.length ? second.tactics.pop() : 0;
    second.health -= fT;
    if (second.health < 1) return `${first.name} has won the fight.`;
    first.health -= sT;
    if (first.health < 1) return `${second.name} has won the fight.`;
  }
  if (second.health < first.health) return `${first.name} has won the fight.`;
  if (first.health < second.health) return `${second.name} has won the fight.`;
  return "The fight was a draw.";
}
