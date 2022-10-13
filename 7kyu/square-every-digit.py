# 7 kyu Square Every Digit
# 
# Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
# 
# For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
# 
# Note: The function accepts an integer and returns an integer
# 
# Answer:
def square_digits(num):
    newstr = int(''.join(map(lambda e: str(int(e)**2) , str(num))))
    return newstr