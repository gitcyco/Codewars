// 6 kyu Reverse Vowels In A String
//
// In this kata, your goal is to write a function which will reverse the vowels in a string.
// Any characters which are not vowels should remain in their original position. Here are some examples:
//
// "Hello!" => "Holle!"
// "Tomatoes" => "Temotaos"
// "Reverse Vowels In A String" => "RivArsI Vewols en e Streng"
//
// For simplicity, you can treat the letter y as a consonant, not a vowel.
//
// Answer:
function reverseVowels(str) {
  let vowels = str.match(/[aeiou]/gi);
  let newStr = "";
  for (let c of str) {
    if (/[aeiou]/i.test(c)) newStr += vowels.pop();
    else newStr += c;
  }
  return newStr;
}
