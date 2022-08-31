// 5 kyu The Hashtag Generator
//
// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!
//
// Here's the deal:
//
//     It must start with a hashtag (#).
//     All words must have their first letter capitalized.
//     If the final result is longer than 140 chars it must return false.
//     If the input or the result is an empty string it must return false.
//
// Examples
//
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false
//
// Answer:
function generateHashtag(str) {
  if (!(str = str.trim().replace(/\s+/g, " "))) return false;
  if (str[0] === "#") str = str.splice(1);
  str =
    "#" +
    str
      .split(" ")
      .map((e) => cap(e))
      .join("");
  return str.length > 140 ? false : str;
}

const cap = (s) => (s = s[0].toUpperCase() + s.slice(1));
