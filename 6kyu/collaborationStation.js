// 6 kyu Collaboration Station
//
// You have a secret message for your friends.
// You want to mail it to them.
// But, you are well aware that each of their mail carriers reads their mail before delivering it.
// So, instead of sending the entire message, you only send some characters to each of them.
//
// If you have n friends, friend 1 gets character 1, n + 1, 2n + 1, etc.
// And friend 2 gets character 2, n + 2, 2n + 2, etc. All other characters are replaced with dashes.
//
// Example:  3 friends, message: I think you are all sexy
// Friend 1 receives: I--h--k--o--a-- --l--e--
// Friend 2 receives: - --i-- --u--r--a-- --x-
// Friend 3 receives: --t--n--y-- --e--l--s--y
//
// Treat null messages as empty strings (C#, JavaScript).
// If your number of friends is greater than the length of your message, some friends will simply receive all dashes.
// If you have zero friends (or less than zero), return null (empty vector for C++);
//
// Answer:
const splitMessage = (msg, count) => {
  if (count < 1) return null;
  if (!msg) return new Array(count).fill("");
  const out = new Array(count)
    .fill(0)
    .map((e) => new Array(msg.length).fill("-"));
  for (let i = 0; i < msg.length; i++) {
    for (let n = 1; n <= count; n++) {
      let idx = n - 1 + count * i;
      if (idx < msg.length) {
        out[n - 1][idx] = msg[idx];
      }
    }
  }
  return out.map((e) => e.join(""));
};
