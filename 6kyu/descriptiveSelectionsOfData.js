// 6 kyu Descriptive selections of data
//
// Fill in the functions with the help of the provided methods only, i.e. just compose with them:
//
// rest(), map(), first(), second(), third(), zip()
//
// Example
//
// return map(table, second);
//
// Here are their descriptions:
//
// rest([5, 4, 3, 2, 1]);
// => [4, 3, 2, 1]
//
// map([1, 2, 3], function(num){ return num * 3; });
// => [3, 6, 9]
//
// first([5, 4, 3, 2, 1]); // second, third ...
// => 5
//
// zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]);
// => [["moe", 30, true], ["larry", 40, false], ["curly", 50, false]]
//
// **Note: ** The first row within the data array will always be the column names.
// These column names will always have the same order. No need to determine which index a column should be dynamically.
//
// Answer:
/*
given the following data: it will ALWAYS be this data structure
    [  
      ['name', 'age', 'voiced by'],
      ['Peter', '37', 'MacFarlane'],
      ['Lois', '31', 'Borstein']
    ]
*/

function selectNames(table) {
  return map(rest(table), first);
}

function selectVoices(table) {
  return map(rest(table), third);
}

function selectNamesAndVoices(table) {
  return zip(selectNames(table), selectVoices(table));
}
