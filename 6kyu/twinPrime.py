# 6 kyu Twin Prime
# 
# A twin prime is a prime number that differs from another prime number by 2. 
# Write a function named is_twin_prime which takes an int parameter and returns true if it is a twin prime, else false.
# Examples
# 
# given 5, which is prime
# 5 + 2 = 7, which is prime 
# 5 - 2 = 3, which is prime
# hence, 5 has two prime twins and it is a Twin Prime.
# 
# given 7, which is prime
# 7 - 2 = 5, which is prime
# 7 + 2 = 9. which is not prime
# hence, 7 has one prime twin, and it is a Twin Prime.
# 
# given 9, which is not prime 
# hence, 9 is not a Twin Prime
# 
# given 953, which is prime
# 953 - 2 = 951, which is not prime
# 953 + 2 = 955, which is not prime 
# hence, 953 is not a Twin Prime
# 
# Answer:
import math

def is_twinprime(n):
    if is_prime(n):
        return is_prime(n-2) or is_prime(n+2)
    return False

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