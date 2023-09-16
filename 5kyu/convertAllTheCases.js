// 5 kyu Convert all the cases!
//
// In this kata, you will make a function that converts between camelCase, snake_case, and kebab-case.
//
// You must write a function that changes to a given case. It must be able to handle all three case types:
//
// js> changeCase("snakeCase", "snake")
// "snake_case"
// js> changeCase("some-lisp-name", "camel")
// "someLispName"
// js> changeCase("map_to_all", "kebab")
// "map-to-all"
// js> changeCase("doHTMLRequest", "kebab")
// "do-h-t-m-l-request"
// js> changeCase("invalid-inPut_bad", "kebab")
// undefined
// js> changeCase("valid-input", "huh???")
// undefined
// js> changeCase("", "camel")
// ""
//
// Your function must deal with invalid input as shown, though it will only be passed strings.
// Furthermore, all valid identifiers will be lowercase except when necessary, in other words on word boundaries in camelCase.
//
// Answer:
function changeCase(str, target) {
  if (str.length === 0) return "";
  if (getCase(str) === "INVALID") return undefined;
  let tokens = tokenize(str);
  switch (target) {
    case "camel":
      return toCamel(tokens);
    case "snake":
      return toSnake(tokens);
    case "kebab":
      return toKebab(tokens);
    default:
      return undefined;
  }
}
const getCase = (s) => {
  const funcs = [isCamel, isSnake, isKebab];
  let result = funcs.filter((f) => f(s)).length;
  if (!result || result > 1) return "INVALID";
  if (isCamel(s)) return "CAMEL";
  if (isSnake(s)) return "SNAKE";
  if (isKebab(s)) return "KEBAB";
};
const isCamel = (s) => s.toLowerCase() !== s || !/[-_]/g.test(s);
const isSnake = (s) => s.includes("_");
const isKebab = (s) => s.includes("-");

const toSnake = (a) => a.join("_");
const toKebab = (a) => a.join("-");
const toCamel = (a) => {
  let str = a[0];
  for (let i = 1; i < a.length; i++) {
    str += a[i][0].toUpperCase() + a[i].slice(1);
  }
  return str;
};
const tokenize = (s) => {
  let type = getCase(s);
  if (type === "CAMEL") {
    s = s.replace(/[A-Z]/g, (c) => "-" + c.toLowerCase());
  }
  return s.split(/[-_]/);
};
