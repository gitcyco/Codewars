// 5 kyu Magic The Gathering #2: Mana
//
// Magic The Gathering is a collectible card game that features wizards battling against each other with spells and creature summons.
// The game itself can be quite complicated to learn.
// In this series of katas, we'll be solving some of the situations that arise during gameplay.
// You won't need any prior knowledge of the game to solve these contrived problems, as I will provide you with enough information.
//
// In Magic, each spell you cast has a cost associated with it. Those costs are represented like so:
//
// "B" -> One black mana
// "G" -> One green mana
// "R" -> One red mana
// "U" -> One blue mana
// "W" -> One white mana
// "1" -> One colorless mana
// "2" -> Two colorless mana
// "3BBG" -> Three colorless mana, two black mana, one green mana
//
// Your mana pool will be one string that contains all of your available mana like so:
//
// "10WWWRRRRR" -> Means you have 10 colorless mana, 3 white mana and 5 red mana to work with.
//
// The caveat is, any left over colored mana, can be used as colorless mana.
// So if you have a spell that costs "1B" and your mana pool has "UB" you can cast that spell, since the "U" can be used as a colorless mana.
//
// With this knowlege, write a function canCast() that takes in a string for your mana pool and then
// any number of spells' casting costs. Return true if you have enough mana to cast the spell, false otherwise.
//
// Examples:
//
// canCast("BBRR","BR") -> true
// canCast("BBRR","BR","BR") -> true
// canCast("4R","3R") -> true
// canCast("2", "R") -> false
// canCast("RR", "2") -> true
//
// Answer:
function canCast(...rest) {
  if (rest.length === 0) return true;
  const lands = getLands(rest[0]);
  const spells = [];
  for (let i = 1; i < rest.length; i++) {
    spells.push(getLands(rest[i]));
  }
  for (let i = 0; i < spells.length; i++) {
    let [keys, vals] = [Object.keys(spells[i]), Object.values(spells[i])];
    keys.forEach((e, idx) => {
      if (e !== "NC") {
        lands[e] -= vals[idx];
        spells[i][e] -= vals[idx];
      }
    });
    if (Object.values(lands).some((e) => e < 0)) return false;
  }
  let rem = Object.values(lands).reduce((a, e) => a + e, 0);
  let need = spells.reduce((a, e) => Object.values(e).reduce((v, c) => v + c, 0), 0);
  return need <= rem;
}

const getLands = (a) => {
  const obj = {};
  obj.NC = +a.match(/[0-9]+/g);
  let lands = ["B", "R", "G", "U", "W"];
  lands.forEach((e) => (obj[e] = getSpec(a, e)));
  return obj;
};

const getSpec = (s, t) => {
  return (s.match(new RegExp(`[${t}]`, "g")) || []).length;
};
