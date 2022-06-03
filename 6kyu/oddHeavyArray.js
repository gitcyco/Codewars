// 6 kyu Odd-heavy Array
//
//  An array is defined to be odd-heavy if it contains at least one odd element and every element whose value is odd is greater than every even-valued element.
// 
//  eg.
//  
//  Array [11,4,9,2,8] is odd-heavy 
//  because:- its odd elements [11,9] are greater than all the even elements [4,2,8]
//  
//  Array [11,4,9,2,3,10] is not odd-heavy
//  because:- one of it's even element 10 from [4,2,10] is greater than two of its odd elements [9,3] from [ 11,9,3]
//  
//  write a function called isOddHeavy or is_odd_heavy that accepts an integer array and returns true if the array is odd-heavy else return false.
//  
// Answer:
function isOddHeavy(n){
    const odds = n.filter(e => e % 2).sort()
    const evens = n.filter(e => !(e % 2)).sort((a,b) => b - a)
    return (odds[0] < evens[0]) || odds.length == 0 ? false : true
}