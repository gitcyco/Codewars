# 6 kyu SumFibs
# 
# Create a function that takes an argument n and sums even Fibonacci numbers up to n's index in the Fibonacci sequence.
# 
# Example:
# 
# sumFibs(5) === 2 // (0, 1, 1, 2, 3, 5);2 is the only even number in the sequence and doesn't have another
# number in the sequence to get added to in the indexed Fibonacci sequence.
# 
# Example:
# 
# sumFibs(9) === 44; // (0, 1, 1, 2, 3, 5, 8, 13, 21, 34)
# // 2 + 8 + 34 = 44;
# 
# Answer:
def sum_fibs(n):
    cache = {}
    sum = 0
    for i in range(n+1):
        print(i)
        sum += fib(i, cache) if fib(i, cache) % 2 == 0 else 0
    return sum

def fib(n, cache = {}):
    if(n in cache):
        return cache[n]
    if(n < 2):
        return n
    cache[n] = fib(n - 1, cache) + fib(n - 2, cache)
    return cache[n]
    pass
