// 4 kyu Objectify a URL Query String
//
// In this kata, we want to convert a URL query string into a nested object.
// The query string will contain parameters that may or may not have embedded dots ('.'), and these dots
// will be used to break up the properties into the nested object.
//
// You will receive a string input that looks something like this:
//
// user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue
//
// Your method should return an object hash-map that looks like this:
//
// {
//   'user': {
//     'name': {
//       'firstname': 'Bob',
//       'lastname': 'Smith'
//     },
//     'favoritecolor': 'Light Blue'
//   }
// }
//
//     You can expect valid input. You won't see input like:
//
//     // This will NOT happen
//     foo=1&foo.bar=2
//
//     All properties and values will be strings — and the values should be left as strings to pass the tests.
//     Make sure you decode the URI components correctly
//
// Answer:
function convertQueryToMap(query) {
  if (query.length === 0) return {};
  const parts = query.split("&");
  const obj = {};
  for (let part of parts) {
    let [prop, val] = part.split("=");
    let props = prop.split(".");
    let prev = obj;
    for (let i = 0; i < props.length; i++) {
      let key = props[i];
      if (!(key in prev)) prev[key] = {};
      if (i === props.length - 1) prev[key] = decodeURIComponent(val);
      else prev = prev[key];
    }
  }
  return obj;
}
