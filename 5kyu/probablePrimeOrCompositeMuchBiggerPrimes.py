# 5 kyu Probable Prime or Composite (Much bigger primes)
# 
# Check if given numbers are prime numbers.
# If number N is prime return "Probable Prime" else  return "Composite".
# 
# HINT: Upper bount is really big so you should use an efficient algorithm.
# 
# Input
#   1 < N ≤ 10100
# 
# Example
#   prime_or_composite(2) # should return Probable Prime
#   prime_or_composite(200) # should return Composite
# 
# Answer:
import random

# Miller-Rabin solution, adjust k upward for greater accuracy (and slower performance)
def prime_or_composite(n, k=5):
    if n == 3 or n == 2:
        return 'Probable Prime'
    if n <= 1 or n % 2 == 0:
        return 'Composite'
    s = 0
    r = n - 1
    while r % 2 == 0:
        s += 1
        r //= 2
    for _ in range(k):
        a = random.randint(2, n - 2)
        x = pow(a, r, n)
        if x == 1 or x == n - 1:
            continue
        for _ in range(s - 1):
            x = pow(x, 2, n)
            if x == n - 1:
                break
        else:
            return 'Composite'
    return 'Probable Prime'
