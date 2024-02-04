// 6 kyu GA-DE-RY-PO-LU-KI cypher vol 2
//
// The GADERYPOLUKI is a simple substitution cypher used in scouting to encrypt messages.
// The encryption is based on short, easy to remember key.
// The key is written as paired letters, which are in the cipher simple replacement.
//
// The most frequently used key is "GA-DE-RY-PO-LU-KI".
//
//  G => A
//  g => a
//  a => g
//  A => G
//  D => E
//   etc.
//
// The letters, which are not on the list of substitutes, stays in the encrypted text without changes.
//
// Other keys often used by Scouts:
//
// PO-LI-TY-KA-RE-NU
// KA-CE-MI-NU-TO-WY
// KO-NI-EC-MA-TU-RY
// ZA-RE-WY-BU-HO-KI
// BA-WO-LE-TY-KI-JU
// RE-GU-LA-MI-NO-WY
//
// Task
//
// Your task is to help scouts to encrypt and decrypt thier messages. Write the Encode and Decode functions.
// Input/Output
//
// The function should have two parameters.
// The message input string consists of lowercase and uperrcase characters and whitespace character.
// The key input string consists of only lowercase characters.
// The substitution has to be case-sensitive.
// Example
//
//  encode("ABCD", "agedyropulik");             // => GBCE
//  encode("Ala has a cat", "gaderypoluki");    // => Gug hgs g cgt
//  decode("Dkucr pu yhr ykbir","politykarenu") // => Dance on the table
//  decode("Hmdr nge brres","regulaminowy")  // => Hide our beers
//
// Answer:
function encode(str, key = "GADERYPOLUKI") {
  const keymap = getKeyMap(key);
  return str.replace(/[A-Z]/gi, (e) => (e in keymap ? keymap[e] : e));
}

const decode = encode;

function getKeyMap(key) {
  const keymap = key.match(/[A-Z]./gi).reduce((a, e) => {
    let upper = e.toUpperCase().split("");
    let lower = e.toLowerCase().split("");
    a[upper[0]] = upper[1];
    a[upper[1]] = upper[0];
    a[lower[0]] = lower[1];
    a[lower[1]] = lower[0];
    return a;
  }, {});
  return keymap;
}
