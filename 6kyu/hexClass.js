// 6 kyu Hex class
//
// Create a class Hex which takes a number as an argument.
//
// Adding a hex object to a number (by using valueOf) generates a number, but calling toString or toJSON
// will show its hexadecimal value starting with "0x". To make hex objects comparable you have to provide a method equals.
//
// Example:
//
// var FF = new Hex(255);
// FF.toString() == "0xFF";
// FF.valueOf() + 1 == 256;
//
// Also create two methods, plus and minus which will add or subtract a number or Hex object and return a new Hex object.
//
// var a = new Hex(10);
// var b = new Hex(5);
// a.plus(b).toJSON() == "0xF";
//
// Also, create a parse class method that can parse Hexadecimal numbers and convert them to standard decimal numbers:
//
// Hex.parse("0xFF") == 255;
// Hex.parse("FF") == 255;
//
// Note: If you define both valueOf and toString, "Hex value:" + new Hex(255) may not behave as expected!
//
// Answer:
class Hex {
  constructor(value) {
    this.num = parseInt(value);
  }
  valueOf() {
    return this.num;
  }
  toString() {
    return "0x" + this.num.toString(16).toUpperCase();
  }
  toJSON() {
    return this.toString();
  }
  plus(n) {
    let val = this.num + n.valueOf();
    return new Hex(val);
  }
  minus(n) {
    let val = this.num - n.valueOf();
    return new Hex(val);
  }
  static parse(h) {
    h = "0x" + h.replace(/^0x/, "");
    return parseInt(h);
  }
}
