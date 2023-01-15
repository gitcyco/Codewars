// 6 kyu Format phone number by template
//
// Introduction
//
// You need to write a function that will format a phone number by a template.
// Task
//
// You're given number and string.
//
// If there are more digits than needed, they should be ignored
//
// if there are less digits than needed, should return Invalid phone number
// Examples
//
// (79052479075, "+# ### ### ## ##") => "+7 905 247 90 75"
// (79052479075, "+# (###) ### ##-##") => "+7 (905) 247 90-75"
// (79052479075, "+# ### ### ## ##") => "+7 905 247 90 75"
// (81237068908090, "+## ### ### ## ##") => "+81 237 068 90 80"
// (8123706890, "+## ### ### ##-##") => "Invalid phone number"
// (911, "###") => "911"
// (112, "+ () -") => "+ () -"
//
// Answer:
export function formatNumber(number: number, template: string): string {
  let arr: string[] = number.toString().split("").reverse();
  let num: string = template.replace(/#/g, (e) => {
    let val: any = arr.pop();
    if(typeof val == "string") return val;
    else return "X";
  })
  if ((num.match(/X/g) || []).length > 0) return "Invalid phone number";
  return num;
}
