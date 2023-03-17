# 6 kyu Transform To Prime
# 
# Given a List [] of n integers , find minimum number to be inserted in a list, so that sum of all elements of list should equal the closest prime number .
# Notes
# 
#     List size is at least 2 .
#     List's numbers will only positives (n > 0) .
#     Repetition of numbers in the list could occur .
#     The newer list's sum should equal the closest prime number .
# 
# Input >> Output Examples
# 
# 1- minimumNumber ({3,1,2}) ==> return (1)
# 
# Explanation:
# 
#     Since , the sum of the list's elements equal to (6) , the minimum number to be inserted to
#     transform the sum to prime number is (1) , which will make the sum of the List equal the closest prime number (7) .
# 
# 2-  minimumNumber ({2,12,8,4,6}) ==> return (5)
# 
# Explanation:
# 
#     Since , the sum of the list's elements equal to (32) , the minimum number to be inserted to transform
#     the sum to prime number is (5) , which will make the sum of the List equal the closest prime number (37) .
# 
# 3- minimumNumber ({50,39,49,6,17,28}) ==> return (2)
# 
# Explanation:
# 
#     Since , the sum of the list's elements equal to (189) , the minimum number to be inserted to transform
#     the sum to prime number is (2) , which will make the sum of the List equal the closest prime number (191) .
# 
# Answer:
import math

def minimum_number(nums):
    s = sum(nums)
    i = 0
    while True:
        if is_prime(s + i): return i
        i += 1

def is_prime(num):
    if num < 2:
        return False
    prime = (num != 1)
    sqrtnum = math.floor(math.sqrt(num))
    for i in range(2, sqrtnum + 1, 1):
        if num % i == 0: return False
    return prime
