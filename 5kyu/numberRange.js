// 5 kyu Number range
//
// This is harder version of this kata.
//
// This time we want create arrays filled by numbers from a to b like this arr = [...a[b]].
// Where a and b are positive or negative integers.
//
// Your task is to do something with Number to make it possible.
//
// In your code you shouldn't do anything else, only modify Number.
// Example
//
// [...1[1]] => [1]
//
// [...1[5]] => [1, 2, 3, 4, 5]
//
// [...5[1]] => [5, 4, 3, 2, 1]
//
// [...(-5)[5]] => [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]
//
// [...2[-2]] => [2, 1, 0, -1, -2]
//
// Answer:
Object.setPrototypeOf(
  Number.prototype,
  new Proxy(
    {},
    {
      get(target, prop, rec) {
        const arr = [];
        if (rec > prop) {
          for (let n = rec; n >= prop; n--) {
            arr.push(n);
          }
        } else {
          for (let n = rec; n <= prop; n++) {
            arr.push(n);
          }
        }
        return arr;
      },
    }
  )
);
