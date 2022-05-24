// 6 kyu Running Average
//
// Python:
// 
// Create a function running_average() that returns a callable function object. Update the series with each given value and calculate the current average.
// 
// r_avg = running_average()
// r_avg(10) = 10.0
// r_avg(11) = 10.5
// r_avg(12) = 11
// 
// All input values are valid. Round to two decimal places.
// 
// This Kata is based on a example from Fluent Python book.
// Javascript // Lua // C++:
// 
// Create a function runningAverage() that returns a callable function object. Update the series with each given value and calculate the current average.
// 
// rAvg = runningAverage();
// rAvg(10) = 10.0;
// rAvg(11) = 10.5;
// rAvg(12) = 11;
//
// Answer:
function runningAverage() {
    let count = 0;
    let current = 0;
    return (val) => {
      current = (count * current + val) / ++count;
      return Math.round(current * Math.pow(10, 2)) / Math.pow(10, 2);
    }
}