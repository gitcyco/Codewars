// 6 kyu Custom sort function
//
// Complete the sort function so that it returns the items passed into it in alphanumerical order.
// Conveniently enough, the standard array sort method has been disabled for you so that you are forced to create your own.
//
// Example:
//
// [1,3,2]  =>  [1,2,3]
//
// Answer:

// Simple bubblesort:
function sort(items) {
  let swap = true;
  let end = items.length;
  while (swap) {
    swap = false;
    for (let i = 0; i < end - 1; i++) {
      if (items[i] > items[i + 1]) {
        swap = true;
        [items[i], items[i + 1]] = [items[i + 1], items[i]];
      }
    }
    end--;
  }
  return items;
}
