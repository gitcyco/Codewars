// 5 kyu Cheating a bit...
//
// So, there is this game where you manage several soldiers, and you're losing against the machine.
//
// What can you do? Easy: patch the savegame file to restore your soldier's health!
// Details
//
// Each soldier has the following structure:
//
//     name_length: 16 bit integer, little endian
//     name: string of 8 bit characters
//     health: 16 bit integer, little endian
//
// Example: "\x0C\x00Maximilianus\x04\x00"
//
// The binary string is randomly generated each time, so don't try to hard-code things in your code.
// The job
//
// Your job is to code a function that will receive a string of consecutive binary data
// (the file contents) representing a random number of soldiers
// (a minimum of 2 are always present), and return it patched, setting each soldier's health to 500 points.
//
// Soldiers can be arranged in the output string in any order.
//
// The tests will check if the returned string is correctly formed
// (not empty and such) and that each soldier has 500 health points.
//
// Answer:
function patchData(str) {
  let newHealth = "\xf4\x01"; // 500 little endian
  let idx = 0;
  let result = "";
  while (idx < str.length) {
    let lenStr = str.slice(idx, idx + 2);
    let nameLen = parseInt(getBits(str[idx + 1]) + getBits(str[idx]), 2);
    idx += 2;
    let name = "";
    for (let i = 0; i < nameLen; i++) {
      name += str[idx + i];
    }
    idx += nameLen + 2;
    result += lenStr + name + newHealth;
  }
  return result;
}

function getBits(char) {
  return parseInt(char.charCodeAt(0)).toString(2).padStart(8, 0);
}
