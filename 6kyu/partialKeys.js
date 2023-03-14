// 6 kyu Partial Keys
//
// The Rub
//
// You need to make a function that takes an object as an argument, and returns a very similar object but with a special property.
// The returned object should allow a user to access values by providing only the beginning of the key for the value they want.
// For example if the given object has a key idNumber, you should be able to access its value on the returned object by using
// a key idNum or even simply id. Num and Number shouldn't work because we are only looking for matches at the beginning of a key.
//
// Be aware that you could simply add all these partial keys one by one to the object.
// However, for the sake of avoiding clutter, we don't want to have a JSON with a bunch of nonsensical keys.
// Thus, in the random tests there will be a test to check that you did not add or remove any keys from the object passed in or the object returned.
//
// Also, if a key is tested that appears as the beginning of more than one key in the original object
// (e.g. if the original object had a key idNumber and idString and we wanted to test the key id)
// then return the value corresponding with whichever key comes first alphabetically.
// (In this case it would be idNumbers value because it comes first alphabetically.)
//
// Example
//
// let o = partialKeys({ abcd: 1 })
//
// o.abcd === 1 // true
// o.abc === 1 // true
// o.ab === 1 // true
// o.a === 1 // true
//
// o.b === 1 // false!
//
// Object.keys(o) // ['abcd']
//
// Answer:
function partialKeys(obj) {
  const newObj = {
    get(target, prop, rec) {
      let keys = Object.keys(target).sort((a, b) => a.localeCompare(b));
      let re = new RegExp(`^${prop}`);
      for (let i = 0; i < keys.length; i++) {
        if (re.test(keys[i])) return target[keys[i]];
      }
      return undefined;
    },
  };
  return new Proxy(obj, newObj);
}
