# 5 kyu Numbers that are a power of their sum of digits
# 
# The number 81 has a special property, a certain power of the sum of its digits is equal to 81 (nine squared).
# Eighty one (81), is the first number in having this property (not considering numbers of one digit).
# The next one, is 512. Let's see both cases with the details
# 
# 8 + 1 = 9 and 92 = 81
# 
# 512 = 5 + 1 + 2 = 8 and 83 = 512
# 
# We need to make a function that receives a number as argument n and returns the n-th term of this sequence of numbers.
# Examples (input --> output)
# 
# 1 --> 81
# 
# 2 --> 512
# 
# Answer:
def power_sumDigTerm(n):
    out = []
    for i in range(2,100):
        for j in range(2,43):
            power = i ** j
            sum = 0
            for k in str(power):
                sum += int(k)
            if sum == i:
                out.append(power)
    return sorted(out)[n-1]

