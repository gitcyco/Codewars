# 6 kyu T.T.T.17: Split odd and even
# 
# Complete function splitOddAndEven, accept a number n(n>0), return an array that contains the continuous parts of odd or even digits.
# 
# Please don't worry about digit 0, it won't appear ;-)
# Examples
# 
# splitOddAndEven(123)  ===  [1,2,3]
# 
# splitOddAndEven(223)  ===  [22,3]
# 
# splitOddAndEven(111)  ===  [111]
# 
# splitOddAndEven(13579)  ===  [13579]
# 
# splitOddAndEven(135246)  ===  [135,246]
# 
# splitOddAndEven(123456)  ===  [1,2,3,4,5,6]
# 
# Answer:
import re

def split_odd_and_even(n):
    out = []
    re.sub(r'[2468]*|[13579]*', lambda m: out.append(int(m.group())) if m.group() else None, str(n))
    return out