// 6 kyu GroupBy Advanced
//
// The Map.groupBy static method just groups the elements by keys.
//
// But we need to go deeper :-) JavaScript's big brother Java has similar method.
//
// It implement a cascaded "group by" operation on input elements of type T, grouping elements according
// to a classification function, and then performing a reduction operation
// on the values associated with a given key using the specified downstream callback and initial value.
//
// Your task is to implement the groupBy function.
//
// const employees = [
//   { name: "James", income: 1000, profession: "developer", age: 23, },
//   { name: "Robert", income: 1100, profession: "qa", age: 34, },
//   { name: "John", income: 1200, profession: "designer", age: 32, },
//   { name: "Mary", income: 1300, profession: "designer", age: 22, },
//   { name: "Patricia", income: 1400, profession: "qa", age: 23, },
//   { name: "Jennifer", income: 1500, profession: "developer", age: 45, },
//   { name: "Max", income: 1600, profession: "developer", age: 27, },
// ];
//
//
// const profession2totalIncome = groupBy(
//   employees,
//   employee => employee.profession, // group by profession
//   (acc, employee) => acc + employee.income, // sum up incomes
//   () => 0, // provide an initial value for map's value
// );
//
// // Map { 'developer' => 4100, 'qa' => 2500, 'designer' => 2500 }
//
//
// const profession2names = groupBy(
//   employees,
//   employee => employee.profession,
//   (acc, employee) => [...acc, employee.name],
//   () => [],
// );
//
// // Map {
// //   'developer' => [ 'James', 'Jennifer', 'Max' ],
// //   'qa' => [ 'Robert', 'Patricia' ],
// //   'designer' => [ 'John', 'Mary' ],
// // }
//
// Answer:
function groupBy(array, classifier, downstream, accumulatorSupplier) {
  let obj = new Map();
  for (let item of array) {
    if (obj.has(classifier(item))) {
      let prev = obj.get(classifier(item));
      prev.push(item);
      obj.set(classifier(item), prev);
    } else obj.set(classifier(item), [item]);
  }

  for (let key of obj.keys()) {
    let acc = accumulatorSupplier();
    for (let item of obj.get(key)) {
      acc = downstream(acc, item);
    }
    obj.set(key, acc);
  }
  return obj;
}
