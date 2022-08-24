// 5 kyu Simple Hash
//
// Quick and Dirty Explanation:
//
// If you don't want to read the entire novel below, here is a quick explanation of what we're trying to accomplish.
// Write the function simpleHash(word, salt, iterations) {...} so that the passed in word gets salted, and then hashed x number of times, where x = iterations.
//
// The salt should be added to the word by alternating each letter of the word, then the salt, in the order: word[0] + salt[0] + word[1] + salt[1] + etc until
// all letters of both the word and the salt have been used. If the word is longer than the salt, then once the salt runs out of letters, just continue
// adding letters from the word, and vice versa if the salt is longer.
// The salt should only be added to the original word on the first iteration, subsequent iterations should just hash the hash
// from the previous iteration without salting them again
//
// Hashing is done by summing the ASCII character codes (decimal) to get a new character code.
// If the sum is larger than the range of printable character codes (32-127), then wrap back around until you find a valid character code.
// For example, a sum of 128 would use characterCode 32, which gives us the character " " and a sum of 129 would use characterCode of 33 which gives us the character "!", etc.
//
//     So hash[i] will be the character equal to the characterCode of the sum of wordSaltCombo[i] + wordSaltCombo[i+1].
//     The last character of wordSaltCombo will be summed with the first character to get the last character of the hash.
// See the detailed explanation and/or the full example below for clarification if needed
//
// Once all iterations of the hash have been performed, base64Encode the final hash and return that value
//
// NOTES:
//
//     All test inputs will be valid: word will be a valid string with length > 1, salt will be a valid string with length > 1, iterations will be a valid integer > 0
//
// General Info:
// What is a hash?
//
// A hash is a one way encryption technique that gives us a unique output for different words.
// But how can an algorithm only be one way? How can you encrypt something without being able to decrypt it back if you know the algorithm?
// Real-life, cryptographically secure hash algorithms are incredibly complex, at least more complex than I care to read about, so this
// is a simple version that illustrates how you can perform a one way encryption that can't be decrypted!
// What is a salt?
//
// A salt is a random string that is added to the word you want to hash before you begin hashing it.
// This randomizes things so that the original word doesn't always hash to the same string.
// If it did, it makes it too easy for hackers to learn what a word hashes to, which ruins the purpose of hashing.
// Using a salt randomizes things a bit! Hashing the word 'password' with 2 different salts will give you 2 different outcomes.
// Instructions for this kata
// Using character codes to hash a string
//
// Each printable character on the keyboared has an ASCII character code. In decimal format, the character codes for printable characters range from 32-127.
// https://www.ascii-code.com/ gives an example of a table that lists the character codes for those characters.
// Imagine taking any 2 characters and adding their character codes together to get a new number.
//
//     For instance, Uppercase A (65) and lowercase t (116) when added together equals 181 if my math is correct (and it always is. movie reference anyone?).
// Now if we can use that number 181 to generate a new character, that is irreversible, or undecryptable, in the sense that those
// are not the only 2 characters that could be summed to equal 181. Uppercase B (66) and lowercase s (115) also sum to 181.
// Uppercase C (67) and lowercase r (114) do as well, etc.
//
// So with our new character, we don't know what original 2 characters were used to give us this new character.
//
// How do we generate a new character from 181? Well, imagine that the prinatable character codes are arranged
// in a circle so that after you pass 127 you come back around to 32, 33, 34, etc. so 181 would be 54 characters
// past 127 (181 - 127 = 54), so starting back at 32, we would count out 54 characters and end up at the characterCode 85, which is an Uppercase "U"
// How to implement the salt
//
// For this kata, adding the salt to the original word will be done by alternating every other
// letter of the word, then the salt, in the format word[0]+salt[0]+word[1]+salt[1]+etc.
// The salt will only be added to the original word before hashing begins, and will not be added to previous hashes during subsequent iterations. For example:
//
//     for simpleHash('word', 'salt') the combination would be 'wsoarldt'
//     for simpleHash('hello world', 'salty') the combination would be 'hseallltoy world'
//     for simpleHash('hi', 'j3ue89s') the combination would be 'hji3ue89s'.
//
// Number of iterations
//
// In this kata, the number of iterations will indicate how many times you should run the word through the hash algorithm.
// So iterations 1 would mean you hash the word+salt combination one time.
// Iterations 2 would mean that you hash the word+salt combination, then hash that hash..
// This continues until iterationsPerformed is equal to iterationsRequested.
//
//     hash1 = hash(word+salt), hash2 = hash(hash1), hash3 = hash(hash2), etc
//
// The hashing algorithm
//
// The hashing algorithm itself will build on the principle we discussed above.
// We will sum up the character codes of char0 & char1 of the word+salt combo, and that will give us the character code for char0 for the hash.
// Sum up char1 & char2 and we get char1 for the hash.
// The very last character of the word+salt combo will be summed with the first character of the word+salt combo to give us the last character of the hash.
// On your second iteration, you would sum up char0 & char1 of hash1 to get char0 for hash2
//
//     see examples below for additional clarification if needed.
//
// Base64 encode the final hash
//
// The final thing we want to do is base64 encode the result of our final hash. So if iterations === 3, we would return base64Encode(hash3).
// This just makes the result look pretty and avoids any funky characters to make it nice to store in a DB or pass in a network call, etc
//
// Answer:
function simpleHash(word, salt, iter) {
  let cb = "";
  if (word.length >= salt.length) {
    for (let i = 0; i < word.length; i++) {
      cb += word[i];
      cb += salt[i] ? salt[i] : "";
    }
  } else {
    for (let i = 0; i < salt.length; i++) {
      cb += word[i] ? word[i] : "";
      cb += salt[i];
    }
  }
  for (let i = 0; i < iter; i++) cb = hash(cb);
  const buff = Buffer.from(cb, "utf-8");
  const base64 = buff.toString("base64");
  return base64;
}

const hash = (s) => {
  let code = 0;
  let out = "";
  for (let i = 0; i < s.length; i++) {
    code = i == s.length - 1 ? s.charCodeAt(i) + s.charCodeAt(0) : s.charCodeAt(i) + s.charCodeAt(i + 1);
    out += String.fromCharCode(((code - 32) % 96) + 32);
  }
  return out;
};
