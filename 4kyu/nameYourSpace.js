// 4 kyu Name Your Space
//
// Finish the namespace function so that it sets or gets the value at the path specified.
// The first argument should be the root object that the path belongs to.
// The 2nd argument is the path itself and the 3rd optional argument is the value to set at the path.
//
// If a value is provided then the path will be set to that value.
// Any objects not present within the path will be created automatically in order for the path to be successfully set.
//
// let stuff = {}
// namespace(stuff, 'moreStuff.name', 'the stuff')
// // results in {moreStuff: {name: 'the stuff'}}
//
// If no value is provided the the function will return the value at the path given.
// If the path is not valid/present then undefined will be returned.
//
// namespace(stuff, 'moreStuff.name') // returns 'the stuff'
// namesace(stuff, 'otherStuff.id') // returns undefined
//
// Answer:
function namespace(root, path, newval) {
  let items = path.split(".");
  let [obj, prop] = [items[0], items[1]];

  // Value was provided, so set/create the property tree with this value
  if (newval) {
    let nObj = {};
    let last = items.pop();
    nObj[last] = newval;
    while (items.length > 1) {
      let tObj = {};
      last = items.pop();
      tObj[last] = nObj;
      nObj = tObj;
    }
    root[items.pop()] = nObj;
    return root;
  }
  if (obj in root) {
    return root[obj][prop] ? root[obj][prop] : undefined;
  }
}
