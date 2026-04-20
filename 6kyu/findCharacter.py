# 6 kyu Find character
# 
#     When no more interesting kata can be resolved, I just choose to create the new kata, to solve their own, to enjoy the process --myjinxin2015 said
# 
# Description:
# 
# Give you a character matrix. 
# Find out the character which has the smallest amount.
# 
# Arguments:
# 
#     matrix: A string that contains some letters. Each row is separated by "\n".
# 
# Results & Note:
# 
#     Returns the characters which has smallest amount, using string format.
#     If more than one characters are found, sort them according to the order A-Za-z0-9.
#     You can assume that there are at least two characters in the matrix.
#     Please ignore the "\n" ;-)
# 
# Some Examples
# 
# matrix=
# 00000000
# 0000O000
# 00000000
# 00000000
# 00000000
# 
# result -> "O"
# 
# matrix=
# mmmmmmmmmmmmm
# mmmmmmmmmmmmm
# mmmmmmmmmmmmm
# mmmmmmmmmnmmm
# 
# result -> "n"
# 
# matrix=
# AAAAAAAAAAA
# AABBBBBBBBB
# BCCCCCCCCDD
# DDDDEEEEFFF
# 
# result -> "F"
# 
# matrix=
# AAAAA
# ABBBB
# BCCCC
# DDDDE
# EEEEF
# FFFFF
# 
# result -> "CD"
# 
# Answer:
from collections import Counter
import re

def find_characters(matrix):
    counts = dict(Counter(matrix))
    counts.pop('\n', None)
    counts = dict(sorted(counts.items(), key=lambda item: item[1]))
    minval = None
    output = ""
    for key, value in counts.items():
        if minval == None or value < minval:
            minval = value
            output = key
        elif value == minval:
            output = output + key
        else:
            output = "".join(sorted(output))
            numpart = re.findall(r'\d+', output)
            output = re.sub(r'\d+', "", output)
            return output + "".join(numpart)
    