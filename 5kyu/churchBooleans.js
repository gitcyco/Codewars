// 5 kyu Church Booleans
//
// There are a few Katas about Church Numerals so let's talk about booleans.
//
// In lambda calculus, the only primitive are lambdas. No numbers, no strings, and of course no booleans. Everything is reduced to anonymous functions.
//
// Booleans are defined thusly (this definition is preloaded for you) :
//
// const True = T => F => T;
// const False = T => F => F;
//
// Your task will be to implement basic operators on booleans (using only lambdas and function application) : Not, And, Or and Xor.
//
// To help, the function unchurch comes preloaded, and returns the native boolean given a church boolean :
//
// unchurch(True); //true;
//
// Note: You should not use the following:
//
//     numbers
//     strings
//     booleans
//     boolean operators
//     objects (curly brackets) or arrays (square brackets)
//     regexp
//     "new"
//
// Answer:
//
// Original answer:
// const Not = (A) => A(False)(True);
// const And = (A) => (B) => A(B)(A);
// const Nand = (A) => (B) => Not(And(A)(B));
// const Or = (A) => (B) => Nand(Nand(A)(A))(Nand(B)(B));
// const Xor = (A) => (B) => Nand(Nand(A)(Nand(A)(B)))(Nand(B)(Nand(A)(B)));

//
// Restructured for NAND only:
//
// Start with a NAND gate, which can be used to create all other logic gates
const Nand = (A) => (B) => A(B)(A)(False)(True);

// NOT gate logic from NAND: A NAND A
const Not = (A) => Nand(A)(A);

// AND gate logic from NAND: ( A NAND B ) NAND ( A NAND B )
const And = (A) => (B) => Nand(Nand(A)(B))(Nand(A)(B));

// OR gate logic from NAND: ( A NAND A ) NAND ( B NAND B )
const Or = (A) => (B) => Nand(Nand(A)(A))(Nand(B)(B));

// XOR gate logic from NAND: ( A NAND ( A NAND B ) ) NAND ( B NAND ( A NAND B ) )
const Xor = (A) => (B) => Nand(Nand(A)(Nand(A)(B)))(Nand(B)(Nand(A)(B)));
