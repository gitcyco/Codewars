// 5 kyu String generation by pattern
//
// Implement a generator that, given a pattern, returns strings following such pattern.
// In this kata a pattern is a string composed of characters, digits, punctuation (except square brackets) and tokens
// that have to be replaced by the value needed to build the next string in the sequence.
//
// There are four types of tokens:
//
//     [INC_INT=START,STEP]: Incrementing integer, every time the next function is called on the generator
//      the actual integer is put in the string and then incremented by STEP. The default values for START and STEP are 1 and 1;
//     [INC_FLOAT=START,STEP]: Incrementing floating point, every time the next function is called on the generator
//      the actual floating point is put in the string and then incremented by STEP.
//      The default values for START and STEP are 0.1 and 0.1.
//      The [INC_FLOAT] token takes its floating point precision from the parameter that has the most decimal digits in it (trailing zeros count aswell).
//      The floating point numbers passed as parameters might be very small (the lowest number possible is 0.0000000001);
//     [INTERVAL=FIRST,LAST]: Interval of integers starting from FIRST and ending at LAST (both included).
//      When LAST is reached, the token restarts the interval from FIRST. The default values for FIRST and LAST are 1 and 1.
//      If only one parameter is given, LAST is equal to FIRST;
//     [PERIODIC=START,N]: Every time N strings get created, the value is incremented by one.
//      The default values for START and N are 1 and 1. Note that in the tests N is always >= 1.
//
// As already mentioned, the tokens have default values: this means that you might find tokens with 0, 1 or 2 parameters.
// If only one parameter is given, it is the first one in the token's specification.
// Examples:
//
// INPUT: "Testing [INC_INT], [INC_INT=2], [INC_INT=3,2]"
// OUTPUT: "Testing 1, 2, 3", "Testing 2, 3, 5", "Testing 3, 4, 7", "Testing 4, 5, 9", "Testing 5, 6, 11", "Testing 6, 7, 13", "Testing 7, 8, 15" ...
//
// INPUT: "x=[INC_FLOAT], y=[INC_FLOAT=0.33], z=[INC_FLOAT=0.2,0.004]"
// OUTPUT: "x=0.1, y=0.33, z=0.200", "x=0.2, y=0.43, z=0.204", "x=0.3, y=0.53, z=0.208", "x=0.4, y=0.63, z=0.212", "x=0.5, y=0.73, z=0.216", "x=0.6, y=0.83, z=0.220" ...
//
// INPUT: "Season [PERIODIC=1,5], Episode [INTERVAL=1,5]"
// OUTPUT: "Season 1, Episode 1", "Season 1, Episode 2", "Season 1, Episode 3", "Season 1, Episode 4", "Season 1, Episode 5", "Season 2, Episode 1", "Season 2, Episode 2", "Season 2, Episode 3" ...
//
//
//
// Note that there might be spaces inside the tokens, for example you might find tokens like [INC_FLOAT = 0.2 , 0.500].
// All the patterns given as input are valid, there is no need to check for errors.
// If no tokens are found in the pattern, the generator simply generates the string every time the next function is called.
//
// Answer:
function* stringGenerator(pattern) {
  const map = {
    INC_INT: inc_int,
    INC_FLOAT: inc_float,
    INTERVAL: interval,
    PERIODIC: periodic,
  };
  let keys = [];
  let tokens = pattern.match(/\[.*?\]/gi) || [];
  for (let token of tokens) {
    let args;
    let type = token.match(/(?<=\[)(.*?)(?=\])/)[0].replace(/\s/g, "");
    if (type.includes("=")) [type, args] = type.split("=");
    if (args) args = args.split(",");
    else args = [undefined];
    keys.push([token, map[type](...args)]);
  }

  while (true) {
    let out = pattern;
    for (let item of keys) {
      out = out.replace(item[0], item[1]());
    }
    yield out;
  }
}

const inc_int = (s = "1", inc = "1") => {
  let start = +s;
  let step = +inc;
  return function () {
    let str = `${start}`;
    start += step;
    return str;
  };
};

const inc_float = (s = "0.1", step = "0.1") => {
  let start = +s;
  let startPrec = s.split(".")[1].length;
  let stepPrec = step.split(".")[1].length;
  let precision = Math.max(startPrec, stepPrec);
  return function () {
    let str = `${start.toFixed(precision)}`;
    start += +step;
    return str;
  };
};

const interval = (first = "1", last = first) => {
  let cur = +first;
  return function () {
    let str = `${cur++}`;
    if (cur > +last) cur = +first;
    return str;
  };
};

const periodic = (s = "1", n = "1") => {
  let count = 1;
  let start = +s;
  let num = +n;
  return function () {
    let str = `${start}`;
    if (count++ === num) {
      count = 1;
      start++;
    }
    return str;
  };
};
