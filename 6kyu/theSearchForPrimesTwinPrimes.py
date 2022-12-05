# 6 kyu The search for Primes! Twin Primes!
# 
# A twin prime is a prime number that is either 2 less or 2 more than another prime number -
# for example, either member of the twin prime pair (41, 43).
# In other words, a twin prime is a prime that has a prime gap of two.
# Sometimes the term twin prime is used for a pair of twin primes; an alternative name for this is prime twin or prime pair.
# (from wiki https://en.wikipedia.org/wiki/Twin_prime)
# 
# Your mission, should you choose to accept it, is to write a function that counts the number of sets of twin primes from 1 to n.
# 
# If n is wrapped by twin primes (n-1 == prime && n+1 == prime) then that should also count even though n+1 is outside the range.
# 
# Ex n = 10
# 
# Twin Primes are (3,5) (5,7) so your function should return 2!
# 
# Answer:
import math

def twin_prime(n):
    if n < 4:
        return 0
    count = 0
    for i in range(1,n):
        if is_prime(i) and is_prime(i + 2):
            count = count + 1
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
