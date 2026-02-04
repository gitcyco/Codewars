// 5 kyu All that is open must be closed...
//
// We all know about "balancing parentheses" (plus brackets, braces and chevrons) and even balancing characters that are identical.
//
// Read that last sentence again, I balanced different characters and identical characters twice and you didn't even notice... :)
// Kata
//
// Your challenge in this kata is to write a piece of code to validate that a supplied string is balanced.
//
// You must determine if all that is open is then closed, and nothing is closed which is not already open!
//
// You will be given a string to validate, and a second string, where each pair of characters
// defines an opening and closing sequence that needs balancing.
//
// You may assume that the second string always has an even number of characters.
// Example
//
// // In this case '(' opens a section, and ')' closes a section
// isBalanced("(Sensei says yes!)", "()")       // => True
// isBalanced("(Sensei says no!", "()")         // => False
//
// // In this case '(' and '[' open a section, while ')' and ']' close a section
// isBalanced("(Sensei [says] yes!)", "()[]")   // => True
// isBalanced("(Sensei [says) no!]", "()[]")    // => False
//
// // In this case a single quote (') both opens and closes a section
// isBalanced("Sensei says 'yes'!", "''")       // => True
// isBalanced("Sensei say's no!", "''")         // => False
//
// Answer:
function isBalanced(s, caps) {
  if (!caps) return true;
  const stack = [];
  const [openkeys, closekeys] = getParts(caps);
  for (const char of s) {
    if (char in openkeys && !(char in closekeys)) {
      stack.push(char);
    } else if (char in openkeys && char in closekeys) {
      if (stack.length === 0 || stack[stack.length - 1] !== char) {
        stack.push(char);
      } else {
        const val = stack.pop();
        if (val !== char) return false;
      }
    } else if (char in closekeys) {
      const val = stack.pop();
      if (openkeys[val] !== char) return false;
    }
  }
  return stack.length === 0;
}

const getParts = (keys) => {
  const parts = keys.match(/../g);
  const openkeys = {};
  const closekeys = {};
  for (let part of parts) {
    const [open, close] = part.split("");
    openkeys[open] = close;
    closekeys[close] = open;
  }
  return [openkeys, closekeys];
};
