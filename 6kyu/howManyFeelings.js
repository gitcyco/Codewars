// 6 kyu How many feelings?
//
// Output
//
// You have two arguments: string - a string of random letters(only lowercase) and array - an array of strings(feelings).
// Your task is to return how many specific feelings are in the array.
//
// For example:
//
// string -> 'yliausoenvjw'
// array -> ['anger', 'awe', 'joy', 'love', 'grief']
// output -> '3 feelings.' // 'awe', 'joy', 'love'
//
//
// string -> 'griefgriefgrief'
// array -> ['anger', 'awe', 'joy', 'love', 'grief']
// output -> '1 feeling.' // 'grief'
//
//
// string -> 'abcdkasdfvkadf'
// array -> ['desire', 'joy', 'shame', 'longing', 'fear']
// output -> '0 feelings.'
//
// If the feeling can be formed once - plus one to the answer.
//
// If the feeling can be formed several times from different letters - plus one to the answer.
//
// Eeach letter in string participates in the formation of all feelings. 'angerw' -> 2 feelings: 'anger' and 'awe'.
//
// Answer:
function countFeelings(string, array) {
  const sCounts = count(string);
  const fCounts = array.map((str) => count(str));
  let total = 0;
  for (let item of fCounts) {
    let found = true;
    for (let key of Object.keys(item)) {
      if (!sCounts[key]) {
        found = false;
        break;
      }
    }
    if (found) total++;
  }
  return `${total} feeling${total === 1 ? "." : "s."}`;
}

const count = (str) =>
  [...str].reduce((obj, c) => (c in obj ? obj[c]++ : (obj[c] = 1), obj), {});
