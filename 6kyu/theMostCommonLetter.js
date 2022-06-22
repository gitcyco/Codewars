// 6 kyu The most common letter
//
// Find the most common letter (not space) in the string(always lowercase and 2 < words) and replace it with the letter.
// 
// If such letters are two or more, choose the one that appears in the string( earlier.
// 
// For example:
// 
// ('my mom loves me as never did', 't') => 'ty tot loves te as never did'
// ('real talk bro', 'n') => 'neal talk bno'
// ('great job go ahead', 'k') => 'grekt job go khekd'
//
// Answer:
function replaceCommon(str, char) {
    const arr = str.replace(/\s/g, '').split('')
        .reduce((ac, e) => (ac[e] ? ac[e]++ : ac[e] = 1, ac), {})
    const sorted = Object.entries(arr).sort((a, b) => b[1] - a[1]);
    return str.replace(new RegExp(`${sorted[0][0]}`, 'g'), char);
}