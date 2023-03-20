// 7 kyu Double value every next call
//
// This kata is about static method that should return different values.
//
// On the first call it must be 1, on the second and others - it must be a double from previous value.
//
// Answer:
class Class {
  static num = 1;
  static getNumber() {
    let val = this.num;
    this.num *= 2;
    return val;
  }
}
