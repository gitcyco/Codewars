# 5 kyu Valid Parentheses
# 
# Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid.
# The function should return true if the string is valid, and false if it's invalid.
# Examples
# 
# "()"              =>  true
# ")(()))"          =>  false
# "("               =>  false
# "(())((()())())"  =>  true
# 
# Constraints
# 
# 0 <= input.length <= 100
# 
# Answer:
def valid_parentheses(string):
    stack = []
    for p in string:
        if p == '(':
            stack.append(p)
        if p == ')':
            if len(stack) > 0:
                val = stack.pop()
                if val != '(':
                    return False
            else:
                return False
    return False if len(stack) > 0 else True
