// 4 kyu Undo/Redo
//
// The purpose of this kata is to implement the undoRedo function.
//
// This function takes an object and returns an object that has these actions to be performed on the object passed as a parameter:
//
// set(key, value) Assigns the value to the key. If the key does not exist, creates it.
//
// get(key) Returns the value associated to the key.
//
// del(key) removes the key from the object.
//
// undo() Undo the last operation (set or del) on the object. Throws an exception if there is no operation to undo.
//
// redo() Redo the last undo operation (redo is only possible after an undo). Throws an exception if there is no operation to redo.
//
// After set() or del() are called, there is nothing to redo.
//
// All actions must affect to the object passed to undoRedo(object) function. So you can not work with a copy of the object.
//
// Any set/del after an undo should disallow new redos.
//
// Answer:
function undoRedo(object) {
  const tracker = { actions: [], redo: [] };
  for (let [key, val] of Object.entries(object)) {
    tracker[key] = [val];
  }
  return {
    set: function (key, value, redo = false) {
      if (key in tracker) tracker[key].push(value);
      else tracker[key] = [value];
      tracker.actions.push(["set", key, value]);
      object[key] = value;
      if (!redo) tracker.redo = [];
    },
    get: function (key) {
      return object[key];
    },
    del: function (key, redo = false) {
      tracker.actions.push(["del", key, object[key], [...tracker[key]]]);
      delete object[key];
      delete tracker[key];
      if (!redo) tracker.redo = [];
    },
    undo: function () {
      if (tracker.actions.length === 0)
        throw new Error("Error, nothing to undo");
      let action = tracker.actions.pop();
      tracker.redo.push(action);
      const [type, key, val, history] = action;
      switch (type) {
        case "set":
          if (key in object && key in tracker) {
            tracker[key].pop();
            if (tracker[key].length === 0) delete object[key];
            else {
              let prev = tracker[key][tracker[key].length - 1];
              object[key] = prev;
            }
          } else throw new Error("Error trying to undo set");
          break;
        case "del":
          this.set(key, val, true);
          tracker[key] = history;
          tracker.actions.pop();
          break;
        default:
          break;
      }
    },
    redo: function () {
      if (tracker.redo.length === 0) throw new Error("Nothing to redo");
      let action = tracker.redo.pop();
      const [type, key, val] = action;
      switch (type) {
        case "set":
          this.set(key, val, true);
          break;
        case "del":
          this.del(key, true);
          break;
        default:
          break;
      }
    },
  };
}
