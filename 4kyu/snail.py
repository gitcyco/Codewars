# 4 kyu Snail
# 
# Snail Sort
# 
# Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.
# 
# array = [[1,2,3],
#          [4,5,6],
#          [7,8,9]]
# snail(array) #=> [1,2,3,6,9,8,7,4,5]
# 
# For better understanding, please follow the numbers of the next array consecutively:
# 
# array = [[1,2,3],
#          [8,9,4],
#          [7,6,5]]
# snail(array) #=> [1,2,3,4,5,6,7,8,9]
# 
# This image will illustrate things more clearly:
# 
# NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.
# 
# NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].
# 
# Answer:
def snail(arr):
    x = y = mincol = minrow = 0
    maxcol = len(arr[0]) - 1 
    maxrow = len(arr) - 1
    result = []
    if not maxrow and not maxcol:
        return arr[0]
    while True:
        for ax in range(mincol, maxcol):
            result.append(arr[y][x])
            x += 1
        for ay in range(minrow, maxrow):
            result.append(arr[y][x])
            y += 1
        for ax in range(maxcol, mincol, -1):
            print(x)
            result.append(arr[y][x])
            x -= 1
        for ay in range(maxrow, minrow, -1):
            result.append(arr[y][x])
            y -= 1
        minrow += 1
        mincol += 1
        maxrow -= 1
        maxcol -= 1
        x = minrow
        y = mincol
        if x > maxcol or y > maxrow:
            break
        if minrow == maxrow and mincol == maxcol:
            result.append(arr[maxrow][maxcol])   
    return result
