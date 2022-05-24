// 6 kyu ASCII Fun #1: X- Shape
//
// You will get an odd integer n (>= 3) and your task is to draw an X. Each line is separated with \n.
// 
// Use the following characters: ■ □ For Ruby, Crystal and PHP: whitespace and o
// Examples
// 
// 
//                                      ■□□□■
//             ■□■                      □■□■□
//   x(3) =>   □■□             x(5) =>  □□■□□
//             ■□■                      □■□■□
//                                      ■□□□■
// 
// Answer:
function x(n){
    let mid = Math.ceil(n / 2);
    let outer = [...Array(n)].map(e => '□').map(e=> [...Array(n+1)].map(e=>'□'));
    outer = outer.map(a=> a.map((e,i,arr) => i == arr.length - 1 ? `\n` : e));
     for(let k = 0; k < mid; k++) {
       outer[k][k] = outer[k][outer.length-1-k] = '■';
       outer[outer.length-1-k][k] = outer[outer.length-1-k][outer.length-1-k] = '■';
    }
    return [].concat(...outer).join('').slice(0,-1);
}