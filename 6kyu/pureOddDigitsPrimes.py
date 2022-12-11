# 6 kyu Pure odd digits primes
# 
# Primes that have only odd digits are pure odd digits primes, obvious but necessary definition.
# Examples of pure odd digit primes are: 11, 13, 17, 19, 31...
# If a prime has only one even digit does not belong to pure odd digits prime, no matter the amount of odd digits that may have.
# 
# Create a function, only_oddDigPrimes(), that receive any positive integer n, and output a list like the one below:
# 
# [number pure odd digit primes below n, largest pure odd digit prime smaller than n, smallest pure odd digit prime higher than n]
# 
# Let's see some cases:
# 
# only_oddDigPrimes(20) ----> [7, 19, 31]
# ///7, beacause we have seven pure odd digit primes below 20 and are 3, 5, 7, 11, 13, 17, 19
# 19, because is the nearest prime of this type to 20
# 31, is the first pure odd digit that we encounter after 20///
# 
# only_oddDigPrimes(40) ----> [9, 37, 53]
# 
# In the case that n, the given value, is a pure odd prime, should be counted with the found primes and search for the immediately below and the immediately after.
# 
# Happy coding!!
# 
# Answer:
def only_oddDigPrimes (n): # P.O.D.P (pure ood digit prime)
    gen = get_next_prime()
    count = 0
    maxB = 0
    maxH = 0
    while True:
        tmp = next(gen)
        if tmp < n :
            if is_odd_prime(tmp):
                count += 1
                maxB = tmp
        else:
            if is_odd_prime(tmp):
                maxH = tmp
                break
    return [count,maxB,maxH]

def is_prime(n):
    if n <= 1:
        return False
    for i in range(3, int(n**0.5 + 1)):
        if n % i == 0:
            return False
    return True

def get_next_prime(n = 1):
    while True:
        if is_prime(n):
            yield n
        n = n + 1

def is_odd_prime(n):
    for i in str(n):
        if int(i) % 2 == 0:
            return False
    return True
