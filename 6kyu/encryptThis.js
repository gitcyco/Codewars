// 6 kyu Encrypt this!
//
// Encrypt this!
//
// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:
//
//     Your message is a string containing space separated words.
//     You need to encrypt each word in the message using the following rules:
//         The first letter must be converted to its ASCII code.
//         The second letter must be switched with the last letter
//     Keepin' it simple: There are no special characters in the input.
//
// Examples:
//
// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"
//
// Answer:
const encryptThis = (str) => {
  let arr = str
    .split(" ")
    .map((e) => e.split(""))
    .map((a) => (a.length > 2 ? (([a[1], a[a.length - 1]] = [a[a.length - 1], a[1]]), a) : a));
  arr = arr.map((e) => [e[0].charCodeAt(0), ...e.slice(1)].join(""));
  return arr.join(" ");
};
