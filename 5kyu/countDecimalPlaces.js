// 5 kyu Count Decimal Places
//
// Can you write an algorithm to determine the number of decimal places of a number?
//
// decimalPlaces(3.14); //yields 2
// decimalPlaces(2.e-14); //yields 14
// decimalPlaces(-3.14e-21); //yields 23
// decimalPlaces(10.75); //yields 2
// decimalPlaces(NaN); //yields 0
// decimalPlaces(Infinity); //yields 0
//
// Consider the decimal places to be the number of digits after the decimal separator when the number is expressed in ordinary decimal notation.
//
// Answer:
function decimalPlaces(n) {
  let deci = +(n.toString().match(/(?<=\.)[\d]+/) || [""])[0].length;
  let exp = +(n.toString().match(/(?<=e-)[\d]+/i) || [0])[0];
  return exp + deci;
}
