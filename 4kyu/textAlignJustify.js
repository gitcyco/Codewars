// 4 kyu Text align justify
//
// Your task in this Kata is to emulate text justification in monospace font.
// You will be given a single-lined text and the expected justification width.
// The longest word will never be greater than this width.
//
// Here are the rules:
//
//     Use spaces to fill in the gaps between words.
//     Each line should contain as many words as possible.
//     Use '\n' to separate lines.
//     Gap between words can't differ by more than one space.
//     Lines should end with a word not a space.
//     '\n' is not included in the length of a line.
//     Large gaps go first, then smaller ones ('Lorem--ipsum--dolor--sit-amet,' (2, 2, 2, 1 spaces)).
//     Last line should not be justified, use only one space between words.
//     Last line should not contain '\n'
//     Strings with one word do not need gaps ('somelongword\n').
//
// Example with width=30:
//
// Lorem  ipsum  dolor  sit amet,
// consectetur  adipiscing  elit.
// Vestibulum    sagittis   dolor
// mauris,  at  elementum  ligula
// tempor  eget.  In quis rhoncus
// nunc,  at  aliquet orci. Fusce
// at   dolor   sit   amet  felis
// suscipit   tristique.   Nam  a
// imperdiet   tellus.  Nulla  eu
// vestibulum    urna.    Vivamus
// tincidunt  suscipit  enim, nec
// ultrices   nisi  volutpat  ac.
// Maecenas   sit   amet  lacinia
// arcu,  non dictum justo. Donec
// sed  quam  vel  risus faucibus
// euismod.  Suspendisse  rhoncus
// rhoncus  felis  at  fermentum.
// Donec lorem magna, ultricies a
// nunc    sit    amet,   blandit
// fringilla  nunc. In vestibulum
// velit    ac    felis   rhoncus
// pellentesque. Mauris at tellus
// enim.  Aliquam eleifend tempus
// dapibus. Pellentesque commodo,
// nisi    sit   amet   hendrerit
// fringilla,   ante  odio  porta
// lacus,   ut   elementum  justo
// nulla et dolor.
//
// Answer:
function justify(text, width) {
  let words = text.split(" ");
  let items = [];
  let tmp = [];
  for (let word of words) {
    tmp.push(word);
    if (tmp.join(" ").length > width) {
      let removed = tmp.pop();
      items.push(tmp);
      tmp = [removed];
    }
  }
  items.push(tmp);
  let output = [];
  for (let row of items) {
    let sLen = width - row.join("").length;
    let count = row.length - 1;
    let base = count > 0 ? Math.floor(sLen / count) : 0;
    let extra = sLen - base * count;
    let line = row.join(" ".repeat(base));
    line = line.replace(/\s+/g, (e) => {
      if (extra) {
        extra--;
        return e + " ";
      } else return e;
    });
    output.push(line);
  }
  output[output.length - 1] = output[output.length - 1].replace(/\s+/g, " ");
  return output.join("\n");
}
