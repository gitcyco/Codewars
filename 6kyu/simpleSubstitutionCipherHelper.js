// 6 kyu Simple Substitution Cipher Helper
//
// A simple substitution cipher replaces one character from an alphabet with a character
// from an alternate alphabet, where each character's position in an alphabet is mapped to the alternate alphabet for encoding or decoding.
//
// E.g.
//
// var abc1 = "abcdefghijklmnopqrstuvwxyz";
// var abc2 = "etaoinshrdlucmfwypvbgkjqxz";
//
// var sub = new SubstitutionCipher(abc1, abc2);
// sub.encode("abc") // => "eta"
// sub.encode("xyz") // => "qxz"
// sub.encode("aeiou") // => "eirfg"
//
// sub.decode("eta") // => "abc"
// sub.decode("qxz") // => "xyz"
// sub.decode("eirfg") // => "aeiou"
//
// If a character provided is not in the opposing alphabet, simply leave it as be.
//
// Answer:
class SubstitutionCipher {
  constructor(alpha1, alpha2) {
    this.abc1 = alpha1;
    this.abc2 = alpha2;
    this.map1 = [...alpha1].reduce((a, e, i) => ((a[e] = i), a), {});
    this.map2 = [...alpha2].reduce((a, e, i) => ((a[e] = i), a), {});
  }
  encode(str) {
    let out = "";
    for (let c of str) {
      out += c in this.map1 ? this.abc2[this.map1[c]] : c;
    }
    return out;
  }
  decode(str) {
    let out = "";
    for (let c of str) {
      out += c in this.map2 ? this.abc1[this.map2[c]] : c;
    }
    return out;
  }
}
