// 6 kyu How much Wood?
//
// You're a fantastic woodworker and you love to make picture frames.
// You want to know exactly what length of trim will be required in order to make a specified frame.
//
// You are given the inside height and length of the desired frame as well as the width of the trim.
// We will assume you have the best blade ever made, to cut the wood up.
// It's so good, the blade has no width, so it doesn't remove any extra material with each cut.
//
// Since you want the frame to look good, you'll be cutting 45° miter joints on each piece.
//
// Frame
//
// You will receive an array of measurements in the following order:
//
// [height, length, width]
//
// The measurements are going to be given to you in string format with some examples below:
//
// [`1' 2 3/8"`, `1' 6"`, `1"`]
// [`4"`, `1 1/2"`, `5/32"`]
//
// Your job is to return a string that gives the length of trim required.
// We will use normal measuring tape denominations of 2,4,8,16,32 if any fractions are needed.
// Remember that the interior edge must be from the same side of the trim.
// Expected Output Format:
//
// Like the input, your output should show any feet
// followed by the ' symbol then any inches including the fractions followed by the " symbol.
// Use the lowest denominator for the fraction (i.e. 1/2 instead of 16/32).
// For those not familiar with imperial measurements, 12" = 1'.
//
// Answer:
function woodLength(dimensions) {
  const dims = [];
  for (let dim of dimensions) {
    dims.push(parse(dim));
  }
  const [h, l, w] = dims;
  let cut = (h + l) * 2 + w * 8;
  let out = getStr(cut);
  return out.trim();
}

const gcd = (...args) => args.reduce((a, b) => (b === 0 ? a : gcd(b, a % b)));

const getStr = (cut) => {
  let feet = 0;
  if (cut > 11) {
    feet = Math.floor(cut / 12);
    cut -= feet * 12;
  }
  let inches = Math.floor(cut);
  cut -= inches;
  let frac = 0;
  if (cut > 0) {
    frac = cut * 32;
  }
  let d = gcd(frac, 32);
  let str = "";
  if (feet > 0) str += `${feet}'`;
  if (inches > 0) str += ` ${inches}`;
  if (frac > 0) str += ` ${Math.floor(frac / d)}/${32 / d}`;
  return (str += inches > 0 || frac > 0 ? `"` : "");
};

const parse = (str) => {
  let cursor = 0;
  let total = 0;
  let chunk = "";
  while (cursor < str.length) {
    if (str[cursor] !== '"' && str[cursor] !== "'") {
      chunk += str[cursor];
    } else if (str[cursor] === "'") {
      total += +chunk.trim() * 12;
      chunk = "";
    } else {
      // process inches and fractions
      let fracpart = (chunk.match(/\d+\/\d+/) || [""])[0];
      let whole = chunk.replace(fracpart, "").trim();
      let parts = fracpart.match(/\d+/g) || [];
      if (parts.length) total += parts[0] / parts[1];
      if (whole) total += +whole;
    }

    cursor++;
  }
  return total;
};
