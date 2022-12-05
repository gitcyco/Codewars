# 6 kyu Is a number prime?
# 
# Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.
# 
# Per Wikipedia, a prime number ( or a prime ) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
# Requirements
# 
#     You can assume you will be given an integer input.
#     You can not assume that the integer will be only positive. You may be given negative numbers as well ( or 0 ).
#     NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. 
#     Numbers go up to 2^31 ( or similar, depending on language ). Looping all the way up to n, or n/2, will be too slow.
# 
# Example
# 
# is_prime(1)  /* false */
# is_prime(2)  /* true  */
# is_prime(-1) /* false */
# 
# Answer:
import math

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