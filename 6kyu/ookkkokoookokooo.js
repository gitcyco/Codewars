// 5 kyu Ookkk, Ok, O? Ook, Ok, Ooo!
//
// We've got a message from the Librarian. As usual there're many o and k in it and, as all
// codewarriors don't know "Ook" language we need that you translate this message.
//
// tip : it seems traditional "Hello World!" would look like : Ok, Ook, Ooo?  Okk, Ook, Ok?
// Okk, Okk, Oo?  Okk, Okk, Oo?  Okk, Okkkk?  Ok, Ooooo?  Ok, Ok, Okkk?  Okk, Okkkk?  Okkk, Ook, O?  Okk, Okk, Oo?  Okk, Ook, Oo?  Ook, Ooook!
//
// Your task is to implement a function okkOokOo(okkOookk), that would take the okkOookk message as input and return a decoded human-readable string.
//
// eg:
//
// okkOokOo('Ok, Ook, Ooo!')  // -> 'H'
// okkOokOo('Ok, Ook, Ooo?  Okk, Ook, Ok?  Okk, Okk, Oo?  Okk, Okk, Oo?  Okk, Okkkk!')  // -> 'Hello'
// okkOokOo('Ok, Ok, Okkk?  Okk, Okkkk?  Okkk, Ook, O?  Okk, Okk, Oo?  Okk, Ook, Oo?  Ook, Ooook!')  // -> 'World!'
//
// Answer:
function okkOokOo(okkOookk) {
  const clean = okkOookk.toLowerCase().replace(/[^ok?!]/gi, "");
  let chars = clean.split(/[?!]/).filter((e) => e.length > 0);
  chars = chars.map((e) => {
    let num = parseInt([...e].map((n) => (n === "o" ? 0 : 1)).join(""), 2);
    return String.fromCharCode(num);
  });
  return chars.join("");
}
