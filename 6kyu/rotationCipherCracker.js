// 6 kyu Rotation Cipher Cracker
//
// Rotation ciphers are very vulnerable to brute force attacks. There are only 25 possible ways to decrypt the message.
//
// Example Encoded Message:ymjxvznwwjqnxhzyj
//
// Possible Decoded Messages:
//
// znkywaoxxkroyiazk, aolzxbpyylspzjbal, bpmaycqzzmtqakcbm,
// cqnbzdraanurbldcn, drocaesbbovscmedo, espdbftccpwtdnfep,
// ftqecguddqxueogfq, gurfdhveeryvfphgr, hvsgeiwffszwgqihs,
// iwthfjxggtaxhrjit, jxuigkyhhubyiskju, kyvjhlziivczjtlkv,
// lzwkimajjwdakumlw, maxljnbkkxeblvnmx, nbymkocllyfcmwony,
// ocznlpdmmzgdnxpoz, pdaomqennaheoyqpa, qebpnrfoobifpzrqb,
// rfcqosgppcjgqasrc, sgdrpthqqdkhrbtsd, thesquirreliscute,
// uiftrvjssfmjtdvuf, vjguswkttgnkuewvg, wkhvtxluuholvfxwh,
// xliwuymvvipmwgyxi
//
// If you scan through the list you will see only a few that contain an english word longer than two characters.
// thesquirreliscute is the only one that could be completely seperated into english words to form the message "the squirrel is cute".
//
// Your job for this kata is to make a function that will give all possible decoded messages given the encoded message and suspected contents.
//
// UPDATE: the original unshifted alphabet should also be tested for, making it a total of 26 possible ways to decrypt the message.
// Returned results are to be sorted as well. See last line below for an example:
//
// decode('ymjxvznwwjqnxhzyj','squirrel') // returns ['thesquirreliscute']
// decode('lzwespnsdmwakafxafalq','max')  // returns ['maxftqotenxblbgybgbmr', 'themaxvalueisinfinity']
// decode('pumy','um')  // returns ['pumy']
//
// Answer:
function decode(msg, contents) {
  const res = [];
  for (let i = 0; i < 26; i++) {
    let s = rotX(msg, i);
    if (s.includes(contents)) res.push(s);
  }
  return res.sort((a, b) => (a > b ? 1 : -1));
}

const rotX = (str, x) =>
  str.replace(/[a-z]/gi, (e) =>
    String.fromCharCode((((x < 0 ? 26 : 0) + e.charCodeAt(0) - offset(e) + (x < 0 ? x % 26 : x)) % 26) + offset(e))
  );
const offset = (s) => (s.toUpperCase() === s ? 65 : 97);
