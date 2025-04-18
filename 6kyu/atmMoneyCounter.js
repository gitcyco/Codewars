// 6 kyu ATM money counter
//
// Imagine that we have ATM with multiple currencies. The users can withdraw money of in any currency that the ATM has.
//
// Our function must analyze the currency and value of what the users wants, and give money
// to the user starting from bigger values to smaller. The ATM gives the least amount of notes possible.
//
// This kata has a preloaded dictionary of possible bank note values for different currencies (RUB, EUR, UAH, USD, CUP, SOS):
//
// const VALUES = { "EUR": [5, 10, 20, 50, 100, 200, 500], "USD": ... }
// // Note: VALUES and its internal arrays are frozen, don't try to mutate them
//
// The function should return a string containing how many bank notes of each value the ATM will give out, for example:
//
// "8 * 100 USD, 2 * 20 USD, 1 * 2 USD"
//
// If it can't do that because there are no notes for this value, it should return:
//
// "Can't do *value* *currency*. Value must be divisible by *amount*!"
//
// (replace *value*, *currency* and *amount* with the relevant details)
//
// If it doesn't have the requested currency at all, it should return:
//
// "Sorry, have no *currency*."
//
// Notes:
//
//     Letter case and word order doesn't matter in the input: e.g. "EUR 1000" and "1000eur" are the same.
//     See test cases for more user input samples.
//     Do not create your own VALUES dictionary/hash or you'll get broken tests.
//
// Answer:
function atm(input) {
  let value = +input.replace(/[^0-9]/g, "");
  const orig = value;
  const cur = input.replace(/[^a-z]/gi, "").toUpperCase();
  if (!VALUES[cur]) return `Sorry, have no ${cur}.`;
  const notes = [...VALUES[cur]].reverse();
  const cash = [];

  for (let note of notes) {
    if (note > value) continue;
    const parts = Math.floor(value / note);
    value = value % note;
    cash.push([parts, note]);
  }
  if (value !== 0)
    return `Can't do ${orig} ${cur}. Value must be divisible by ${VALUES[cur][0]}!`;
  return cash.map(([qty, part]) => `${qty} * ${part} ${cur}`).join(", ");
}
