// 7 kyu Initialize my name
//
// Some people just have a first name; some people have first and last names and some people have first, middle and last names.
// 
// You task is to initialize the middle names (if there is any).
// Examples
// 
// 'Jack Ryan'                   => 'Jack Ryan'
// 'Lois Mary Lane'              => 'Lois M. Lane'
// 'Dimitri'                     => 'Dimitri'
// 'Alice Betty Catherine Davis' => 'Alice B. C. Davis'
//
// Answer:
const initializeNames = name => name.split(' ').map((e,i,a)=> i && i < a.length-1 ? e=e[0]+'.' : e).join(' ');