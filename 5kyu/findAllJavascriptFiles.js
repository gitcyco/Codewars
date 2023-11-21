// 5 kyu Find all javascript files
//
// The Folder class simulates the file system directory.
// The directory may contain other directories (Folder class objects) or just files (javascript strings).
//
// Your task is to find all files with .js extention. The order of the files doesn’t matter.
// Execute the callback function exactly once when you are done finding all javascript files.
//
// Folder Interface
//
// Folder has an asynchronous interface.
//
// interface Folder {
//   size((len: number) => void);
//   read(index: number, (file: Folder | string) => void);
// }
//
// root.size((s) => {
//   console.log(s); // s === 5
// });
//
// // since the folder size is 5 numbers from 0 to 4 are valid indexes
// root.read(4, (x) => {
//   console.log(x); // x === "8.html"
// });
//
// Folder Example
//
// root
// ├── 1.js
// ├── 2.js
// ├── foo
// │   ├── bar
// │   │   └── 3.txt
// │   └── 4.js
// ├── baz
// │   ├── 5.png
// │   ├── 6.js
// │   └── moo
// │       └── 7.txt
// └── 8.html
//
// const root = Folder([
//   "1.js",
//   "2.js",
//   Folder([
//     Folder([
//       "3.txt",
//     ]),
//     "4.js",
//   ]),
//   Folder([
//     "5.png",
//     "6.js",
//     Folder([
//       "7.txt",
//     ]),
//   ]),
//   "8.html",
// ]);
//
// findAllJavascriptFiles(root, arr => {
//   console.log(arr); // arr === ["1.js", "2.js", "4.js", "6.js"]
// })
//
// Answer:
async function findAllJavascriptFiles(folder, callback) {
  const files = [];
  await searchDir(folder, files);
  callback(files);
}

async function searchDir(folder, files) {
  const size = await getSize(folder);
  for (let i = 0; i < size; i++) {
    let entry = await readEntry(folder, i);
    if (typeof entry === "string") {
      if (/\.js$/i.test(entry)) files.push(entry);
    } else {
      await searchDir(entry, files);
    }
  }
}

async function getSize(folder) {
  return await new Promise((resolve, reject) => {
    folder.size((s) => resolve(s));
  });
}

async function readEntry(folder, index) {
  return await new Promise((resolve, reject) => {
    folder.read(index, (f) => resolve(f));
  });
}
