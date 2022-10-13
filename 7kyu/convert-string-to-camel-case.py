# 6 kyu Convert string to camel case
# 
# Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
# The first word within the output should be capitalized only if the original word was capitalized 
# (known as Upper Camel Case, also often referred to as Pascal case).
# 
# Examples
# 
# "the-stealth-warrior" gets converted to "theStealthWarrior"
# "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
# 
# Answer:
def to_camel_case(text):
    if len(text) == 0:
        return text
    text = text.replace('_', '-')
    words = text.split('-')
    out = list(map(lambda e: e[0].upper()+e[1:].lower(), words))
    text = ''.join(out)
    text = words[0][0] + text[1:]
    return text