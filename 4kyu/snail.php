<!-- 4 kyu Snail

Snail Sort

Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]

For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]

This image will illustrate things more clearly:

NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].

Answer: -->
const snail = function (arr) {
    let x = y = mincol = minrow = 0;
    let maxcol = arr[0].length - 1;
    let maxrow = arr.length - 1;
    let result = [];
    if (!maxrow && !maxcol) return arr[0];
    while (true) {
        for (x = mincol; x < maxcol; x++) result.push(arr[y][x]);
        for (y = minrow; y < maxrow; y++) result.push(arr[y][x]);
        for (x = maxcol; x > mincol; x--) result.push(arr[y][x]);
        for (y = maxrow; y > minrow; y--) result.push(arr[y][x]);
        minrow++;
        mincol++;
        maxrow--;
        maxcol--;
        x = minrow;
        y = mincol;
        if (x > maxcol || y > maxrow) break;
        if (minrow === maxrow && mincol === maxcol) {
            result.push(arr[maxrow][maxcol]);
            break;
        }
    }
    return result;
}


