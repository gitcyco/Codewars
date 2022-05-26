// 6 kyu Data Reverse
//
// A stream of data is received and needs to be reversed.
// 
// Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:
// 
// 11111111  00000000  00001111  10101010
//  (byte1)   (byte2)   (byte3)   (byte4)
// 
// should become:
// 
// 10101010  00001111  00000000  11111111
//  (byte4)   (byte3)   (byte2)   (byte1)
// 
// The total number of bits will always be a multiple of 8.
// 
// The data is given in an array as such:
// 
// [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]
//
// Answer:
function dataReverse(data) {
    return (data.length < 8) ? [] : [...subarr(data, 8)].reverse().join(',').split(',').map(e=>+e);
}

function* subarr(arr, n) {
    for (let i = 0; i < arr.length; i += n) yield arr.slice(i, i + n);
}