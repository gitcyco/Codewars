// 6 kyu Death by Coffee
//
// I drink too much coffee. Eventually it will probably kill me.
//
// Or will it..?
//
// Anyway, there's no way to know.
//
// Or is there...?
// The Discovery of the Formula
//
// I proudly announce my discovery of a formula for measuring the life-span of coffee drinkers!
//
// For
//
//     h is a health number assigned to each person (8 digit date of birth YYYYMMDD)
//
//     CAFE is a cup of regular coffee
//
//     DECAF is a cup of decaffeinated coffee
//
// To determine the life-time coffee limits:
//
//     Drink cups of coffee (i.e. add to h) until any part of the health number includes DEAD
//
//     If the test subject can survive drinking five thousand cups wihout being DEAD then coffee has no ill effect on them
//
// Kata Task
//
// Given the test subject's date of birth, return an array describing their life-time coffee limits
//
// [ regular limit , decaffeinated limit ]
// Notes
//
//     The limits are 0 if the subject is unaffected as described above
//
//     At least 1 cup must be consumed (Just thinking about coffee cannot kill you!)
//
// Examples
//
//     John was born 19/Jan/1950 so h=19500119. His coffee limits are [2645, 1162] which is only about 1 cup per week.
//     You better cut back John...How are you feeling? You don't look so well.
//
//     Susan (11/Dec/1965) is unaffected by decaffeinated coffee, but regular coffee is very bad for her [111, 0]. Just stick to the decaf Susan.
//
//     Elizabeth (28/Nov/1964) is allergic to decaffeinated coffee. Dead after only 11 cups [0, 11]. Read the label carefully Lizzy! Is it worth the risk?
//
//     Peter (4/Sep/1965) can drink as much coffee as he likes [0, 0]. You're a legend Peter!!
//
// Answer:
var coffeeLimits = function (y, m, d) {
  let num = +(
    y.toString().padStart(4, 0) +
    m.toString().padStart(2, 0) +
    d.toString().padStart(2, 0)
  );
  let caf = num;
  let decaf = num;
  const result = [0, 0];
  for (let i = 0; i < 5000; i++) {
    let strCaf = caf.toString(16);
    let strDecaf = decaf.toString(16);
    if (strCaf.includes("dead") && result[0] === 0) {
      result[0] = i;
    }
    if (strDecaf.includes("dead") && result[1] === 0) {
      result[1] = i;
    }
    if (result[0] && result[1]) break;
    caf += 0xcafe;
    decaf += 0xdecaf;
  }
  return result;
};
