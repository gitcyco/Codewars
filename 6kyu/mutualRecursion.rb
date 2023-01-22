# 6 kyu Mutual Recursion
# 
# Mutual Recursion allows us to take the fun of regular recursion (where a function calls itself until a terminating condition)
# and apply it to multiple functions calling each other!
# 
# Let's use the Hofstadter Female and Male sequences to demonstrate this technique.
# You'll want to create two functions F and M such that the following equations are true:
# 
# F(0) = 1
# M(0) = 0
# F(n) = n - M(F(n - 1))
# M(n) = n - F(M(n - 1))
# 
# Don't worry about negative numbers, n will always be greater than or equal to zero.
# 
# Answer:
def female(n)
    if(n == 0)
        return 1
    end
    return n - male(female(n-1))
end
  
def male(n)
    if(n == 0)
        return 0
    end
    return n - female(male(n-1))
end