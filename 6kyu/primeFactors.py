# 6 kyu Prime Factors
# 
# Inspired by one of Uncle Bob's TDD Kata
# 
# Write a function that generates factors for a given number.
# 
# The function takes an integer as parameter and returns a list of integers (ObjC: array of NSNumbers representing integers).
# That list contains the prime factors in numerical sequence.
# Examples
# 
# 1  ==>  []
# 3  ==>  [3]
# 8  ==>  [2, 2, 2]
# 9  ==>  [3, 3]
# 12 ==>  [2, 2, 3]
# 
# Answer:
def prime_factors (n):
    out = []
    for i in range(2,n+1):
        while n % i == 0:
            out.append(i);
            n = n / i
    return out
