// 6 kyu Keyword Cipher Helper
//
// A keyword cipher is a monoalphabetic cipher which uses a "keyword" to provide encryption. It is somewhat similar to a Caesar cipher.
//
// In a keyword cipher, repeats of letters in the keyword are removed and the alphabet is reordered
// such that the letters in the keyword appear first, followed by the rest of the letters in the alphabet in their otherwise usual order.
//
// E.g. for an uppercase latin alphabet with keyword of "KEYWORD":
//
// A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z
//
// becomes:
//
// K|E|Y|W|O|R|D|A|B|C|F|G|H|I|J|L|M|N|P|Q|S|T|U|V|X|Z
//
// such that:
//
// cipher.encode('ABCHIJ') == 'KEYABC'
// cipher.decode('KEYABC') == 'ABCHIJ'
//
// All letters in the keyword will also be in the alphabet. For the purpose of this kata, only the first
// occurence of a letter in a keyword should be used.
// Any characters not provided in the alphabet should be left in situ when encoding or decoding.
//
// Answer:
class KeywordCipher {
  constructor(abc, key) {
    this.abc = abc;
    this.keySet = [...new Set(key + abc)];
  }
  encode(str) {
    return str.replace(/[a-z]/gi, (e) => (this.keySet.includes(e) ? this.keySet[this.abc.indexOf(e)] : e));
  }
  decode(str) {
    return str.replace(/[a-z]/gi, (e) => (this.abc.includes(e) ? this.abc[this.keySet.indexOf(e)] : e));
  }
}
