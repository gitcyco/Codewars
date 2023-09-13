// 6 kyu XOR string reduction
//
// Given a string consisting entirely of binary digits (0 , 1) seperated using spaces. Find the XOR of all digits and return the answer.
// Examples :
//
// Given
//
// "1 0 0 1 0" --> 0
// "1 0 1 1 1 0 0 1 0 0 0 0" --> 1
//
// How :
//
// 1 0 0 1 0
//
// Solving :
//
// (1 XOR 0) (0 XOR 1) 0
// 1 1 0
// (1 XOR 1) 0
// 0 0
// 0 XOR 0
// 0 ---> Answer
//
// This is code-golf so shortest code is winner. The limit of solution is set to 40 chars (exclusive).
//
// Answer:
//
// Commented to prevent formatting since this is code golf
//X=i=>+i.split('').reduce((a,e)=>a^e)
X = (i) => +i.split("").reduce((a, e) => a ^ e);
