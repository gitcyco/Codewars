// 5 kyu Multi Level Sorting
//
// Receiving an unknown number of records through AJAX, you want to order these according to your own criteria.
// The AJAX request does support sorting, so you have to build it by hand.
//
// To make matters worse, the records may have the same field values and when this happens
// you want to order them by a secondary field - and continue to third, fourth and so on.
// Task
//
// An order specification could look like this:
//
// var order = [
//   {key: "job", direction: "ascending"},
//   {key: "age", direction: "descending"}
// ];
//
// That is, an ordering key (field name) and the direction of the ordering.
//
// For the records:
//
// var records = [
//   {name:"christian", age:40, job:"developer"},
//   {name:"andrew", age:48, job:"developer"},
//   {name:"elisabeth", age:31, job:"floor manager"},
//   {name:"oscar", age:61, job:"floor manager"},
//   {name:"gisela", age:51, job:"area manager"},
//   {name:"buffy", age:27, job:"trainee"},
//   {name:"carl", age:23, job:"trainee"}
// ];
//
// The output of calling "multilevelsort(records,order)" should be:
//
// [
//   {name:"andrew", age:48, job:"developer"},
//   {name:"buffy", age:27, job:"trainee"},
//   {name:"carl", age:23, job:"trainee"},
//   {name:"christian", age:40, job:"developer"},
//   {name:"elisabeth", age:31, job:"floor manager"},
//   {name:"gisela", age:51, job:"area manager"},
//   {name:"oscar", age:61, job:"floor manager"}
// ]
//
// Test Submission
//
// For the test fixture, a random record set and a random order set is generated.
// The number of entries (key-value pairs) in the "order" object will vary from test to test as will the number of records.
//
// Answer:
function multilevelsort(records, orders) {
  const sorted = records.sort((recA, recB) => {
    for (const { key, direction } of orders) {
      const [dirA, dirB] = direction === "ascending" ? [1, -1] : [-1, 1];
      const itemA = recA[key];
      const itemB = recB[key];
      if (itemA == itemB || !itemA || !itemB) continue;
      if (itemA > itemB) return dirA;
      else return dirB;
    }
  });
  return sorted;
}
