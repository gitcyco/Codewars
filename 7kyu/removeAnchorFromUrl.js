// 7 kyu Remove anchor from URL
//
// Complete the function/method so that it returns the url with anything after the anchor (#) removed.
// Examples
//
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"
//
// Answer:
const removeUrlAnchor = (url) => url.replace(/#.*/, "");
