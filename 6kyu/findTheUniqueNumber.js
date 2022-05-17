// 6 kyu Find the unique number
//
// There is an array with some numbers. All numbers are equal except for one. Try to find it!
// 
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// 
// It’s guaranteed that array contains at least 3 numbers.
// 
// The tests contain some very huge arrays, so think about performance.
// 
// This is the first kata in series:
// 
//     Find the unique number (this kata)
//     Find the unique string
//     Find The Unique
//
// Answer:
function findUniq(arr) {
    let common = null;
    for (let i = 0; i < arr.length; i++) {
      if(arr[i] == arr[arr.length - 1 - i]) common = arr[i];
      if(common != null) break;
    }
    let uniq = new Set(arr);
    for (let item of uniq) {
      if(item != common) return item;
    }
}
  