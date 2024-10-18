// 6 kyu Selective memory
//
// A mad sociopath scientist just came out with a brilliant invention!
// He extracted his own memories to forget all the people he hates!
// Now there's a lot of information in there, so he needs your talent as a developer to automatize that task for him.
//
//     You are given the memories as a string containing people's surname and name (comma separated).
//     The scientist marked one occurrence of each of the people he hates by putting a '!' right before their name.
//
// Your task is to destroy all the occurrences of the marked people.
// One more thing ! Hate is contagious, so you also need to erase any memory of the person that comes after any marked name!
//
// Answer:
function select(memory) {
  let arr = memory.split(", ");
  let del = {};
  let delCount = 0;
  for (let i = 0; i < arr.length; i++) {
    let flag = arr[i][0] === "!";
    let item = arr[i].replace("!", "");
    if (delCount && !flag) {
      del[item] = true;
      delCount--;
    }
    if (flag) {
      del[item] = true;
      delCount++;
    }
  }
  return arr.filter((e) => !del[e.replace("!", "")]).join(", ");
}
