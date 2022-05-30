// 6 kyu Simple Encryption #1 - Alternating Split
//
// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed 
// characters of S with all the even-indexed characters of S, this process should be repeated N times.
// 
// Examples:
// 
// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"
// 
// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
// 
// Together with the encryption function, you should also implement a decryption function which reverses the process.
// 
// If the string S is an empty value or the integer N is not positive, return the first argument without changes.

// Answer:
function encrypt(text, n) {
  if(!text) return text;
  while(n > 0) {
    let even = '';
    let odd = '';
    n--;
    for(let i = 0; i < text.length; i++) {
      if(i%2) odd += text[i];
      else even += text[i];
    }
    text = odd+even;
  }
  return text;
}

function decrypt(enc, n) {
  if(!enc) return enc;
  while(n > 0) {
    let ce = co = 0;
    let dec = '';
    let even = enc.length % 2 ? enc.slice(e(enc) - 1) : enc.slice(e(enc));
    let odd = enc.slice(0,o(enc));;
    n--;
    for(let i = 0; i < enc.length; i++) {
      if(i%2) dec+=odd[co++];
      else dec+=even[ce++];
    }
    enc = dec;
  }
  return enc;
}

const e = s => Math.ceil((s.length) / 2);
const o = s => Math.floor((s.length) / 2);
