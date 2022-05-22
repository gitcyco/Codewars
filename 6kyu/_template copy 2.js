// 6 kyu Last digit symmetry
//
// Consider the number 1176 and its square (1176 * 1176) = 1382976. Notice that:
// 
//     the first two digits of 1176 form a prime.
//     the first two digits of the square 1382976 also form a prime.
//     the last two digits of 1176 and 1382976 are the same.
// 
// Given two numbers representing a range (a, b), how many numbers satisfy this property within that range? (a <= n < b)
// Example
// 
// solve(2, 1200) = 1, because only 1176 satisfies this property within the range 2 <= n < 1200. 
// See test cases for more examples. The upper bound for the range will not exceed 1,000,000. 
//
// Answer:
function solve(a, b) {
    let count = 0;
    for(let i = a; i < b; i++) {
      let k = i.toString();
      if(k.length < 2) continue;
      let s = (i*i).toString();
      if(isPrime(k.substring(0,2)) && isPrime(s.substring(0,2)) && k.substring(k.length -2) == s.substring(s.length -2)) {
        count++;
      }
    }
    return count;
  }
  
function isPrime(n) {
    if (isNaN(n) || !isFinite(n) || n%1 || n<2) return false; 
    if (n%2==0) return (n==2);
    if (n%3==0) return (n==3);
    if (n%5==0) return (n==5);
    if (n%7==0) return (n==7);
    let m=Math.sqrt(n);
    for (let i=5;i<=m;i+=6) {
        if (n%i==0)     return false;
        if (n%(i+2)==0) return false;
    }
    return true;
}