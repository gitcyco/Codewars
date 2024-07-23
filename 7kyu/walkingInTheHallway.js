// 7 kyu Walking in the hallway
//
// You are a security guard at a large company, your job is to look over the cameras.
// Finding yourself bored you decide to make a game from the people walking in a hallway on one of the cameras.
// As many people walk past the hallway you decide to figure out the minimum steps it will take
// before 2 people cross or come into contact with each other (assuming every person takes a step at the same time).
//
// People are represented as arrows, < for a person moving left and > for a person moving right and - for an empty space
//
// A step represents a person moving forward one -, each person moves 1 step at the same time
//
// in this example the first people to come in contact with each other do it after 1 step
// ---><----
//
// in this example the first people to come in contact with each other do it after 1 step
// --->-<------->----<-
//
// in the case that no people come in contact return -1
// ----<----->----
//
// Answer:
function contact(hallway) {
  let min = Infinity;
  hallway.replace(/>-{0,}</g, (e) => {
    let num = (e.match(/-/g) || []).length;
    min = Math.min(num, min);
    if (min === 0) min = 1;
    return e;
  });
  if (min === Infinity) return -1;
  if (min % 2 === 0) return min / 2 + 1;
  return Math.ceil(min / 2);
}
