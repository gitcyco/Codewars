// 5 kyu Caesar Cipher Helper
//
// Write a class that, when given a string, will return an uppercase string with each letter
// shifted forward in the alphabet by however many spots the cipher was initialized to.
//
// For example:
//
// var c = new CaesarCipher(5); // creates a CipherHelper with a shift of five
// c.encode('Codewars'); // returns 'HTIJBFWX'
// c.decode('BFKKQJX'); // returns 'WAFFLES'
//
// If something in the string is not in the alphabet (e.g. punctuation, spaces), simply leave it as is.
// The shift will always be in range of [1, 26].
//
// Answer:
class CaesarCipher {
  constructor(shift) {
    this.shift = shift;
  }
  encode(str) {
    return this.rotX(str.toUpperCase(), this.shift);
  }
  decode(str) {
    return this.rotX(str.toUpperCase(), -this.shift);
  }
  rotX(str, x) {
    return str.replace(/[a-z]/gi, (e) =>
      String.fromCharCode(
        (((x < 0 ? 26 : 0) +
          e.charCodeAt(0) -
          this.offset(e) +
          (x < 0 ? x % 26 : x)) %
          26) +
          this.offset(e)
      )
    );
  }
  offset(s) {
    return s.toUpperCase() === s ? 65 : 97;
  }
}
