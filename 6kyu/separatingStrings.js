// 6 kyu Separating Strings
//
// Create a function that takes a string and separates it into a sequence of letters.
// 
// The array will be formatted as so:
// 
// [['J','L','L','M']
// ,['u','i','i','a']
// ,['s','v','f','n']
// ,['t','e','e','']]
// 
// The function should separate each word into individual letters, with the first word in the sentence having its letters in the 0th index of each 2nd dimension array, and so on.
// 
// Shorter words will have an empty string in the place once the word has already been mapped out. (See the last element in the last part of the array.)
//
// Answer:
function sepStr(str) {
    let strArr = str.split(' ');
    let maxLen = strArr.reduce((acc,e,i,arr) => acc = e.length > acc ? e.length : acc,0);
    let outer = [...Array(maxLen)].map(e => '').map(e=> [...Array(strArr.length)].map(e=>''));
    strArr.forEach((e,i)=> e.split('').forEach((x,j)=>outer[j][i] = x));
    return outer;
}  