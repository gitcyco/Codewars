// 7 kyu Creating a Bitset, Part 1
//
// A byte is a sequence of 8 bits. One could imagine implementing a small set data structure using a single byte. 
// The set would hold at most the elements 0 through 7. 
// The value of each bit in the byte would indicate whether the index of that bit was included in the set.
// 
// Consider the following byte, where the index of each bit is marked below.
// 
// Byte: 0 1 1 0 0 1 0 1
// 
// Index: 0 1 2 3 4 5 6 7
// 
// This byte would represent the set {1, 2, 5, 7}. Similarly,
// 
// 10101010 ==> {0, 2, 4, 6}
// 
// 11100000 ==> {0, 1, 2}
// 
// Your task is to write a function byte_to_set which takes a single byte (an integer 0-255), and returns the corresponding set.
// 
// >> byte_to_set(0)
// set()
// 
// >> byte_to_set(255)
// {0,1,2,3,4,5,6,7}
// 
// >> byte_to_set(3)
// {6,7}

// Answer:
function byteToSet (byte) {
    return new Set(byte.toString(2)
                       .padStart(8,0)
                       .split('')
                       .reduce((ac,e,i) => (+e ? ac.push(i) : ac, ac), []));
}