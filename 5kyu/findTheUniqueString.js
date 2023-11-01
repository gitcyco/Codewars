// 5 kyu Find the unique string
//
// There is an array of strings. All strings contains similar letters except one. Try to find it!
//
// findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
// findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'
//
// Strings may contain spaces. Spaces are not significant, only non-spaces symbols matters. E.g. string that contains only spaces is like empty string.
//
// It’s guaranteed that array contains more than 2 strings.
//
// Answer:
function findUniq(arr) {
  const obj = {};
  arr.forEach((e) => {
    let key = [...new Set(e.toLowerCase())].sort((a, b) => a.localeCompare(b));
    if (key in obj) obj[key].num++;
    else {
      obj[key] = {};
      obj[key].num = 1;
      obj[key].val = e;
    }
  });
  for (let item of Object.values(obj)) {
    if (item.num === 1) return item.val;
  }
}
