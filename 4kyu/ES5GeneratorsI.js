// 4 kyu ES5 Generators(i)
//
// This is the first part of three (part2, part3).
//
// Generators and Iterators are ES6 features that allow things like this:
//
// function* fibonacci() {
//   let [prev, curr] = [0, 1];
//   for (;;) {
//     [prev, curr] = [curr, prev + curr];
//     yield curr;
//   }
// }
//
// Using them in this way, we can do amazing things:
//
// let seq = fibonacci();
// seq.next() ==> 1
// seq.next() ==> 2
// seq.next() ==> 3
// seq.next() ==> 5
// seq.next() ==> 8
//
// The goal of this kata is to implement pseudo-generators with ES5.
//
// The first thing to do is to implement the generator function:
//
// function generator(sequencer) {
//    ...
// }
//
// generator(sequencer[, arg1, arg2, ...]) receives a sequencer function to generate
// the sequence and returns an object with a next() method. When the next() method
// is invoked, the next value is generated.
// The method could receive as well optional arguments to be passed to the sequencer function.
//
// This is an example of a dummy sequencer:
//
// function dummySeq() {
//   return function() {
//     return "dummy";
//   };
// }
//
// To test generator(), you could use dummySeq() in this way:
//
// var seq = generator(dummySeq);
// seq.next() ==> 'dummy'
// seq.next() ==> 'dummy'
// seq.next() ==> 'dummy'
// ....
//
// When you're done, you should implement the following generators (I think the functions are self explanatory):
//
// function factorialSeq() {...} // 1, 1, 2, 6, 24, ...
// function fibonacciSeq() {...} // 1, 1, 2, 3, 5, 8, 13, ...
// function rangeSeq(start, step) {...} // rangeSeq(1, 2)  -> 1, 3, 5, 7, ...
// function primeSeq() {...} // 2, 3, 5, 7, 11, 13, ...
// function partialSumSeq(1, 3, 7, 2, 0) {...} // 1, 4, 11, 13, 13, end
//
// You can use any of them in the same way:
//
// var seq = generator(factorialSeq);
// seq.next() ==> 1
// seq.next() ==> 1
// seq.next() ==> 2
// seq.next() ==> 6
// seq.next() ==> 24
// ...
//
// There are some sequences which are infinite and others are not. For example:
//
//     primeSeq: Is infinite
//     partialSumSeq: Is limited to the passed values.
//
// When the sequence is done (in finite sequences), if you call seq.next() again, it should produce an error.
//
// Answer:
function generator(sequencer, ...rest) {
  const state = {};
  const func = sequencer(...rest);
  return {
    next: function () {
      return func();
    },
  };
}

function dummySeq() {
  return function () {
    return "dummy";
  };
}

function factorialSeq() {
  let cur = 0;
  let fac = 1;
  return function () {
    if (cur === 0) {
      cur++;
      return 1;
    }
    fac = fac * cur++;
    return fac;
  };
}

function fibonacciSeq() {
  let a = 0;
  let b = 1;
  return function () {
    let tmp = b;
    let val = a + b;
    a = b;
    b = val;
    return tmp;
  };
}

function rangeSeq(start, step) {
  return function () {
    let val = start;
    start += step;
    return val;
  };
}

function primeSeq() {
  let start = 2;
  return function () {
    while (true) {
      if (isPrime(start)) {
        return start++;
      }
      start++;
    }
  };

  function isPrime(num) {
    if (num < 1) return false;
    let sqrtnum = Math.floor(Math.sqrt(num));
    let prime = num !== 1;
    for (let i = 2; i < sqrtnum + 1; i++) {
      if (num % i === 0) {
        prime = false;
        break;
      }
    }
    return prime;
  }
}

function partialSumSeq(...rest) {
  let index = 0;
  let sum = 0;
  return function () {
    if (index === 0) {
      sum = rest[index];
      return rest[index++];
    }
    if (index < rest.length) {
      sum += rest[index++];
      return sum;
    }
    throw new Error("End of input");
  };
}
