// 6 kyu Optimum coding school location
//
// You are currently working together with a local community to build a school teaching children how to code.
// First plans have been made and the community wants to decide on the best location for the coding school.
// In order to make this decision data about the location of students and potential locations is collected.
// Problem
//
// In order to be able to attract and teach as many students as possible we want to minimize
// the total traveling distance for potential students.
// The streets system is organized in a traditional grid system and students can only travel horizontally or vertically (not diagonal).
//
// The locations of interested students is given as an array with the first value of each
// entry presenting the x coordinate and the second value presenting the y coordinate:
//
// var students = [[3,7],[2,2],[14,1], ...];
//
// Potential locations are passed as an array of objects with an unique id, a x and y coordinate:
//
// var locations = [{id: 1, x: 3, y: 4}, {id: 2, x: 8, y: 2}, ...];
//
// Your task is now to evaluate which of the school locations would be best to minimize
// the distance for all potential students to the school.
//
// The desired output should consist of a string indicating the ID of the best suitable
// location and the x and y coordinates in the following form:
//
// "The best location is number 1 with the coordinates x = 3 and y = 4"
//
// Answer:
const optimumLocation = function (students, locations) {
  let final;
  let min = Infinity;
  let dists = locations
    .map((location) => {
      let loc = [location.x, location.y];
      let perStudent = students.map((s) => {
        return getDist(loc, s);
      });
      return { ...location, perStudent };
    })
    .forEach((location) => {
      let avg =
        location.perStudent.reduce((a, e) => a + e) /
        location.perStudent.length;
      if (avg < min) {
        min = avg;
        final = location;
      }
    });
  return `The best location is number ${final.id} with the coordinates x = ${final.x} and y = ${final.y}`;
};

function getDist(from, to) {
  return Math.abs(from[0] - to[0]) + Math.abs(from[1] - to[1]);
}
