// 5 kyu Word Finder
//
// In this kata you have to extend the dictionary with a method, that returns a list of words matching a pattern.
// This pattern may contain letters (lowercase) and placeholders ("?"). A placeholder stands for exactly one arbitrary letter.
//
// Example:
//
// var fruits = new Dictionary(['banana', 'apple', 'papaya', 'cherry']);
// fruits.getMatchingWords('lemon');     // must return []
// fruits.getMatchingWords('cherr??');   // must return []
// fruits.getMatchingWords('?a?a?a');    // must return ['banana', 'papaya']
// fruits.getMatchingWords('??????');    // must return ['banana', 'papaya', 'cherry']
//
// Additional Notes:
//
//     the words and patterns are all lowercase
//     the order of the returned words doesn't matter
//
// Answer:
class Dictionary {
  constructor(words) {
    this.words = words;
  }
  getMatchingWords(pattern) {
    let re = new RegExp(`^${pattern.replace(/\?/gi, ".")}$`);
    return this.words.filter((e) => re.test(e));
  }
}
