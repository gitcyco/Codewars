// 7 kyu Check for prime numbers
//
// In this kata you will create a function to check a non-negative input to see if it is a prime number.
// 
// The function will take in a number and will return True if it is a prime number and False if it is not.
// 
// A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.
// Examples(input --> output)
// 
// 0 --> false
// 1 --> false
// 2 --> true
// 11 --> true
// 12 --> false
//
// Answer:
function isPrime(num) {
    if (num < 2) return false;
    if ((num > 2 && num % 2 === 0) ||
        (num > 3 && num % 3 === 0) ||
        (num > 5 && num % 5 === 0) ||
        (num > 7 && num % 7 === 0)) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (!(num % i)) return false;
    }
    return true;
}