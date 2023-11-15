// 6 kyu Reverse FizzBuzz
//
// FizzBuzz is often one of the first programming puzzles people learn. Now undo it with reverse FizzBuzz!
//
// Write a function that accepts a string, which will always be a valid section of FizzBuzz.
// Your function must return an array that contains the numbers in order to generate the given section of FizzBuzz.
//
// Notes:
//
//     If the sequence can appear multiple times within FizzBuzz, return the numbers that generate the first instance of that sequence.
//     All numbers in the sequence will be greater than zero.
//     You will never receive an empty sequence.
//
// Examples
//
// reverse_fizzbuzz("1 2 Fizz 4 Buzz")        -->  [1, 2, 3, 4, 5]
// reverse_fizzbuzz("Fizz 688 689 FizzBuzz")  -->  [687, 688, 689, 690]
// reverse_fizzbuzz("Fizz Buzz")              -->  [9, 10]
//
// Answer:
function reverseFizzBuzz(s) {
  const arr = s.split(" ");
  const len = arr.length;
  const out = [];
  let numIdx = arr.findIndex((e) => /[\d]+/.test(e));
  if (numIdx >= 0) {
    let start = +arr[numIdx] - numIdx;
    for (let i = 0; i < len; i++) out.push(start + i);
    return out;
  }
  const gFB = genFB();
  let idx = 0;
  while (true) {
    let [num, str] = gFB.next().value;
    let found = false;
    if (arr[idx] == str) {
      found = true;
      for (let i = 1; i < len; i++) {
        [_, str] = gFB.next().value;
        if (arr[i] != str) {
          found = false;
          break;
        }
      }
      if (found) {
        for (let i = 0; i < len; i++) out.push(num + i);
        return out;
      }
    }
  }
  return [];
}

// Using a generator to facilitate brute forcing the fizzbuzz pattern match
// because why not?
function* genFB() {
  let start = 1;
  while (true) {
    if (start % 3 === 0 && start % 5 === 0) yield [start, "FizzBuzz"];
    else if (start % 3 === 0) yield [start, "Fizz"];
    else if (start % 5 === 0) yield [start, "Buzz"];
    else yield [start, start];
    start++;
  }
}
