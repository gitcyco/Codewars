// 6 kyu Basic Compression
//
// First, You will write a very basic compression algorithm
//
// It gets a string:
// string="aaaaaaaabaaaa"
// And generates an array that sums all the repeating characters like so:
// compressed=[[8,"a"],[1,"b"],[4,"a"]]
// The compressed version is turned into a string:
// compressed='[[8,"a"],[1,"b"],[4,"a"]]'
//
// Finally,
// If the compressed version is shorter than the original string, the function will return the compressed version.
// Otherwise it will return the original string.
//
// Example1:
// string1="aaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaa"
// output1='[[26,"a"],[1,"b"],[18,"a"]]'
//
// Example2:
// string2="abcde"
// output2="abcde"
//
// After you created the compression algorithm, create a decompression algorithm:
//
// It gets a string (output1, output2, etc.).
// If the string is comrpessed, it returns the uncompressed version,
// If it is uncompressed, it returns the original string unchanged.
//
// //output1='[[26,"a"],[1,"b"],[18,"a"]]'
// uncompress(output1)
// //returns
// "aaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaa"
//
// //output2="abcde"
// uncompress(output2)
// //returns
// "abcde"
//
// Note: The original string may not contain "[]" for obvious reasons.
//
// Answer:
const compress = (str) => {
  let arr = str.match(/(.)\1*/gi);
  let zip = JSON.stringify(arr.map((e) => [e.length, e[0]]));
  return str.length > zip.length ? zip : str;
};

const decompress = (c) => {
  try {
    return JSON.parse(c).reduce((a, e) => (a += e[1].repeat(e[0])), "");
  } catch (err) {
    return typeof c === "string" ? c : null;
  }
};
