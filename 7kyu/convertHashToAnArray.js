// 7 kyu Convert Hash To An Array
//
// Convert a hash into an array. Nothing more, Nothing less.
//
// {name: 'Jeremy', age: 24, role: 'Software Engineer'}
//
// should be converted into
//
// [["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]
//
// Note: The output array should be sorted alphabetically by key name.
//
// Answer:
const convertHashToArray = (h) => Object.entries(h).sort((a, b) => a[0].localeCompare(b[0]));
