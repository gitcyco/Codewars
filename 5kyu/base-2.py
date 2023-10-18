# 5 kyu Base -2
# 
# In this Kata you must convert integers numbers from and to a negative-base binary system.
# 
# Negative-base systems can accommodate all the same numbers as standard place-value systems, but both
# positive and negative numbers are represented without the use of a minus sign
# (or, in computer representation, a sign bit); this advantage is countered by an increased complexity of arithmetic operations.
# 
# To help understand, the first eight digits (in decimal) of the Base(-2) system is:
# 
# [1, -2, 4, -8, 16, -32, 64, -128]
# 
# Example conversions:
# 
# Decimal, negabinary
# 
# 6,   '11010'
# -6,  '1110'
# 4,   '100'
# 18,  '10110'
# -11, '110101'
# 
# Answer:
def int_to_negabinary(n):
    m = 0xaaaaaaaa
    return "{0:b}".format(((n + m) ^ m))
    
def negabinary_to_int(s):
    nums = [int(i) for i in str(s)][::-1]
    result = 0
    for i in range(0,len(nums)):
        result += nums[i] * pow(-2, i)
    return result
