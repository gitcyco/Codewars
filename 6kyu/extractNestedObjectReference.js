// 6 kyu Extract Nested Object Reference
//
// You are given a complex object that has many deeply nested variables.
// You don't want to go the usual if obj.property == null route.
// Create a prototype method that given a nested path, either return the value or undefined.
//
// var obj = {
//   person: {
//     name: 'joe',
//     history: {
//       hometown: 'bratislava',
//       bio: {
//         funFact: 'I like fishing.'
//       }
//     }
//   }
// };
//
// obj.hash('person.name'); // 'joe'
// obj.hash('person.history.bio'); // { funFact: 'I like fishing.' }
// obj.hash('person.history.homeStreet'); // undefined
// obj.hash('person.animal.pet.needNoseAntEater'); // undefined
//
// Answer:
// return the nested property value if it exists,
// otherwise return undefined
Object.prototype.hash = function (string) {
  let val = this;
  for (let o of string.split(".")) {
    if (o in val) {
      val = val[o];
    } else {
      return undefined;
    }
  }
  return val;
};
