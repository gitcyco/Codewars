// 6 kyu SHA-256 Cracker
//
// This kata aims to show the vulnerabilities of hashing functions for short messages.
//
// When provided with a SHA-256 hash, return the value that was hashed. You are also given the characters that make the expected value, but in alphabetical order.
//
// The returned value is less than 10 characters long.
// Return nil for Ruby and Crystal, None for Python, null for Java and Javascript when the hash cannot be cracked with the given characters.
// Example:
//
// Example arguments: '5694d08a2e53ffcae0c3103e5ad6f6076abd960eb1f8a56577040bc1028f702b', 'cdeo'
// Correct output: 'code'
//
// Answer:
function sha256Cracker(h, chars) {
  const crypto = require("crypto");
  let a = chars.split("");
  let all = perm(a);
  let res = all.filter((e) => {
    if (crypto.createHash("sha256").update(e.join("")).digest("hex") == h) return true;
  });
  if (res.length > 0) return res[0].join("");

  return null;
}

function perm(arr) {
  if (!arr.length) return [[]];
  return arr.flatMap((e, i) => perm(arr.filter((_, j) => i !== j)).map((va) => [e, ...va]));
}
