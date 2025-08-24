// 6 kyu Shortest code: Bug in Apple
//
// shortest code: Bug in Apple
// (Code length limit: 80 chars)
//
// This is the challenge version of coding 3min series.
// If you feel difficult, please complete the simple version
//
// Task
//
// Find out "B" (Bug) in a lot of "A" (Apple).
//
// There will always be exactly one bug the apple.
//
// input: apple: matrix of characters
//
// output: [row, column]: Location of "B"
//
// Answer:
// prettier-ignore
sc=a=>a.reduce((j,r,y)=>j=r.reduce((b,e,x)=>e=='B'?[y,x]:b,j),0)
