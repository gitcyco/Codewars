// DESCRIPTION
//
//
// Answer:
function calculate1RM(w, r) {
  if (r === 0) return 0;
  if (r === 1) return w;
  return Math.max(...[epley(w, r), mcg(w, r), lomb(w, r)]);
}

const epley = (w, r) => Math.round(w * (1 + r / 30));
const mcg = (w, r) => Math.round((100 * w) / (101.3 - 2.67123 * r));
const lomb = (w, r) => Math.round(w * r ** 0.1);
