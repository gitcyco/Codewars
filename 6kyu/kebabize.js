// 6 kyu Kebabize
//
// Modify the kebabize function so that it converts a camel case string into a kebab case.
//
// kebabize('camelsHaveThreeHumps') // camels-have-three-humps
// kebabize('camelsHave3Humps') // camels-have-humps
//
// Notes:
//
//     the returned string should only contain lowercase letters
//
// Answer:
const kebabize = (str) =>
  str.replace(/[^A-Z]/gi, "").replace(/[A-Z]/g, (e, o) => (o ? "-" + e.toLowerCase() : e.toLowerCase()));
