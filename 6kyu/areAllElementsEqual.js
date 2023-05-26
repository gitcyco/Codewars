// 6 kyu Are all elements equal?
//
// Create (a) method(s) eqAll that determines if all elements of a list are equal.
// list can be a String or an Array; return value is a Boolean.
// Your method(s) should not be enumerable. Equality should be strict (===).
// Examples
//
// "aaaaa".eqAll() => true
// "abcde".eqAll() => false
// [0,0,0].eqAll() => true
// [0,1,2].eqAll() => false
//
// "".eqAll() => true
// [].eqAll() => true
//
// Answer:
Object.defineProperty(String.prototype, "eqAll", {
  value: function eqAll() {
    return this.length > 0 ? /^(.)\1*$/.test(this) : true;
  },
});

Object.defineProperty(Array.prototype, "eqAll", {
  value: function eqAll() {
    return this.length > 0 ? this.every((e) => e === this[0]) : true;
  },
});
