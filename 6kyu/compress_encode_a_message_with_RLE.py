# 6 kyu Compress/Encode a Message with RLE (Run Length Encoding)
# 
# Run Length Encoding is used to compress data. RLE works like this: 
#     characters = "AAAALOTOOOOFTEEEEXXXXXXT" then the encoding will store AAAA = A4 and L1 So all together:
# 
# encode("AAAALOTOOOOFTEEEEXXXXXXT") == "A4L1O1T1O4F1T1E4X6T1"
# # or
# encode("HELLO WORLD") == "H1E1L2O1 1W1O1R1L1D1"
# # or
# encode("FOO+BAR") == "F1O2+1B1A1R1"
# 
# as you can see, its not always as efficient, but with some specific data it works!
# 
# Answer:
import re

def encode(inp):
    return re.sub(r'(.)\1*', lambda m: m.group()[0] + str(len(m.group())), inp)


# iteratively:

# def encode(inp):
#     if not inp:
#         return ""
#     out = ""
#     count = 0
#     cur = inp[0]
#     for char in inp:
#         if char == cur:
#             count += 1
#         else:
#             out = out + cur + str(count)
#             cur = char
#             count = 1
#     out = out + cur + str(count)
#     return out