// 7 kyu Say "Hello World" JS Style
//
// Write the definition of the function "say" such that calling this:
// 
// say("Hello")("World")
// 
// returns "Hello World"
//
// Answer:
const say = a => function (b) {return `${a} ${b}`}; 