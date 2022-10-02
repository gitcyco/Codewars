// 6 kyu Strip Url Params
//
// Complete the method so that it does the following:
//
//     Removes any duplicate query string parameters from the url (the first occurence should be kept)
//     Removes any query string parameters specified within the 2nd argument (optional array)
//
// Examples:
//
// stripUrlParams('www.codewars.com?a=1&b=2&a=2') === 'www.codewars.com?a=1&b=2'
// stripUrlParams('www.codewars.com?a=1&b=2&a=2', ['b']) === 'www.codewars.com?a=1'
// stripUrlParams('www.codewars.com', ['b']) === 'www.codewars.com'
//
// Answer:
function stripUrlParams(url, pts = []) {
  const [base, pAll] = url.split("?");
  if (!pAll) return base;
  const params = pAll
    .split("&")
    .map((e) => e.split("="))
    .filter((e) => !pts.includes(e[0]));
  const pArr = Object.entries(params.reduce((a, e) => (a[e[0]] ? null : (a[e[0]] = e[1]), a), {})).map(
    (e) => e[0] + "=" + e[1]
  );
  if (pArr.length > 0) return `${base}?${pArr.join("&")}`;
  return base;
}
