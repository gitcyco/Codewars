// 6 kyu Breaking search bad
//
// The function must return the sequence of titles that match the string passed as an argument.
// 
// TITLES is a preloaded sequence of strings.
// 
// TITLES = ['Rocky 1', 'Rocky 2', 'My Little Poney']
// search('ock') --> ['Rocky 1', 'Rocky 2']
// 
// But the function return some weird result and skip some of the matching results.
// 
// Does the function have special movie taste?
// 
// Let's figure out !
//
// Answer:
const search = searchTerm => TITLES.filter(title => title.toLowerCase().includes(searchTerm));