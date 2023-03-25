# 6 kyu X marks the spot!
# 
# Write a function x(n) that takes in a number n and returns an nxn array with an X in the middle.
# The X will be represented by 1's and the rest will be 0's.
# E.g.
# 
# x(5) === [[1, 0, 0, 0, 1],
#           [0, 1, 0, 1, 0],
#           [0, 0, 1, 0, 0],
#           [0, 1, 0, 1, 0],
#           [1, 0, 0, 0, 1]];
# 
# x(6) === [[1, 0, 0, 0, 0, 1],
#           [0, 1, 0, 0, 1, 0],
#           [0, 0, 1, 1, 0, 0],
#           [0, 0, 1, 1, 0, 0],
#           [0, 1, 0, 0, 1, 0],
#           [1, 0, 0, 0, 0, 1]];
# 
# Answer:
def x(n):
    arr = [[ 0 for a in range(0,n)] for b in range(0,n)]
    min = 0
    max = n - 1
    mid = int(n / 2)
    for i in range(0,mid + 1):
        arr[min][min] = 1
        arr[min][max] = 1
        arr[max][min] = 1
        arr[max][max] = 1
        min += 1
        max -= 1
    return arr