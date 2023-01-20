# 7 kyu Sum of a nested list
# 
# Implement a function to calculate the sum of the numerical values in a nested list. For example :
# 
# sumNested([1, [2, [3, [4]]]]) => 10
# 
# Answer:
def sum_nested(lst):
    sum = 0
    for item in lst:
        if isinstance(item, list):
            sum += sum_nested(item)
        else:
            sum += item
    return sum