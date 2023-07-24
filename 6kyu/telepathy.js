// 6 kyu Telepathy
//
// Telepathy:
//
//    This is a simple magic trick.
//
//    I find it fascinating after watching this magic trick.
//
//    Here's how the trick goes:
//
//    Firstly, the magician has 6 cards in hand.
//
//    Then, the magician asks you to choose a number between 0 and 60 and remember it.
//
//    After that, the magician tells you to say "Yes" when you see your chosen number among the cards, otherwise say "No".
//
//    Finally, the magician, after listening to all your answers, can sense the number you remembered and reveal it.
//
// Task:
//
//    Your task is to play the role of the magician.
//
//    I will give you a string representing the audience's answers.
//
//    You need to guess the number chosen by the audience.
//
// "| Card 1: Yes | Card 2: Yes | Card 3: Yes | Card 4: Yes | Card 5: No | Card 6: Yes |" -> 47
//
// Only 1 line of code and 105 characters of code can be used.
//
// We welcome all codewarriors to leave comments on areas they would like to improve or maintain.
//
// --Good luck codewarrior--
//
// Answer:
//
// Unformatted answer:
// let magicShow=ans=>parseInt(ans.match(/Y|N/g).map(e=>e=='Y'?1:0).reverse().join(''),2)

let magicShow = (ans) =>
  parseInt(
    ans
      .match(/Y|N/g)
      .map((e) => (e == "Y" ? 1 : 0))
      .reverse()
      .join(""),
    2
  );
