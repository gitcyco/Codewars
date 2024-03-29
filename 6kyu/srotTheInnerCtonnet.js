// 6 kyu Srot the inner ctonnet in dsnnieedcg oredr
//
// You have to sort the inner content of every word of a string in descending order.
//
// The inner content is the content of a word without first and the last char.
//
// Some examples:
//
// "sort the inner content in descending order"  -->  "srot the inner ctonnet in dsnnieedcg oredr"
// "wait for me"        -->  "wiat for me"
// "this kata is easy"  -->  "tihs ktaa is esay"
//
// Words are made up of lowercase letters.
//
// The string will never be null and will never be empty. In C/C++ the string is always nul-terminated.
//
// Have fun coding it and please don't forget to vote and rank this kata! :-)
//
// I have also created other katas. Take a look if you enjoyed this kata!
//
// Answer:

// Regex
function sortTheInnerContent(words) {
  return words.replace(/\B\w+(?=\w)/g, (e) =>
    e
      .split("")
      .sort((a, b) => a < b)
      .join("")
  );
}

// Just a plain for loop method
function sortTheInnerContent(words) {
  let arr = words.split(" ").map((e) => e.split(""));
  for (let i = 0; i < arr.length; i++) {
    let tmp = [];
    tmp.push(arr[i].shift());
    tmp.push(arr[i].pop());
    arr[i].sort((a, b) => a < b);
    arr[i].push(tmp.pop());
    arr[i].unshift(tmp.pop());
    arr[i] = arr[i].join("");
  }
  return arr.join(" ");
}
