// 5 kyu ROT13
//
// How can you tell an extrovert from an introvert at NSA? Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.
//
// I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it?
// According to Wikipedia, ROT13 (http://en.wikipedia.org/wiki/ROT13) is frequently used to obfuscate jokes on USENET.
//
// Hint: For this task you're only supposed to substitue characters. Not spaces, punctuation, numbers etc.
//
// Test examples:
//
// "EBG13 rknzcyr." -->
// "ROT13 example."
//
// "This is my first ROT13 excercise!" -->
// "Guvf vf zl svefg EBG13 rkprepvfr!"
//
// Answer:
function rot13(str) {
  let offset = 0;
  return str.replace(/[a-z]/gi, (e) => {
    offset = e.toLowerCase() === e ? 97 : 65;
    return String.fromCharCode(((e.charCodeAt(0) - offset + 13) % 26) + offset);
  });
}
