# 4 kyu Sum Strings as Numbers
# 
# Given the string representations of two integers, return the string representation of the sum of those integers.
# 
# For example:
# 
# sumStrings('1','2') // => '3'
# 
# A string representation of an integer will contain no characters besides the ten numerals "0" to "9".
# 
# I have removed the use of BigInteger and BigDecimal in java
# 
# Python: your solution need to work with huge numbers (about a milion digits), converting to int will not work.
# 
# Answer:
import re

def sum_strings(a, b):
    alen = len(a)
    blen = len(b)
    length = alen if alen > blen else blen
    a, b = a[::-1], b[::-1]
    carry = 0
    total = ""
    for i in range(0, length):
        sum = carry + int(a[i] if alen > i else "0") + int(b[i] if blen > i else "0")
        total += str(sum % 10)
        carry = 1 if sum > 9 else 0
    total = re.sub("^0+", "", ("1" if carry > 0 else "") + total[::-1])
    
    return total if len(total) > 0 else "0"