// 4 kyu Snail
//
// Snail Sort
// 
// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.
// 
// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]
// 
// For better understanding, please follow the numbers of the next array consecutively:
// 
// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]
// 
// This image will illustrate things more clearly:
// 
// NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.
// 
// NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].
//
// Answer:
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


// Below is just test data

arr1 = [[1, 2, 3, 4],
[5, 6, 7, 8],
[9, 10, 11, 12],
[13, 14, 15, 16]];
// snail(array) #=> [1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10]


arr2 = [[1, 2, 3, 4, 5],
[6, 7, 8, 9, 10],
[11, 12, 14, 15, 16],
[17, 18, 19, 20, 21],
[22, 23, 24, 25, 26]];

arr3 = [[1, 2, 3, 4, 5, 6, 7],
[8, 9, 10, 11, 12, 13, 14],
[15, 16, 17, 18, 19, 20, 21],
[22, 23, 24, 25, 26, 27, 28],
[29, 30, 31, 32, 33, 34, 35],
[36, 37, 38, 39, 40, 41, 42],
[43, 44, 45, 46, 47, 48, 49]];

arr4 = [[1, 2, 3],
[4, 5, 6],
[7, 8, 9]];

arr5 = [[1, 2],
[3, 4]];

arr6 = [[1]];

arr7 = [[]];

// console.log(arr1, arr2);

console.log(snail(arr7));


// [1,2,3,4,5,10,16,21,26,25,24,23,22,17,11,6,7,8,9,15,20,19,18,12,14]