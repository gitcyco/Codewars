// 6 kyu Mirror object - tcejbo rorriM
//
// Mirror - Mirror
//
// Can you mirror the properties on an object?
//
// Given an object with properties with no value
//
// abc: -
// arara: -
// xyz: -
//
// Return a new object that have the properties with its mirrored key!
//
// abc: cba
// arara: arara
// xyz: zyx
//
// "You cannot change the original object, because if you did that the reflection would change."
//
// Answer:
const mirror = (obj) => {
  const newObj = {};
  Object.keys(obj).forEach((e) => (newObj[e] = e.split("").reverse().join("")));
  return newObj;
};
