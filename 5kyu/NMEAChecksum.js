// 5 kyu NMEA checksum
//
// GPS receivers use NMEA format to interface with other hardware.
// Each NMEA sentence starts with a $ character, contains some ASCII data, contains an optional
// checksum separated from the data by a * character, and ends with end of line characters CR+LF.
//
// The checksum is a XOR of all data characters not including the starting $. It is represented as two hexadecimal digits.
//
// For example, in the sentence $GPRMC,152226.580,A,37.659,N,54.216,E,0.57,0.17,140924,,*3A the checksum value 0x3A
// is the XOR sum of all bytes in the ASCII string GPRMC,152226.580,A,37.659,N,54.216,E,0.57,0.17,140924,,.
//
// Implement the checking function check which expects a NMEA sentence (with end of line characters) that contains a checksum, and checks if the checksum is correct.
//
// The data in real-life NMEA sentences consists of comma-separated words and numbers.
// Random test strings in this kata do not have this structure but are guaranteed to not contain $ and * in data part.
//
// Answer:
function check(string) {
  let sub = string.match(/(?<=\$).*(?=\*)/) || [];
  let check = string.match(/(?<=\*).*/) || [];
  if (sub.length > 0 && check.length > 0) {
    let tst = [...sub[0]].map((e) => e.charCodeAt(0)).reduce((a, e) => a ^ e);
    let inpChk = parseInt(check[0], 16);
    return inpChk > 15 && tst == inpChk;
  }
}
