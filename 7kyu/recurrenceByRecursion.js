// 7 kyu Recurrence by Recursion
//
// Task
//
// Your task is to create a function, recurrence(base, formula, term) where base is the base case or first
// term of the sequence, formula is the recurrence formula given as a function/method and term is the number
// of the term of the series which your function/method has to calculate. For example:
//
// recurrence(1, n => n + 3, 4) === 10
// recurrence(3, n => 2 * n, 5) === 48
//
// Answer:
const recurrence = (b, fn, t) => (--t > 0 ? recurrence(fn(b), fn, t) : b);
