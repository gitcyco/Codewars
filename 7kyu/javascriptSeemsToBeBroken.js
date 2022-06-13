// 7 kyu JavaScript seems to be broken
//
// There is some horribly rotten script that is not required in your project anymore, and it is affecting the way your code is supposed to work.
// 
// For some reason you don't have an access to that rotten piece of code but you want to get your code working as expected in any possible way.
// 
// Go and get it working!
//
// Answer:
function semicolonSeparationToCommaSeparation(input) {
    return input.split(";").join(",");  
}
  
Array.prototype.join = function(delim) {
    let str = '';
    this.forEach((e,i,a) => str += i === a.length - 1 ? e : e + delim);
    return str;
}