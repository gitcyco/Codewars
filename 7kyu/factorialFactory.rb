# 7 kyu Factorial Factory
# 
# In mathematics, the factorial of integer 'n' is written as 'n!'. It is equal to the product of n and every integer preceding it. For example: 5! = 1 x 2 x 3 x 4 x 5 = 120
# 
# Your mission is simple: write a function that takes an integer 'n' and returns 'n!'.
# 
# You are guaranteed an integer argument. For any values outside the positive range, return null, nil or None .
# 
# Note: 0! is always equal to 1. Negative values should return null;
# 
# Answer:
def factorial(n)
    return n < 0 ? nil : n < 1 ? 1 : n * factorial(n-1)
end