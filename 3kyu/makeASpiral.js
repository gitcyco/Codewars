// 3 kyu Make a spiral
//
// Your task, is to create a NxN spiral with a given size.
// 
// For example, spiral with size 5 should look like this:
// 
// 00000
// ....0
// 000.0
// 0...0
// 00000
// 
// and with the size 10:
// 
// 0000000000
// .........0
// 00000000.0
// 0......0.0
// 0.0000.0.0
// 0.0..0.0.0
// 0.0....0.0
// 0.000000.0
// 0........0
// 0000000000
// 
// Return value should contain array of arrays, of 0 and 1, with the first row being composed of 1s. For example for given size 5 result should be:
// 
// [[1,1,1,1,1],[0,0,0,0,1],[1,1,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]
// 
// Because of the edge-cases for tiny spirals, the size will be at least 5.
// 
// General rule-of-a-thumb is, that the snake made with '1' cannot touch to itself.
//
// Answer:

const spiralize = function (size) {
    const arr = Array(size).fill(0).map(e => e = Array(size).fill(0));
    let x = y = mincol = minrow = 0;
    let maxcol = arr[0].length - 1;
    let maxrow = arr.length - 1;
    let chr = 1;
    if (!maxrow && !maxcol) return arr[0];
    while (true) {
        for (x = mincol; x < maxcol; x++) arr[y][x] = chr;
        for (y = minrow; y < maxrow; y++) arr[y][x] = chr;
        for (x = maxcol; x > mincol; x--) arr[y][x] = chr;
        for (y = maxrow; y > minrow; y--) arr[y][x] = chr;
        chr = chr === 1 ? 0 : 1;
        arr[y + 1][x] = chr;

        minrow++;
        mincol++;
        maxrow--;
        maxcol--;
        x = minrow;
        y = mincol;
        if (x > maxcol || y > maxrow) break;
        if (minrow === maxrow && mincol === maxcol) {
            arr[y][x] = chr;
            break;
        }
    }
    if ((size / 2) % 2 === 0) {
        chr = chr === 1 ? 0 : 1;
        arr[y][x - 1] = chr;
    }
    return arr;
}

spiral(10);



// console.log(arr1, arr2);

// console.log(snail(arr7));


// [1,2,3,4,5,10,16,21,26,25,24,23,22,17,11,6,7,8,9,15,20,19,18,12,14]