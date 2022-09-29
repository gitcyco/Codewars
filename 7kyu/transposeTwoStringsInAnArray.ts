// 7 kyu Transpose two strings in an array
//
// You will be given an array that contains two strings.
// Your job is to create a function that will take those two strings and transpose them, so that the strings go from top to bottom instead of left to right.
//
// e.g. transposeTwoStrings(['Hello','World']);
//
// should return
//
// H W
// e o
// l r
// l l
// o d
//
// A few things to note:
//
//     There should be one space in between the two characters
//     You don't have to modify the case (i.e. no need to change to upper or lower)
//     If one string is longer than the other, there should be a space where the character would be
//
// Answer:
export function transposeTwoStrings(arr:string[]):string{
  const len: number = Math.max(arr[0].length, arr[1].length);
  const mod: string[][] = arr.map((e) => e.padEnd(len, " ").split(""));
  return mod[0].reduce((a, e, i) => (a += `${mod[0][i]} ${mod[1][i]}${i < mod[0].length - 1 ? "\n" : ""}`), "");
}
