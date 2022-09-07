// 6 kyu Decipher this!
//
// You are given a secret message you need to decipher. Here are the things you need to know to decipher it:
//
// For each word:
//
//     the second and the last letter is switched (e.g. Hello becomes Holle)
//     the first letter is replaced by its character code (e.g. H becomes 72)
//
// Note: there are no special characters used, only letters and spaces
//
// Examples
//
// decipherThis('72olle 103doo 100ya'); // 'Hello good day'
// decipherThis('82yade 115te 103o'); // 'Ready set go'
//
// Answer:
function decipherThis(str) {
  let arr = str.split(" ").map((e) => e.replace(/^[0-9]+/g, (r) => String.fromCharCode(+r)));
  return arr
    .map((e) => e.split(""))
    .map((a) => (a.length > 2 ? (([a[1], a[a.length - 1]] = [a[a.length - 1], a[1]]), a) : a))
    .map((v) => v.join(""))
    .join(" ");
}
