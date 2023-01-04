# 3 kyu Make a spiral
# 
# Your task, is to create a NxN spiral with a given size.
# 
# For example, spiral with size 5 should look like this:
# 
# 00000
# ....0
# 000.0
# 0...0
# 00000
# 
# and with the size 10:
# 
# 0000000000
# .........0
# 00000000.0
# 0......0.0
# 0.0000.0.0
# 0.0..0.0.0
# 0.0....0.0
# 0.000000.0
# 0........0
# 0000000000
# 
# Return value should contain array of arrays, of 0 and 1, with the first row being composed of 1s. For example for given size 5 result should be:
# 
# [[1,1,1,1,1],[0,0,0,0,1],[1,1,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]
# 
# Because of the edge-cases for tiny spirals, the size will be at least 5.
# 
# General rule-of-a-thumb is, that the snake made with '1' cannot touch to itself.
# 
# Answer:
def spiralize(size):
    arr = [[0 for col in range(size)] for row in range(size)]
    chr = 1
    x = y = mincol = minrow = 0
    maxcol = len(arr[0]) - 1 
    maxrow = len(arr) - 1
    result = []
    if not maxrow and not maxcol:
        return arr[0]
    while True:
        for ax in range(mincol, maxcol):
            arr[y][x] = chr
            x += 1
        for ay in range(minrow, maxrow):
            arr[y][x] = chr
            y += 1
        for ax in range(maxcol, mincol, -1):
            arr[y][x] = chr
            x -= 1
        for ay in range(maxrow, minrow, -1):
            arr[y][x] = chr
            y -= 1
        
        chr = 0 if chr == 1 else 1
        arr[y + 1][x] = chr
        
        minrow += 1
        mincol += 1
        maxrow -= 1
        maxcol -= 1
        x = minrow
        y = mincol
        if x > maxcol or y > maxrow:
            break
        if minrow == maxrow and mincol == maxcol:
            arr[y][x] = chr
            break;

    if (size / 2) % 2 == 0:
        chr = 0 if chr == 1 else 1
        arr[y][x - 1] = chr
    return arr   