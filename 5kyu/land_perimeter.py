# 5 kyu Land perimeter
# 
# Given an array arr of strings, complete the function by calculating the total perimeter of all the islands. 
# Each piece of land will be marked with 'X' while the water fields are represented as 'O'. 
# Consider each tile being a perfect 1 x 1 piece of land. Some examples for better visualization:
# 
# ['XOOXO',
#  'XOOXO',
#  'OOOXO',
#  'XXOXO',
#  'OXOOO'] 
# 
# which represents:
# 
# should return: "Total land perimeter: 24".
# 
# Following input:
# 
# ['XOOO',
#  'XOXO',
#  'XOXO',
#  'OOXX',
#  'OOOO']
# 
# which represents:
# 
# should return: "Total land perimeter: 18"
# 
# Answer:
def land_perimeter(arr):
    ylen = len(arr)
    xlen = len(arr[0])
    print(arr, ylen, xlen)
    shore = 0
    dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    for y in range(ylen):
        for x in range(xlen):
            if arr[y][x] == 'X':
                for diry, dirx in dirs:
                    newx = x + dirx
                    newy = y + diry
                    if newx < 0 or newy < 0 or newx >= xlen or newy >= ylen or arr[newy][newx] == 'O':
                        shore = shore + 1
    return f'Total land perimeter: {shore}'