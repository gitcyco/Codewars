# 6 kyu Count characters in your string
# 
# The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
# 
# What if the string is empty? Then the result should be empty object literal, {}.
# 
# Answer:
def count(string):
    dict = {}
    for c in string:
        if c in dict:
            dict[c] += 1
        else:
            dict[c] = 1
    return dict