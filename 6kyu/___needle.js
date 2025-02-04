// DESCRIPTION
//
//
// Answer:

// Overly long iterative, not using any regex or string searches:
function find(needle, haystack) {
  console.log("N:", needle, "H:", haystack);
  let start = -1;
  for (let i = 0; i < haystack.length; i++) {
    let save = i;
    if (haystack[i] === needle[0] || needle[0] === "_") {
      if (i + needle.length >= haystack.length - 1) break;
      start = i;
      let index = 0;
      let found = true;
      while (i < haystack.length && index < needle.length) {
        if (haystack[i] === needle[index] || needle[index] === "_") {
          i++;
          index++;
        } else {
          found = false;
          i = save;
          start = -1;
          break;
        }
      }
      if (found) return start;
    }
  }
  return start;
}

// _lexe googgoogleggggoooglxeplexhexflexmexkex
// N: -..,.44$&%$--,., H: -..,.44$&%$--,.,
// let haystack = "Once upon a midnight dreary, while I pondered, weak and weary";
// let haystack = "googgoogleggggoooglxeplexhexflexmexkex";
let haystack = "-..,.44$&%$--,.,";
let result = find("-..,.44$&%$--,.,", haystack);
console.log(result);
