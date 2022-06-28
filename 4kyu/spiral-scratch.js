

// Answer:

const spiral = function (size) {
    const arr = Array(size).fill(0).map(e => e = Array(size).fill(0));
    console.log(arr);
    let x = y = mincol = minrow = 0;
    let maxcol = arr[0].length - 1;
    let maxrow = arr.length - 1;
    let result = [];
    let chr = '0';
    // return;
    if (!maxrow && !maxcol) return arr[0];
    while (true) {
        for (x = mincol; x < maxcol; x++) arr[y][x] = chr;
        // chr = chr === '0' ? '-' : '0';
        for (y = minrow; y < maxrow; y++) arr[y][x] = chr;
        // chr = chr === '0' ? '-' : '0';
        for (x = maxcol; x > mincol; x--) arr[y][x] = chr;
        // chr = chr === '0' ? '-' : '0';
        for (y = maxrow; y > minrow; y--) arr[y][x] = chr;
        chr = chr === '0' ? '-' : '0';
        minrow++;
        mincol++;
        maxrow--;
        maxcol--;
        x = minrow;
        y = mincol;
        if (x > maxcol || y > maxrow) break;
        if (minrow === maxrow && mincol === maxcol) {
            arr[y][x] = chr;
            result.push(arr[maxrow][maxcol]);
            break;
        }
    }
    console.log(arr);
    return arr;
}

spiral(5);



// console.log(arr1, arr2);

// console.log(snail(arr7));


// [1,2,3,4,5,10,16,21,26,25,24,23,22,17,11,6,7,8,9,15,20,19,18,12,14]