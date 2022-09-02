// DESCRIPTION
//
//
// Answer:
function perms(xs) {
  if (!xs.length) return [[]];
  return xs.flatMap((x) => {
    // get permutations of xs without x, then prepend x to each
    return perms(xs.filter((v) => v !== x)).map((vs) => [x, ...vs]);
  });
  // or this duplicate-safe way, suggested by @M.Charbonnier in the comments
  // return xs.flatMap((x, i) => {
  //   return perms(xs.filter((v, j) => i!==j)).map(vs => [x, ...vs]);
  // });
  // or @user3658510's variant
  // return xs.flatMap((x, i) => {
  //   return perms([...xs.slice(0,i),...xs.slice(i+1)]).map(vs => [x,...vs]);
  // });
}

let str = "cat";
let a = str.split("");
let out = perms(a);
console.log(out);
