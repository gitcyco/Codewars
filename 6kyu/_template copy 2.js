// DESCRIPTION
//
//
// Answer:
Object.prototype.iterate = function (f, c = Infinity) {
  //   if(!c) c = this.length;
  let count = 0;
  console.log(this);
  let outer = this;
  const myIterable = {
    next() {
      console.log("next-this:", outer);
      if (count++ < c) return { value: f(outer), done: false };
      else return { value: null, done: true };
    },
    *[Symbol.iterator]() {
      for (let i = 0; i < c; i++) {
        console.log(f);
        yield f(this[i]);
      }
    },
  };
  return myIterable;
};

function makeRangeIterator(start = 0, end = Infinity, step = 1) {
  let nextIndex = start;
  let iterationCount = 0;

  const rangeIterator = {
    next() {
      let result;
      if (nextIndex < end) {
        result = { value: nextIndex, done: false };
        nextIndex += step;
        iterationCount++;
        return result;
      }
      return { value: iterationCount, done: true };
    },
  };
  return rangeIterator;
}
