// 7 kyu Validate the Hash
//
// A file's hash value is essentially a string of numbers and letters
// of fixed length, that functions as a cryptographic fingerprint for that file.
//
// File hashes are commonly used in cyber security to identify different strains
// of malware, with a unique hash value corresponding to each malware file.
//
// Your junior analyst has just sent you a list of new malware hashes, but you know
// he has made mistakes entering them.
// Write a function to validate the array of hash values.
//
// In this scenario, a valid hash value consists of five numbers and five lowercase letters in any order.
//
// Return an array of valid hash values, and eliminate any duplicates.
//
// Answer:
function malwareValidate(hashArr) {
  return [...new Set(hashArr)].filter((h) => {
    if (h.length !== 10) return false;
    if ((h.match(/\d/g) || []).length !== 5) return false;
    if ((h.match(/[a-z]/g) || []).length !== 5) return false;
    return true;
  });
}
