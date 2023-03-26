// 6 kyu Triple Sorting - Sort & Stringify a list by 3 attributes
//
// Tale University is a bit messy, and can't maintain an ordered list of their student.
// Tale's dean wants to print a sortet list of his students by the gpa, last name and age and post it on
// the walls so everybody can be impressed of his great students.
//
// Given a list of students, sort them by (from most important to least important):
//
//     GPA (descending)
//     First letter of last name (ascending)
//     Age (ascending)
//
// And the class Student:
//
// class Student {
//   constructor(age, gpa, fullName) {
//     this.age = age;
//     this.gpa = gpa;
//     this.fullName = fullName;
//   };
// };
//
// Return the sorted result as full names string, comma separated.
//
// For Example, given the list (name, age, gpa):
//
//     David Goodman, 23, 88
//     Mark Rose, 25, 82
//     Jane Doe, 22, 90
//     Jane Dane, 25, 90
//
// sort(students) should return "Jane Doe,Jane Dane,David Goodman,Mark Rose"
//
// Answer:
function sort(students) {
  return students
    .sort((a, b) => {
      let aLname = a.fullName.split(" ")[1];
      let bLname = b.fullName.split(" ")[1];
      return b.gpa - a.gpa || aLname[0].localeCompare(bLname[0]) || a.age - b.age;
    })
    .map((e) => e.fullName)
    .join(",");
}
