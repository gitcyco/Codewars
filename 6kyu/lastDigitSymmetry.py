# 6 kyu Last digit symmetry
# 
# Consider the number 1176 and its square (1176 * 1176) = 1382976. Notice that:
# 
#     the first two digits of 1176 form a prime.
#     the first two digits of the square 1382976 also form a prime.
#     the last two digits of 1176 and 1382976 are the same.
# 
# Given two numbers representing a range (a, b), how many numbers satisfy this property within that range? (a <= n < b)
# Example
# 
# solve(2, 1200) = 1, because only 1176 satisfies this property within the range 2 <= n < 1200. 
# See test cases for more examples. The upper bound for the range will not exceed 1,000,000. 
# 
# Answer:
import math

def solve(a,b):
    count = 0
    for i in range(a,b+1):
        if i > 9:
            last = i % 100
            lastS = (i*i) % 100
            if not last == lastS:
                continue
            dig = int(str(i)[:2])
            digS = int(str(i*i)[:2])
            if not is_prime(dig):
                continue
            if is_prime(digS):
                count += 1
    return count

def is_prime(num):
    if num < 2:
        return False
    prime = (num != 1)
    sqrtnum = math.floor(math.sqrt(num))
    for i in range(2, sqrtnum + 1, 1):
        if num % i == 0:
            prime = False
            break
    return prime