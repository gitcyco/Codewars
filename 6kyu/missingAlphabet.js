// 6 kyu Missing Alphabet
//
// In this Kata you have to create a function,named insertMissingLetters,that takes in a string and outputs
// the same string processed in a particular way.
//
// The function should insert only after the first occurrence of each character of the input string, all the alphabet letters that:
//
// -are NOT in the original string
// -come after the letter of the string you are processing
//
// Each added letter should be in uppercase, the letters of the original string will always be in lowercase.
//
// Example:
//
// input: "holly"
//
// missing letters: "a,b,c,d,e,f,g,i,j,k,m,n,p,q,r,s,t,u,v,w,x,z"
//
// output: "hIJKMNPQRSTUVWXZoPQRSTUVWXZlMNPQRSTUVWXZlyZ"
//
// You don't need to validate input, the input string will always contain a certain amount of lowercase letters (min 1 / max 50).
//
// Answer:
function insertMissingLetters(str) {
  const letters = [...str].reduce((a, e) => ((a[e] = 1), a), {});
  let out = str.replace(/./g, (e) => {
    if (letters[e]) {
      letters[e]--;
      return getLetters(e, letters);
    } else return e;
  });
  return out;
}

const getLetters = (c, letters) => {
  let code = c.toUpperCase().charCodeAt(0);
  let str = "";
  for (let i = code + 1; i < 91; i++) {
    let char = String.fromCharCode(i);
    if (!(char.toLowerCase() in letters)) {
      str += String.fromCharCode(i);
    }
  }
  return c + str;
};
