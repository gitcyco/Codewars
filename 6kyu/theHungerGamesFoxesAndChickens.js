// 6 kyu The Hunger Games - Foxes and Chickens
//
// Old MacDingle had a farm.
//
// To be more precise, he had a free-range chicken farm.
//
// But Old MacDingle also had a fox problem.
//
// Foxes F eat chickens C
//
// At night the only guaranteed "safe" chickens are in their cages [] (unless a fox has got into the cage with them!)
// Kata Task
//
// Given the initial configuration of foxes and chickens what will the farm look like the next morning after the hungry foxes have been feasting?
// Examples
// Ex1	Before
//
// CCC[CCC]FCC[CCCCC]CFFFF[CCC]FFFF
//
// After
//
// ...[CCC]F..[CCCCC].FFFF[CCC]FFFF
//
// Ex2	Before
//
// ...[CCC]...[CCCFC].....[CCC]....
//
// After
//
// ...[CCC]...[...F.].....[CCC]....
//
// Ex3	Before
//
// CCC[CCC]FCC[CCCFC]CFFFF[CCC]FFFF
//
// After
//
// ...[CCC]F..[...F.].FFFF[CCC]FFFF
//
// Notes
//
//     Anything not a fox, a chicken, or a cage is just dirt .
//     All cages are intact (not open-ended), and there are no cages inside other cages
//
// Answer:
//
// Long, but why not, also O(n)
const hungryFoxes = function (farm) {
  let all = [];
  let str = "";
  let outside = false;
  for (let i = 0; i < farm.length; i++) {
    if (farm[i] === "F") {
      outside = true;
      break;
    } else if (farm[i] === "[") {
      while (farm[i++] !== "]");
      i--;
    }
  }
  for (let i = 0; i < farm.length; i++) {
    if (farm[i] === "[") {
      if (str.length > 0) {
        all.push(str);
        str = "";
      }
      let cage = "";
      while (farm[i] !== "]") cage += farm[i++];
      cage += farm[i];
      if (cage.includes("F")) cage = cage.replace(/[C]/gi, ".");
      all.push(cage);
    } else {
      if (outside && farm[i] === "C") str += ".";
      else str += farm[i];
    }
  }
  all.push(str);
  return all.join("");
};
