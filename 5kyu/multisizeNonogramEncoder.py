# 5 kyu Multisize Nonogram Encoder
# 
# If you're not familiar with nonograms, I recommend you to check this wikipedia page: Nonogram - Wikipedia
# 
# My friend Alex really likes to solve nonograms, and I've drawn one for him:
# 
# However, I'm too lazy to look through all 10 rows and all 10 columns to figure out all the clues.
# 
# Could you please write me a program that can convert a drawn nonogram (represented as an array of arrays):
# 
# nonogram = (
#   (0, 0, 0, 1, 0, 0, 0, 1, 1, 0),
#   (0, 0, 1, 1, 1, 0, 1, 1, 1, 1),
#   (0, 0, 1, 1, 1, 1, 1, 1, 1, 1),
#   (0, 0, 0, 1, 1, 1, 1, 1, 1, 0),
#   (0, 0, 0, 0, 0, 1, 1, 0, 0, 0),
#   (0, 1, 0, 0, 0, 0, 1, 1, 0, 0),
#   (1, 0, 1, 0, 0, 0, 1, 1, 0, 0),
#   (1, 1, 1, 0, 0, 1, 1, 0, 0, 0),
#   (1, 1, 1, 0, 0, 1, 1, 1, 0, 1),
#   (1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
# )
# 
# Into a tuple of such structure:
# 
# (column_clues, row_clues)
# 
# where
# 
# column_clues = ((4,), (1, 3), (2, 4),...) and row_clues = ((1, 2), (3, 4), (8,),...)
# 
# Notes:
# 
#     Any empty rows or empty columns (which are cosmically unlikely to occur in random tests) should be represented as an empty (zero-length) sequence.
#     Nonograms come in different sizes, such that 5 <= size <= 100
#     There are 200 random tests
# 
# Answer:
import re

def encode(nonogram):
    rows = ()
    cols = ()
    regex = re.compile('1+')
    
    for col in range(len(nonogram)):
        col_all = ""
        for row in range(len(nonogram)):
            if col == 0:
                t = ''.join(str(item) for item in nonogram[row])
                a = re.findall(regex, t)
                b = tuple(len(x) for x in a)
                rows = rows + (b,)
            col_all += str(nonogram[row][col])
        a = re.findall(regex, col_all)
        b = tuple(len(x) for x in a)
        cols = cols + (b,)
    
    return (cols, rows)