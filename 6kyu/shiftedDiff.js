// 6 kyu Calculate String Rotation
//
// Write a function that receives two strings and returns n, where n is equal to the number of characters 
// we should shift the first string forward to match the second. The check should be case sensitive.
//
// For instance, take the strings "fatigue" and "tiguefa". 
// In this case, the first string has been rotated 5 characters forward to produce the second string, so 5 would be returned.
// If the second string isn't a valid rotation of the first string, the method returns -1.
// Examples:
//
// "coffee", "eecoff" => 2
// "eecoff", "coffee" => 4
// "moose", "Moose" => -1
// "isn't", "'tisn" => 2
// "Esham", "Esham" => 0
// "dog", "god" => -1


// Answer:
function shiftedDiff(first,second){
    for(i = 0; i < second.length; i++) {
      if(rotate(first, i) === second) return i;
    }
    return -1;
}
  
  function rotate(str, num = 0){
    const n = (str.length - num) % str.length;
    return str.slice(n) + str.slice(0, n); 
}

// One liner:
const shiftedDiff = (f,s) => f.length === s.length ? (s+s).indexOf(f) : -1;