// 5 kyu Combining Records
//
// Duplicate data is a fact of life. It just happens.
// However, for a doctor that is treating a patient with multiple records it can be a very dangerous problem.
// Every time a patient is registered in a system their name and social security number (SSN) is captured.
// One of the main problems we are facing is the duplication of these patient records and we need your help.
// Problem
//
// Given a list of patient records, you have to determine the unique records by eliminating the duplicates.
// Input Format
//
// Each line contains one record in the form:
//
// NAME:SSN
//
// A NAME can be in any of the following forms:
//
// 1. [First Name]
// 2. [Last Name],[First Name]
// 3. [First Name] [Last Name]
// 4. [Last Name],[First Name] [Middle Name]
// 5. [First Name] [Middle Name] [Last Name]
// 6. [First Initial] [Middle Initial] [Last Name]
// 7. [First Name] [Middle Initial] [Last Name]
//
// So, if a person's name is Little Bow Peep => First Middle Last with an SSN 012345678, then she can have any of the following forms:
//
// Little:012345678
// Peep,Little:012345678
// Little Peep:012345678
// Peep,Little Bow:012345678
// Little Bow Peep:012345678
// L B Peep:012345678
// Little B Peep:012345678
//
// Constraints
//
// Names will be in the formats mentioned above. SSN will be of the format:
//
// DDDDDDDDD
//
// 5 <= Number of Lines <= 200,000
// 0 <= D <= 9
// Output Format
//
// Eliminate all the duplicate records and print unique names in the order it is read.
// If an SSN has multiple entries, combine the data from all entries and return the best possible name in the correct form (see below).
//
// If the name is of the form:
// [Last Name],[First Name] print, [First Name] [Last Name] instead
// [Last Name],[First Name] [Middle Name] print, [First Name] [Middle Name] [Last Name] instead
//
// The order of precedence for the multiple forms of the name Little Bow Peep is
//
// Little < Little Peep < L B Peep < Little B Peep < Little Bow Peep
// Sample Input
// ```` Sam:111111111 Green,Sam:111111111 Sam Green:111111111 Charlie:999999999 S T Bear:555555555 Green,Sam Reed:111111111 Smokey:555555555 Sam Reed Green:111111111 ````
// Sample Output
// ```` Sam Reed Green:111111111 Charlie:999999999 Smokey T Bear:555555555 ```` Note that the order in which
// the patients are initially encountered is preserved and name information is combined to produce the best possible form and that there is no line wrap after the last line.
//
// Answer:
function solution(data) {
  const db = new Map();
  const records = data.split("\n").map((e) => e.split(":"));
  let output = [];
  for (let rec of records) {
    const name = rec[0];
    let ssn = rec[1];
    const [f, m, l] = getName(name);
    if (db.has(ssn)) {
      let names = db.get(ssn);
      if (f.length > names.first.length) names.first = f;
      if (m.length > names.mid.length) names.mid = m;
      if (l.length > names.last.length) names.last = l;
    } else db.set(ssn, { first: f, mid: m, last: l });
  }
  for (let rec of db) {
    output.push(
      Object.values(rec[1])
        .filter((e) => e)
        .join(" ") +
        ":" +
        rec[0]
    );
  }
  return output.join("\n");
}

const getName = (str) => {
  let fName = "";
  let mName = "";
  let lName = "";
  str = str.replace(/([a-z]+)*,/i, (e, p1) => {
    lName = p1;
    return "";
  });
  let parts = str.split(" ");
  if (parts.length === 2) {
    if (lName === "") [fName, lName] = parts;
    else [fName, mName] = parts;
  } else if (parts.length === 3) [fName, mName, lName] = parts;
  else fName = str;
  return [fName, mName, lName];
};
