// 6 kyu IP Address to Number
//
// An IPv4 address is a 32-bit number that identifies a device on the internet.
// 
// While computers read and write IP addresses as a 32-bit number, we prefer to read them in dotted-
// decimal notation, which is basically the number split into 4 chunks of 8 bits, converted to decimal, and delmited by a dot.
// 
// In this kata, you will create the function ipToNum that takes an ip address and converts it to a number, as well as the function 
// numToIp that takes a number and converts it to an IP address string. Input will always be valid.
// Conversion Example
// 
// //original IP address
// 192.168.1.1
// 
// //breaks down into 4 binary octets
// 11000000 . 10101000 . 00000001 . 00000001
// 
// //which are merged together (unsigned 32-bit binary)
// 11000000101010000000000100000001
// 
// //and finally converted to base 10
// 3232235777
// 
// Note that the binary octets are unsigned (so we can't have negative numbers).
// 
// Be careful: JavaScript does bitwise arithmetic on signed 32-bits integers.
//
// Answer:
function ipToNum(ip) {
    return parseInt(ip.split('.').map(e=> (+e).toString(2).padStart(8,"0")).join(''), 2);
}

function numToIp(num) {
    const n = num.toString(2).padStart(32, "0");
    return `${parseInt(n.slice(0,8),2)}.${parseInt(n.slice(8,16),2)}.${parseInt(n.slice(16,24),2)}.${parseInt(n.slice(24,32),2)}`;
}