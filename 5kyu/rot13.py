# 5 kyu Rot13
# 
# ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. 
# ROT13 is an example of the Caesar cipher.
# 
# Create a function that takes a string and returns the string ciphered with Rot13. 
# If there are numbers or special characters included in the string, they should be returned as they are. 
# Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
# 
# Please note that using encode is considered cheating.
# 
# Answer:
def rot13(message):
    out = ""
    for s in message:
        out += rotate(s, 13) if s.isalpha() else s
    return out

def rotate(c, n):
    key = "abcdefghijklmnopqrstuvwxyz"
    upper = c.isupper()
    index = key.index(c.lower())
    rotx = (index + n) % 26
    return key[rotx].upper() if upper else key[rotx]