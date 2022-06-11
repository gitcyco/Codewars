// 6 kyu Good vs Evil
//
// Input:
// 
// The function will be given two parameters. Each parameter will be a string of multiple integers 
// separated by a single space. Each string will contain the count of each race on the side of good and evil.
// 
// The first parameter will contain the count of each race on the side of good in the following order:
// 
//     Hobbits, Men, Elves, Dwarves, Eagles, Wizards.
// 
// The second parameter will contain the count of each race on the side of evil in the following order:
// 
//     Orcs, Men, Wargs, Goblins, Uruk Hai, Trolls, Wizards.
// 
// All values are non-negative integers. The resulting sum of the worth for each side will not exceed the limit of a 32-bit integer.
// Output:
// 
// Return "Battle Result: Good triumphs over Evil" if good wins, "Battle Result: Evil eradicates all trace of Good" if evil wins, or "Battle Result: No victor on this battle field" if it ends in a tie.
//
// Answer:
function goodVsEvil(g, e){
    const gs = [1,2,3,3,4,10];
    const es = [1,2,2,2,3,5,10];
    const goodScore = g.split(' ').reduce((ac,e,i) => ac = ac + e*gs[i],0);
    const evilScore = e.split(' ').reduce((ac,e,i) => ac = ac + e*es[i],0);
    if(goodScore < evilScore) 
          return "Battle Result: Evil eradicates all trace of Good";
    else  return goodScore > evilScore 
          ? "Battle Result: Good triumphs over Evil" 
          : "Battle Result: No victor on this battle field";
}