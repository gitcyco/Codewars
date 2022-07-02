// 5 kyu (Ready for) Prime Time
//
// We need prime numbers and we need them now!
// 
// Write a method that takes a maximum bound and returns all primes up to and including the maximum bound.
// 
// For example,
// 
// 11 => [2, 3, 5, 7, 11]
//
// Answer:
const prime = n => primeSeries(0, n);

function isPrime(n) {
    if (n === 3) return true;
    if ((n - 1) % 6 === 0 || (n + 1) % 6 === 0) {
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }
        return true;
    } else return false;
}

function primeSeries(s, f) {
    if (f < 2) return [];
    let arr = s < 2 ? (s = 3, [2]) : [];
    s = s % 2 ? s : s + 1;
    for (let i = s; i <= f; i += 2)
        if (!((i % 3 == 0 && i > 3) || (i % 5 == 0 && i > 5) || (i % 7 == 0 && i > 7) || (i % 9 == 0 && i > 9) || !isPrime(i))) {
            arr.push(i);
        }
    return arr;
}