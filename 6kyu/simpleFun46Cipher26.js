// 6 kyu Simple Fun #46: Cipher26
//
// You've intercepted an encrypted message, and you are really curious about its contents.
// You were able to find out that the message initially contained only lowercase English letters, and was encrypted with the following cipher:
//
// Let all letters from 'a' to 'z' correspond to the numbers from 0 to 25, respectively.
//
// The number corresponding to the ith letter of the encrypted message is then equal to the sum
// of numbers corresponding to the first i letters of the initial unencrypted message modulo 26.
//
// Now that you know how the message was encrypted, implement the algorithm to decipher it.
// Example
//
// For message = "taiaiaertkixquxjnfxxdh",
//
// the output should be "thisisencryptedmessage".
//
// The initial message "thisisencryptedmessage" was encrypted as follows:
//
// letter 0: t -> 19 -> t;
// letter 1: th -> (19 + 7) % 26 -> 0 -> a;
// letter 2: thi -> (19 + 7 + 8) % 26 -> 8 -> i;
// etc.
//
// Input/Output
//
//     [input] string message
//
//     An encrypted string containing only lowercase English letters.
//
//     Constraints: 1 ≤ message.length ≤ 200.
//
//     [output] a string
//
//     A decrypted message.
//
// Answer:
function cipher26(msg) {
  if (msg.length < 2) return msg;
  const key = "abcdefghijklmnopqrstuvwxyz";
  const max = key.length;
  let cur = key.indexOf(msg[0]);
  let str = msg[0];
  for (let i = 1; i < msg.length; i++) {
    const val = key.indexOf(msg[i]);
    const next = (max + val - cur) % max;
    str += key[next];
    cur = (cur + next) % max;
  }
  return str;
}
