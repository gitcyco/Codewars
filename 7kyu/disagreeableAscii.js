// 7 kyu Disagreeable ascii
//
// You would like to get the 'weight' of a name by getting the sum of the ascii values. 
// However you believe that capital letters should be worth more than mere lowercase letters. 
// Spaces, numbers, or any other character are worth 0.
// 
// Normally in ascii
// 
// a has a value of 97
// A has a value of 65
// ' ' has a value of 32
// 0 has a value of 48
// 
// To find who has the 'weightier' name you will switch all the values so:
// 
// A will be 97
// a will be 65
// ' ' will be 0
// 0 will be 0
// etc...
//
// Answer:
const getWeight = n => [...n].map(e=>e.charCodeAt(0)).reduce((a,e) => a += e>96&&e<123 ? e-32 : e>64&&e<91 ? e+32 : 0,0);