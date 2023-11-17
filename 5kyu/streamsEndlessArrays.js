// 5 kyu Streams - endless arrays
//
// The goal of this kata is to write a Stream - an endless sequence of elements.
// Such a Stream usually has two methods head(), requesting the first element of the current
// Stream and tail() to get the rest of the current Stream without the head.
//
// An example use could be:
//
// var increment = function(n) {return n + 1};
// var id = function(n) {return n};
// var sqr = function(n) {return n * n};
//
// var naturalNumbers = new Stream(0, id, increment);
//
// console.log(naturalNumbers.head()) // 0
// console.log(naturalNumbers.tail().head()) // 1
// console.log(naturalNumbers.tail().tail().head()) // 2
//
// Implement a Stream object.
//
// Further explenations: A Stream is constructed using three parameters:
//
// var naturalNumbers = new Stream(0, id, increment);
//
// The second parameter is the so called output function. These functions controls the result of calling head().
// The third parameter is the stepping function. It is very common to have just the increment function used for this.
// The first parameter is the start value. The first call to head() will return <output_function>(<start_value>)
//
// A call to tail() should always returns a new Stream object.
//
// Answer:
class Stream {
  constructor(start, output, step) {
    this.start = start;
    this.output = output;
    this.step = step;
  }
  tail() {
    return new Stream(this.step(this.start), this.output, this.step);
  }
  head() {
    return this.output(this.start);
  }
}
