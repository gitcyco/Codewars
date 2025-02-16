// 6 kyu Update inventory in your smartphone store
//
// You will be given an array which lists the current inventory of stock in your
// store and another array which lists the new inventory being delivered to your store today.
//
// Your task is to write a function that returns the updated list of your current inventory in alphabetical order.
// Example
//
// currentStock = [[25, 'HTC'], [1000, 'Nokia'], [50, 'Samsung'], [33, 'Sony'], [10, 'Apple']]
// newStock = [[5, 'LG'], [10, 'Sony'], [4, 'Samsung'], [5, 'Apple']]
//
// updateInventory(currentStock, newStock)  ==>
// [[15, 'Apple'], [25, 'HTC'], [5, 'LG'], [1000, 'Nokia'], [54, 'Samsung'], [43, 'Sony']]
//
// Answer:
function updateInventory(curStock, newStock) {
  const stock = curStock.reduce((a, [qty, tag]) => ((a[tag] = qty), a), {});
  newStock.forEach(([qty, tag]) => {
    if (tag in stock) stock[tag] += qty;
    else stock[tag] = qty;
  });
  return Object.entries(stock)
    .map(([tag, qty]) => [qty, tag])
    .sort((a, b) => a[1].localeCompare(b[1]));
}
