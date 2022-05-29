// 6 kyu Write Number in Expanded Form
//
// Write Number in Expanded Form
// 
// You will be given a number and you will need to return it as a string in Expanded Form. For example:
// 
// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// 
// NOTE: All numbers will be whole numbers greater than 0.
// 
// If you liked this kata, check out part 2!!
//
// Answer:
function expandedForm(num) {
    const arr = num.toString().split('').reverse();
    return arr.map((e,i) => e = e * (10**i)).reverse().filter(e=>e!=0).join(' + ');
}


// Convoluted, for incoherence sake
function expandedForm(num) {
    let arr = num.toString().split('');
    let out = "";
    for(let i = 0; i < arr.length; i++) {
      if(+arr[i] * (10**(arr.length-1-i)) && i < arr.length - 1) {
        out += +arr[i] * (10**(arr.length-1-i)).toString() + ' + ';
      } else {
        out += +arr[i] ? +arr[i] * (10**(arr.length-1-i)).toString() : '';
      }
    }
    return out.replace(/ \+ $/g, '');
}