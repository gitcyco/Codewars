// 8 kyu Array plus array
//
// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.
// 
// P.S. Each array includes only integer numbers. Output is a number too.
//
// Answer:
const arrayPlusArray = (arr1, arr2) => arr1.reduce((a,e,i) => a+=e+arr2[i] ,0);