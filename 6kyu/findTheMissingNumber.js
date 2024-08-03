// 6 kyu Find the missed number
//
// In this kata, you will be given a string containing numbers from a to b, one number can be
// missing from these numbers, then the string will be shuffled, you're expected to return an array of all possible missing numbers.
// Examples (input => output)
//
// Here's a string with numbers from 1 - 21, its missing one number and the string
// is then shuffled, your'e expected to return a list of possible missing numbers.
//
// 1, 21, "2198765123416171890101112131415"  => [ 12, 21 ]
//
// You won't be able to tell if its 21 or 12, you must return all possible values in an array.
// Another Example
//
// 5, 10, "578910" => [ 6 ]
//
// Documentation:
//
// The parameters will be in order two numbers and a string:
//
//     start => from
//     stop => to
//     string => numbers from start to stop in string form (shuffled), but missing one number
//
// Note:
//
//     if there're no missing numbers return an empty list
//
// Answer:
function findNumber(start, stop, string) {
  let model = "";
  for (let s = start; s <= stop; s++) {
    model += s.toString();
  }
  let sIn = [...string].sort((a, b) => +a - +b).join("");
  let sModel = [...model].sort((a, b) => +a - +b).join("");
  let missing = [];
  let index = 0;
  for (let i = 0; i < sModel.length; i++) {
    while (sModel[i] !== sIn[index]) {
      missing.push(+sModel[i]);
      i++;
    }
    index++;
  }
  let perms = permutator(missing).map((e) => e.join(""));
  perms = perms.filter(
    (e) => (+e).toString().length === e.length && +e >= start && +e <= stop
  );
  return [...new Set(perms)].map(Number);
}

const permutator = (inputArr) => {
  let result = [];
  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      result.push(m);
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next));
      }
    }
  };
  permute(inputArr);
  return result;
};
