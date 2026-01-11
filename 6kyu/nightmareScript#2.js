// 6 kyu [Code Golf] NightmareScript #2 (Stringy Strings)
// NightmareScript is JavaScript without alpha-numeric characters.
//
// Only permitted characters are:
//
// ! @ # $ % ^ & * ( ) _ + - | < > . , ' ; : " ` ~ = ? /\ { } [ ]
//
// Task:
//
// Using NightmareScript, return an alternating string of 1's and 0's the length of n, starting with '1' if n is odd or '0' if n is even.
//
// Maximum character length is 30.
//
// n will always be >= 0
//
// Answer:

//prettier-ignore
$=_=>_?(_&!"")+$(--_):""
