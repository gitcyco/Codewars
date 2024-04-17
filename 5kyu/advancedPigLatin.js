// 5 kyu Advanced Pig Latin
//
// Pig latin is created by taking all the consonants before the first vowel of a word and moving
// them to the back of the word followed by the letters "ay".
//
// "hello" => "ellohay"
// "creating" => "eatingcray"
//
// If the first letter of the word is a vowel, the string is left the same and the letters "way" are appended to the end.
//
// "algorithm" => "algorithmway"
//
// This problem is different from other variations in that it expects casing to remain the same so:
//
// "Hello World" => "Ellohay Orldway"
//
// as well as punctuation.
//
// "Pizza? Yes please!" => "Izzapay? Esyay easeplay!"
//
// Your job is to take a string and translate it to Pig Latin.
// The string will never be undefined but may contain both numbers and letters.
// A word will never be a combination of numbers and letters.
// Also, there will never be punctuation at the beginning of a word and the only
// capital letter in a word will be the first letter meaning there are zero all capitalized words.
//
// Answer:
function translate(sentence) {
  return sentence.replace(/\w+/gi, (r) => {
    let lower = r.toLowerCase();
    if (/^[^aeiou]/i.test(r[0])) {
      let cons = lower.match(/^[^aeiou]+/)[0];
      lower = lower.replace(cons, "") + cons + "ay";
    } else {
      lower = lower + "way";
    }
    if (isUpper(r[0])) return lower[0].toUpperCase() + lower.slice(1);
    return lower;
  });
}

const isUpper = (s) => s.toUpperCase() === s;
