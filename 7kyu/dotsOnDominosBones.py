# 7 kyu Dots on Domino's Bones
# 
# To earn a huge capital, you need to have an unconventional mindset.
# Of course, with such a complex job, there must also be special mechanisms for recreation and entertainment.
# For this purpose, the casino came up with a special domino set.
# Ordinary dominoes are a set of different combinations of two tiles, each displaying 0 to 6 points.
# And this set is a similar combination of tiles, but the number of points on each can be from
# zero to a set value that depends on the intellectual level of the players.
# There are all kinds of tile combinations in this dice set, but none of them must be repeated
# (combinations such as 2 | 5 and 5 | 2 are considered the same). there's a domino, don't worry :)
# When making this set of dominoes, the manufacturer faced the problem of counting the total number of points on all dominoes.
# This is due to the fact that the dominoes are decorated with diamonds, which are dots on the tiles and the cost of which must be estimated during manufacture.
# 
# Input data:
# 
# The function dots_on_domino_bones() - passes n - the maximum number of points on one domino tile.
# 
# Test values are -10 < n < 1000
# 
# Output data:
# 
# Your function should return the number of diamond stones to be made for a given set of dice.
# 
# If a number less than zero is passed to the function, -1 should be output
# 
# Example:
# 
# For dominoes where the maximum possible number on the knuckle is 2, the possible knuckles
# will be as follows --> 0 | 1, 0 | 2, 1 | 1, 1 | 2, 2 | 2 therefore, the sum of all values on the knuckles will be 1 + 2 + 1 + 1 + 1 + 2 + 2 + 2 = 12
# 
# dots_on_domino_bones(2) --> 12
# dots_on_domino_bones(3) --> 30
# dots_on_domino_bones(20) --> 4620
# dots_on_domino_bones(-3) --> -1
# 
# Help me write a program that solves this problem.
# 
# Answer:
def dots_on_domino_bones(n):
    if n < 0: return -1
    sum = (n * (n + 1)) // 2
    return sum + sum * (n + 1)

# Shorter version:
def dots_on_domino_bones_short(n):
    return -1 if n < 0 else (n + 2) * (n + 1) * n // 2