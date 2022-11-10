// 6 kyu Crushing blows and blushing crows
//
// A spoonerism is an error in speech where the initial sounds of two words are swapped.
// The name comes from William Archibald Spooner who was famous for these slip ups.
//
// Some spoonerisms work by simply swapping the first two letters of the words.
//
//     E.g.   *"dental   receptionist"*     becomes    *"rental deceptionist"*
//
// Others, involving words beginning with several consonants are a bit more complex. To make them work we have to swap all consonants up to the first vowel.
//
//     E.g.    *"strong   wrangler"*    to    *"wtrong   srangler"*    does not work
//
//     but    *"strong   wrangler"*    to    *"wrong   strangler"*    does
//
// Sadly these mistakes often don't translate to text very well, as it's more about the sounds than the spelling
// but i've managed to find a few silly ones for you. There are a few more examples in the test section to help you.
//
// Your code should be able to:
//
//     spoonerise a string of two words
//     spoonerise the first and last words in a string of three words
//     return "No spoons here" for strings smaller than two or larger than three words
//     all words will start with a consonant and contain at least one vowel (Note that a 'y' is considered a consonant for this kata)
//
// Answer:
function spoonerise(str) {
  let arr = str.split(" ");
  let re = /^[^aeiou]+(?=[aeiou])/i;
  if (!str || arr.length < 2 || arr.length > 3) return "No spoons here";
  let s1 = arr[0].match(re)[0];
  let s2 = arr[arr.length - 1].match(re)[0];
  arr[0] = arr[0].replace(re, s2);
  arr[arr.length - 1] = arr[arr.length - 1].replace(re, s1);
  return arr.join(" ");
}
