// 5 kyu Simple string expansion
//
// Consider the following expansion:
//
// "3(ab)"     expands to "ababab"    -- because "ab" repeats 3 times
// "2(a3(b))"  expands to "abbbabbb"  -- "a3(b)" expands to "abbb" and that repeats twice
//
// Given a string, return the expansion of that string.
//
// Rules:
//
//     The input is guaranteed to be well-formed and balanced.
//     Multipliers are single digits in the range 1–9, and are optional.
//     Every multiplier is immediately followed by a parenthesised group.
//     After a group is fully expanded, nothing appears beyond the final closing parenthesis.
//
// Lowercase letters and digits are the only characters that appear.
//
// Answer:
function solve(str) {
  const expand = (str, index = 0, exp = "") => {
    let mult = 1;
    let cur = "";

    while (index < str.length) {
      let char = str[index];
      if (isChar(char)) exp += char;
      else if (isNum(char)) mult = +char;
      else if (char === "(") {
        [cur, index] = expand(str, index + 1);
        exp += cur.repeat(mult);
      } else if (char === ")") {
        return [exp, index + 1];
      }
      index++;
    }
    return [exp, index];
  };

  let [result, index] = expand(str);
  return result;
}

const isNum = (c) => /\d/.test(c);
const isChar = (c) => /[a-z]/i.test(c);
